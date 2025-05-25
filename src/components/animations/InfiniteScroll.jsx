import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

export default function InfiniteScroll({
  width = "100%",
  height = "15rem",
  items = [],
  itemMinWidth = 150,
  isTilted = false,
  tiltDirection = "up",
  autoplay = false,
  autoplaySpeed = 0.5,
  autoplayDirection = "right",
  pauseOnHover = false,
}) {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);

  const getTiltTransform = () => {
    if (!isTilted) return "none";
    return tiltDirection === "up"
      ? "rotateY(20deg) rotateX(-5deg) skewY(-10deg)"
      : "rotateY(-20deg) rotateX(5deg) skewY(10deg)";
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container || items.length === 0) return;

    const divItems = gsap.utils.toArray(container.children);
    if (!divItems.length) return;

    // Set initial position
    divItems.forEach((child, i) => {
      gsap.set(child, { x: i * (itemMinWidth + 16) }); // 16px is ~1em margin
    });

    const totalWidth = divItems.length * (itemMinWidth + 16);
    const wrapX = gsap.utils.wrap(0, totalWidth);

    const observer = Observer.create({
      target: container,
      type: "wheel,touch,pointer",
      preventDefault: true,
      onPress: ({ target }) => (target.style.cursor = "grabbing"),
      onRelease: ({ target }) => (target.style.cursor = "grab"),
      onChange: ({ deltaX, isDragging, event }) => {
        const d = event.type === "wheel" ? -deltaX : deltaX;
        const distance = isDragging ? d * 5 : d * 10;
        divItems.forEach((child) => {
          gsap.to(child, {
            duration: 0.5,
            ease: "expo.out",
            x: `+=${distance}`,
            modifiers: {
              x: (x) => `${wrapX(parseFloat(x))}px`,
            },
          });
        });
      },
    });

    let rafId;
    if (autoplay) {
      const direction = autoplayDirection === "right" ? 1 : -1;
      const speedPerFrame = autoplaySpeed * direction;

      const tick = () => {
        divItems.forEach((child) => {
          gsap.set(child, {
            x: `+=${speedPerFrame}`,
            modifiers: {
              x: (x) => `${wrapX(parseFloat(x))}px`,
            },
          });
        });
        rafId = requestAnimationFrame(tick);
      };

      rafId = requestAnimationFrame(tick);

      if (pauseOnHover) {
        const stop = () => rafId && cancelAnimationFrame(rafId);
        const start = () => (rafId = requestAnimationFrame(tick));
        container.addEventListener("mouseenter", stop);
        container.addEventListener("mouseleave", start);

        return () => {
          observer.kill();
          stop();
          container.removeEventListener("mouseenter", stop);
          container.removeEventListener("mouseleave", start);
        };
      } else {
        return () => {
          observer.kill();
          cancelAnimationFrame(rafId);
        };
      }
    }

    return () => {
      observer.kill();
      cancelAnimationFrame(rafId);
    };
  }, [
    items,
    autoplay,
    autoplaySpeed,
    autoplayDirection,
    pauseOnHover,
    itemMinWidth,
  ]);

  return (
    <div
      ref={wrapperRef}
      className="relative w-full overflow-hidden border-t-2 border-b-2 border-transparent"
      style={{ height }}
    >
      <div
        ref={containerRef}
        className="flex flex-row whitespace-nowrap px-4 cursor-grab"
        style={{
          width: width,
          transform: getTiltTransform(),
        }}
      >
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="inline-flex items-center justify-center text-xl font-semibold text-center border-2 border-white rounded-[15px] select-none box-border relative mr-4"
            style={{ width: `${itemMinWidth}px` }}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}
