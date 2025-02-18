"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Tours() {
  return (
    <div className="flex flex-col gap-7">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="w-full flex flex-col gap-7"
      >
        <div className="w-full flex flex-row justify-between items-center px-24">
          <h2 className="font-semibold text-[2.625rem]">Tours we offer</h2>

          <div className="flex flex-row gap-5">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>

        <div className="pl-[5.875rem]">
          <CarouselContent className="py-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="lg:basis-1/3">
                <div className="p-2">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
    </div>
  );
}
