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
import Image from "next/image";
import MapPinIcon from "@/assets/icons/map-pin.svg";
import ClockIcon from "@/assets/icons/clock.svg";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { tours } from "@/db/tours";

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
        <div className="w-full flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 gap-4 sm:gap-0">
          <h2 className="font-semibold text-2xl sm:text-3xl lg:text-[2.625rem]">Tours we offer</h2>

          <div className="flex flex-row gap-3 sm:gap-5">
            <CarouselPrevious />

            <CarouselNext />
          </div>
        </div>

        <div className="pl-2 sm:pl-4 md:pl-8 lg:pl-[5.875rem]">
          <CarouselContent className="py-2">
            {tours.map((tour, index) => (
              <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <Card className="w-full">
                    <CardContent className="flex flex-col aspect-square items-center justify-center p-0 w-full justify-between">
                      <div className="p-2 w-full">
                        <Image
                          src={tour.cover_image}
                          alt="tour image"
                          width={900}
                          height={700}
                          className="w-full object-cover rounded-lg"
                        />
                      </div>

                      <div className="p-3 sm:p-4 pt-2 flex flex-col justify-between w-full gap-4 sm:gap-[3rem]">
                        <div className="w-full flex flex-col gap-2 sm:gap-3">
                          <h3 className="font-bold text-lg sm:text-xl lg:text-[1.75rem]">
                            {tour.title}
                          </h3>

                          <div className="flex flex-row gap-2 sm:gap-3">
                            <div className="flex flex-row gap-0.5 h-full items-center py-0.5">
                              <ClockIcon
                                width={16}
                                height={16}
                                color="#8F8F8F"
                                className="sm:w-[18px] sm:h-[18px]"
                              />

                              <span className="text-secondaryFg font-medium text-sm sm:text-base">
                                {tour.time}
                              </span>
                            </div>

                            <div className="py-1">
                              <div className="h-full border-l-[1px] border-secondaryFg"></div>
                            </div>

                            <div className="flex flex-row gap-0.5 h-full items-center py-0.5">
                              <MapPinIcon
                                width={16}
                                height={16}
                                color="#8F8F8F"
                                className="sm:w-[18px] sm:h-[18px]"
                              />

                              <span className="text-secondaryFg font-medium text-sm sm:text-base">
                                {tour.stops} stops
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
                          <div className="flex flex-row gap-2 py-2 h-full">
                            <div className="font-bold text-xl sm:text-2xl flex items-center">
                              <div>{tour.price} $</div>
                            </div>

                            <div className="py-1">
                              <div className="h-full border-l-[1px] border-secondaryFg"></div>
                            </div>

                            <div className="flex flex-row text-secondaryFg font-medium text-sm sm:text-base h-full items-center align-center text-center">
                              <div>per person</div>
                            </div>
                          </div>

                          <Link
                            href={`/destinations/${tour.id}`}
                            className="flex flex-row py-2 sm:py-3 px-4 sm:px-6 rounded-full bg-black text-white items-center gap-1 text-sm sm:text-base"
                          >
                            <span>Details</span>

                            <ArrowRight width={16} height={16} className="sm:w-[18px] sm:h-[18px]" />
                          </Link>
                        </div>
                      </div>
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
