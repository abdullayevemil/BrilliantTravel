"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface GalleryProps {
  links: string[];
}

export default function Gallery({ links }: GalleryProps) {
  const [selected, setSelected] = useState(0);

  return ( 
    <div className="w-full flex flex-col items-center gap-3 sm:gap-4 py-4 w-full">
      <div className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden border border-gray-600 bg-black">
        <Image
          src={links[selected]}
          alt={`Main image ${selected + 1}`}
          width={1280}
          height={720}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      <Carousel className="w-full max-w-5xl">
        <CarouselContent className="w-full">
          {links.map((link, index) => (
            <CarouselItem key={index} className="basis-1/6 sm:basis-1/8 lg:basis-1/9">
              <button
                onClick={() => setSelected(index)}
                className={`relative flex-shrink-0 w-16 h-12 sm:w-20 sm:h-16 lg:w-24 lg:h-20 rounded-md overflow-hidden border-2 transition-all ${
                  selected === index
                    ? "border-white"
                    : "border-transparent hover:border-gray-400"
                }`}
              >
                <Image
                  src={link}
                  alt={`Thumbnail ${index + 1}`}
                  width={160}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="flex gap-2 overflow-x-auto w-full max-w-5xl justify-center"></div>
    </div>
  );
}
