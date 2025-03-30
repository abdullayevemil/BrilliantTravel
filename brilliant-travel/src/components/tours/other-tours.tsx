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

interface Props {
  id: string;
}

export default function OtherTours({ id }: Props) {
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
        <div className="w-full flex flex-row justify-between items-center">
          <h2 className="font-semibold text-[2.625rem]">Our other tours</h2>

          <div className="flex flex-row gap-5">
            <CarouselPrevious />

            <CarouselNext />
          </div>
        </div>

        <div>
          <CarouselContent className="py-2">
            {tours
              .filter((tour) => tour.id != id)
              .map((tour, index) => (
                <CarouselItem key={index} className="lg:basis-1/3">
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

                        <div className="p-4 pt-2 flex flex-col justify-between w-full gap-[3rem]">
                          <div className="w-full flex flex-col gap-3">
                            <h3 className="font-bold text-[1.75rem]">
                              {tour.title}
                            </h3>

                            <div className="flex flex-row gap-3">
                              <div className="flex flex-row gap-0.5 h-full items-center py-0.5">
                                <ClockIcon
                                  width={18}
                                  height={18}
                                  color="#8F8F8F"
                                />

                                <span className="text-secondaryFg font-medium text-base">
                                  {tour.time}
                                </span>
                              </div>

                              <div className="py-1">
                                <div className="h-full border-l-[1px] border-secondaryFg"></div>
                              </div>

                              <div className="flex flex-row gap-0.5 h-full items-center py-0.5">
                                <MapPinIcon
                                  width={18}
                                  height={18}
                                  color="#8F8F8F"
                                />

                                <span className="text-secondaryFg font-medium text-base">
                                  {tour.stops} stops
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="w-full flex flex-row justify-between items-center">
                            <div className="flex flex-row gap-2 py-2 h-full">
                              <div className="font-bold text-2xl flex items-center">
                                <div>{tour.price} $</div>
                              </div>

                              <div className="py-1">
                                <div className="h-full border-l-[1px] border-secondaryFg"></div>
                              </div>

                              <div className="flex flex-row text-secondaryFg font-medium text-base h-full items-center align-center text-center">
                                <div>per person</div>
                              </div>
                            </div>

                            <Link
                              href={`/destinations/${tour.id}`}
                              className="flex flex-row py-3 px-6 rounded-full bg-black text-white items-center gap-1"
                            >
                              <span>Details</span>

                              <ArrowRight width={18} height={18} />
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
