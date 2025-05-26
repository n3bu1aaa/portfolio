import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

export default function InfiniteScroll({
  width = "100%",
  maxHeight = "30rem",
  items = [],
  itemMinWidth = 150,
  isTilted = false,
  tiltDirection = "left",
  autoplay = false,
  autoplaySpeed = 0.5,
  autoplayDirection = "right",
  pauseOnHover = false,
}) {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);

  const getTiltTransform = () => {
    if (!isTilted) return "none";
    return tiltDirection === "left"
      ? "rotateX(20deg) rotateZ(-20deg) skewY(20deg)"
      : "rotateX(20deg) rotateZ(20deg) skewY(-20deg)";
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container || items.length === 0) return;

    const divItems = gsap.utils.toArray(container.children);
    if (!divItems.length) return;

    const itemWidth = divItems[0].offsetWidth;
    const totalWidth = itemWidth * items.length;

    const wrapFn = gsap.utils.wrap(-totalWidth, totalWidth);

    divItems.forEach((child, i) => {
      const x = i * itemWidth;
      gsap.set(child, { x });
    });

    const observer = Observer.create({
      target: container,
      type: "wheel,touch,pointer",
      preventDefault: true,
      onPress: ({ target }) => {
        target.style.cursor = "grabbing";
      },
      onRelease: ({ target }) => {
        target.style.cursor = "grab";
      },
      onChange: ({ deltaY, deltaX, isDragging, event }) => {
        const d =
          event.type === "wheel" ? -deltaX || -deltaY : deltaX || deltaY;
        const distance = isDragging ? d * 5 : d * 10;
        divItems.forEach((child) => {
          gsap.to(child, {
            duration: 0.5,
            ease: "expo.out",
            x: `+=${distance}`,
            modifiers: {
              x: gsap.utils.unitize(wrapFn),
            },
          });
        });
      },
    });

    let rafId;
    if (autoplay) {
      const directionFactor = autoplayDirection === "right" ? 1 : -1;
      const speedPerFrame = autoplaySpeed * directionFactor;

      const tick = () => {
        divItems.forEach((child) => {
          gsap.set(child, {
            x: `+=${speedPerFrame}`,
            modifiers: {
              x: gsap.utils.unitize(wrapFn),
            },
          });
        });
        rafId = requestAnimationFrame(tick);
      };

      rafId = requestAnimationFrame(tick);

      if (pauseOnHover) {
        const stopTicker = () => rafId && cancelAnimationFrame(rafId);
        const startTicker = () => (rafId = requestAnimationFrame(tick));

        container.addEventListener("mouseenter", stopTicker);
        container.addEventListener("mouseleave", startTicker);

        return () => {
          observer.kill();
          stopTicker();
          container.removeEventListener("mouseenter", stopTicker);
          container.removeEventListener("mouseleave", startTicker);
        };
      } else {
        return () => {
          observer.kill();
          rafId && cancelAnimationFrame(rafId);
        };
      }
    }

    return () => {
      observer.kill();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [
    items,
    autoplay,
    autoplaySpeed,
    autoplayDirection,
    pauseOnHover,
    isTilted,
    tiltDirection,
  ]);

  return (
    <div
      className="relative flex items-center justify-center w-full overflow-hidden overscroll-none"
      ref={wrapperRef}
      style={{ width, maxHeight }}
    >
      <div
        className="flex flex-row overscroll-contain cursor-grab origin-center"
        ref={containerRef}
        style={{
          height: maxHeight,
          transform: getTiltTransform(),
        }}
      >
        {items.map((item, i) => (
          <div
            className="h-11/12 flex-shrink-0 flex items-center justify-center p-3 text-xl font-semibold text-center border-2 border-white bg-gray-300/90 rounded-[15px] select-none box-border relative"
            key={i}
            style={{ minWidth: `${itemMinWidth}px` }}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}
