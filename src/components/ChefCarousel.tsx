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
                <div className="relative w-full" style={{ height: `${h}px` }}>
                  <Image
                    src={`${dir}/${image.src}`}
                    layout="fill"
                    objectFit="contain"
                    alt={image.src}
                    className="transition-transform duration-300 transform hover:scale-105"
                  />
                </div>
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
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition-colors duration-300"></CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition-colors duration-300"></CarouselNext>
      </Carousel>
    </div>
  );
}
