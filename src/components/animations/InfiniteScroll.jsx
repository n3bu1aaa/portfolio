// InfiniteScroll.jsx

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

export default function InfiniteScroll({
  // ----- Layout / Style Props -----
  width = "100%", // Width of the outer wrapper
  maxHeight = "30rem", // Max-height of the outer wrapper (swap with width if needed)
  negativeMargin = "-0.5em", // Negative margin to reduce spacing between items
  // ----- Items Prop -----
  items = [], // Array of items with { content: ... }
  itemMinWidth = 150, // Fixed width for each item (changed from height)
  // ----- Tilt Props -----
  isTilted = false, // Whether the container is in "skewed" perspective
  tiltDirection = "left", // tiltDirection: "left" or "right"
  // ----- Autoplay Props -----
  autoplay = false, // Whether it should automatically scroll
  autoplaySpeed = 0.5, // Speed (pixels/frame approx.)
  autoplayDirection = "right", // "right" or "left"
  pauseOnHover = false, // Pause autoplay on hover
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
    if (!container) return;
    if (items.length === 0) return;

    const divItems = gsap.utils.toArray(container.children);
    if (!divItems.length) return;

    const firstItem = divItems[0];
    const itemStyle = getComputedStyle(firstItem);
    const itemWidth = firstItem.offsetWidth;
    const itemMarginLeft = parseFloat(itemStyle.marginLeft) || 0;
    const totalItemWidth = itemWidth + itemMarginLeft;
    const totalWidth =
      itemWidth * items.length + itemMarginLeft * (items.length - 1);

    const wrapFn = gsap.utils.wrap(-totalWidth, totalWidth);

    divItems.forEach((child, i) => {
      const x = i * totalItemWidth;
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
        // Use deltaX for horizontal scroll input, fallback to deltaY if needed
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
    negativeMargin,
  ]);

  return (
    <div
      className="relative flex items-center justify-center w-full overflow-hidden overscroll-none border-l-2 border-r-2 border-l-dotted border-r-dotted border-transparent"
      ref={wrapperRef}
      style={{ maxHeight: width }} // Flip width and height for horizontal scroll
    >
      {/* Container */}
      <div
        className="flex flex-row overscroll-contain px-4 cursor-grab origin-center"
        ref={containerRef}
        style={{
          height: maxHeight,
          transform: getTiltTransform(),
        }}
      >
        {items.map((item, i) => (
          <div
            className="flex items-center justify-center p-4 text-xl font-semibold text-center border-2 border-white rounded-[15px] select-none box-border relative"
            key={i}
            style={{
              minWidth: `${itemMinWidth}px`,
              marginLeft: negativeMargin,
            }}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}
