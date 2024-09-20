"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import InfiniteScroll from "./InfiniteScroll";
import { ImageType } from "@/types"; // Assuming you have this type defined

interface HeroInfiniteSliderProps {
  images: ImageType[];
  speed?: number ;
}

function HeroInfiniteSlider({ images, speed = 50 }: HeroInfiniteSliderProps) {
  const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set());
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleImages((prev) => new Set(prev).add(index));
          }
        });
      },
      { rootMargin: "200px" }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const renderImage = (image: ImageType, index: number) => {
    const gridDisplay =
      (index + 3) % 3 === 0
        ? { gridRow: `1/3` }
        : (index + 3) % 3 === 1
        ? { gridRow: `1/2` }
        : { gridRow: `2/3` };

    return (
      <div
        className='flex flex-col bg-gray-300 rounded-xl min-w-[256px] md:min-w-[400px] overflow-hidden'
        key={index}
        ref={(el) => { imageRefs.current[index] = el; }}
        data-index={index}
        style={gridDisplay}
      >
        {(visibleImages.has(index) || true) && ( // Always render for now
          <Image
            className='grow-1 self-stretch h-0 min-h-full w-full object-cover'
            src={image.src}
            alt={image.alt}
            width={400}
            height={400}
            priority={index < 4} // Load first 4 images immediately
          />
        )}
      </div>
    );
  };

  return (
    <InfiniteScroll speed={speed}>
      <div
        className='grid gap-6 min-h-[500px]'
        style={{
          gridTemplateColumns: `repeat(${images.length}, 1fr)`,
          gridTemplateRows: "1fr 1fr",
        }}
      >
        {images.map(renderImage)}
      </div>
    </InfiniteScroll>
  );
}

export default HeroInfiniteSlider;