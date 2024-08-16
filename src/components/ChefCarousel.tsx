"use client";
import React from "react";
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

export default function ChefCarousel({ images, dir, w, h }: ChefCarouselProps) {
  return (
    <div className="relative">
      <Carousel
        className="w-full max-w-[90vw] md:max-w-[1100px] mx-auto rounded-lg overflow-hidden shadow-lg"
        plugins={[
          Autoplay({
            delay: 6000,
          }),
        ]}
      >
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image.src}>
              <div className="flex flex-col items-center bg-gradient-to-b from-transparent to-white p-4">
                <Image
                  src={`${dir}/${image.src}`}
                  width={w}
                  height={h}
                  alt={image.src}
                  className="aspect-video object-cover rounded-md transition-transform duration-300 transform hover:scale-105"
                />
                {image.text && (
                  <div className="mt-4 text-center">
                    <p className="text-muted-foreground font-semibold text-lg">
                      {image.text}
                    </p>
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition-colors duration-300">
          <svg
            className="w-8 h-8 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition-colors duration-300">
          <svg
            className="w-8 h-8 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </CarouselNext>
      </Carousel>
    </div>
  );
}
