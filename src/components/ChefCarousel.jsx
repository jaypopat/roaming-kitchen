"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function ChefCarousel({ images, dir, w, h }) {
  return (
    <Carousel
      className="w-full max-w-[50vw]"
      plugins={[
        Autoplay({
          delay: 6000,
        }),
      ]}
    >
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image}>
            <div className="flex justify-center items-center">
              <Image
                src={`${dir}/${image}`}
                width={w}
                height={h}
                alt={image}
                className="aspect-video object-cover rounded-md"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0" />
      <CarouselNext />
    </Carousel>
  );
}
