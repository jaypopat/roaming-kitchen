"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

interface CarouselImage {
  src: string;
  text?: string;
}

interface ChefCarouselProps {
  images: CarouselImage[];
  dir: string;
  w: number;
  h: number;
}

const TextOverlay = ({ text }: { text: string }) => {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (textRef.current) {
      const element = textRef.current;
      setIsOverflowing(element.scrollWidth > element.clientWidth);
    }
  }, [text]);

  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-md max-w-[80%] overflow-hidden">
      <div
        ref={textRef}
        className={`text-center ${isOverflowing ? "animate-slide" : ""}`}
        style={{
          whiteSpace: isOverflowing ? "nowrap" : "normal",
          display: "inline-block",
          paddingLeft: isOverflowing ? "100%" : "0",
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default function ChefCarousel({ images, dir, w, h }: ChefCarouselProps) {
  return (
    <Carousel
      className="w-full max-w-[90vw] md:max-w-[1100px] mx-auto"
      plugins={[
        Autoplay({
          delay: 6000,
        }),
      ]}
    >
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.src}>
            <div className="relative flex justify-center items-center">
              <Image
                src={`${dir}/${image.src}`}
                width={w}
                height={h}
                alt={image.src}
                className="aspect-video object-cover rounded-md"
              />
              {image.text && <TextOverlay text={image.text} />}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10" />
      <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10" />
    </Carousel>
  );
}
