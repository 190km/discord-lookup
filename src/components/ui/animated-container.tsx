"use client";

import { useRef, useEffect, useState } from "react";

export default function AnimatedContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(undefined);
  const [ready, setReady] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!innerRef.current) return;

    const observer = new ResizeObserver(([entry]) => {
      const newHeight = entry.contentRect.height;
      if (ready && height !== undefined && height !== newHeight) {
        setIsTransitioning(true);
      }
      setHeight(newHeight);
      if (!ready) {
        requestAnimationFrame(() => setReady(true));
      }
    });

    observer.observe(innerRef.current);
    return () => observer.disconnect();
  }, [ready, height]);

  return (
    <div
      className={`w-full flex justify-center items-start ${ready ? "transition-[height] duration-500 ease-in-out" : ""}`}
      style={{
        height: height !== undefined ? `${height}px` : "auto",
        overflow: isTransitioning ? "hidden" : "visible",
      }}
      onTransitionEnd={() => setIsTransitioning(false)}
    >
      <div ref={innerRef} className="w-full flex justify-center">
        {children}
      </div>
    </div>
  );
}
