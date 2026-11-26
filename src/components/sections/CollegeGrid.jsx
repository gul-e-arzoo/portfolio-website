"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import Button from "@/components/ui/Button";

const SIZES = {
  col1: { w: 365, h: 270 },
  col2: { w: 216, h: 276 },
  col3: { w: 315, h: 360 },
  col4: { w: 532, h: 250 },
};

const Tile = ({ src, colKey }) => {
  const { w, h } = SIZES[colKey];
  return (
    <div className="overflow-hidden bg-[#0b0b0b] w-full">
      {/* eslint-disable-next-line @next/next/no-img-element -- decorative marquee */}
      <img
        src={src}
        alt=""
        width={w}
        height={h}
        className="block h-auto w-full select-none"
        draggable={false}
      />
    </div>
  );
};

const COLLAPSED_HEIGHT =
  "h-48 sm:h-52 md:h-56 lg:h-60 transition-[height] duration-500 ease-out";
const EXPANDED_HEIGHT =
  "h-245 md:h-280 lg:h-260 xl:h-280 transition-[height] duration-500 ease-out";

const COL_WIDTH_CLASS = {
  col1: "w-[42vw] max-w-[200px] shrink-0 sm:w-[220px] lg:w-auto lg:max-w-none lg:min-w-[365px] lg:flex-[365]",
  col2: "w-[38vw] max-w-[180px] shrink-0 sm:w-[200px] lg:w-auto lg:max-w-none lg:min-w-[216px] lg:flex-[216]",
  col3: "hidden min-[400px]:block w-[40vw] max-w-[190px] shrink-0 sm:w-[210px] lg:w-auto lg:max-w-none lg:min-w-[315px] lg:flex-[315]",
  col4: "hidden lg:block lg:min-w-[532px] lg:flex-[532]",
};

const LoopColumn = ({
  items,
  colKey,
  direction = "down",
  duration = 18,
  expanded = false,
}) => {
  const animClass =
    direction === "down" ? "animate-marquee-down" : "animate-marquee-up";

  const heightClass = expanded ? EXPANDED_HEIGHT : COLLAPSED_HEIGHT;

  return (
    <div
      className={`relative overflow-hidden ${COL_WIDTH_CLASS[colKey] ?? ""}`}
    >
      <div className={`${heightClass} overflow-hidden w-full`}>
        <div
          className={`${animClass} flex flex-col gap-2 will-change-transform w-full`}
          style={{ animationDuration: `${duration}s` }}
        >
          {[...items, ...items, ...items].map((src, idx) => (
            <Tile key={`${src}-${idx}`} src={src} colKey={colKey} />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-linear-to-b from-[#1B0002] via-[#1B0002]/50 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-[#1B0002] via-[#1B0002]/50 to-transparent z-10" />
    </div>
  );
};

const CollageGrid = () => {
  const [expanded, setExpanded] = useState(false);

  const col1 = ["/hero/c1.png", "/hero/c2.png", "/hero/c3.jpg", "/hero/c4.jpg"];
  const col2 = ["/hero/c5.jpg", "/hero/c6.png", "/hero/c7.png", "/hero/c8.jpg"];
  const col3 = ["/hero/c9.png", "/hero/c10.png", "/hero/c11.jpg"];
  const col4 = [
    "/hero/c12.jpg",
    "/hero/c13.png",
    "/hero/c14.jpg",
    "/hero/c15.png",
  ];

  const col1MeasureRef = useRef(null);
  const col2MeasureRef = useRef(null);
  const col3MeasureRef = useRef(null);
  const col4MeasureRef = useRef(null);

  const [halfHeights, setHalfHeights] = useState({
    col1: 0,
    col2: 0,
    col3: 0,
    col4: 0,
  });

  useEffect(() => {
    const measure = () => {
      setHalfHeights({
        col1: col1MeasureRef.current?.getBoundingClientRect().height ?? 0,
        col2: col2MeasureRef.current?.getBoundingClientRect().height ?? 0,
        col3: col3MeasureRef.current?.getBoundingClientRect().height ?? 0,
        col4: col4MeasureRef.current?.getBoundingClientRect().height ?? 0,
      });
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const REF_DURATION = 24;

  const durations = useMemo(() => {
    return {
      col1: 40,
      col2: 24,
      col3: 40,
      col4: 24,
    };
  }, []);

  return (
    <section className="w-full overflow-x-clip">
      <div className="mx-auto w-full ">
        <AnimatedContainer animationType="fade-up" delay={0.2}>
          <div className="absolute -left-2499.75 -top-2499.75 opacity-0 pointer-events-none">
            <div ref={col1MeasureRef} className="flex flex-col gap-2">
              {col1.map((src) => (
                <Tile key={`m1-${src}`} src={src} colKey="col1" />
              ))}
            </div>
            <div ref={col2MeasureRef} className="flex flex-col gap-2">
              {col2.map((src) => (
                <Tile key={`m2-${src}`} src={src} colKey="col2" />
              ))}
            </div>
            <div ref={col3MeasureRef} className="flex flex-col gap-2">
              {col3.map((src) => (
                <Tile key={`m3-${src}`} src={src} colKey="col3" />
              ))}
            </div>
            <div ref={col4MeasureRef} className="flex flex-col gap-2">
              {col4.map((src) => (
                <Tile key={`m4-${src}`} src={src} colKey="col4" />
              ))}
            </div>
          </div>

          <div className="no-scrollbar flex w-full max-w-full gap-2 overflow-x-auto overscroll-x-contain lg:overflow-hidden">
            <LoopColumn
              items={col1}
              colKey="col1"
              direction="down"
              duration={durations.col1}
              expanded={expanded}
            />
            <LoopColumn
              items={col2}
              colKey="col2"
              direction="up"
              duration={durations.col2}
              expanded={expanded}
            />
            <LoopColumn
              items={col3}
              colKey="col3"
              direction="down"
              duration={durations.col3}
              expanded={expanded}
            />
            <LoopColumn
              items={col4}
              colKey="col4"
              direction="up"
              duration={durations.col4}
              expanded={expanded}
            />
          </div>

          <div className="flex justify-center pt-4 pb-2 px-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setExpanded((prev) => !prev)}
              aria-expanded={expanded}
            >
              {expanded ? "View less" : "View all"}
            </Button>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
};

export default CollageGrid;
