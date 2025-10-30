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
import StarIcon from "@/assets/icons/star.svg";

export default function Reviews() {
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
          <h2 className="font-semibold text-2xl sm:text-3xl lg:text-[2.625rem]">Clients' opinions</h2>

          <div className="flex flex-row gap-3 sm:gap-5">
            <CarouselPrevious />

            <CarouselNext />
          </div>
        </div>

        <div className="pl-2 sm:pl-4 md:pl-8 lg:pl-[5.875rem]">
          <CarouselContent className="py-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <Card className="w-full">
                    <CardContent className="flex flex-col items-center justify-center p-0 w-full justify-between">
                      <div className="p-4 sm:p-6 lg:p-8 w-full flex flex-col justify-between gap-4 sm:gap-6">
                        <div className="flex flex-row items-center gap-3 sm:gap-4">
                          <Image
                            src="https://res.cloudinary.com/dzw2udcre/image/upload/v1739874002/brilliant%20travel/xo5bjsvv5ew6k1ts6wyc.png"
                            width={56}
                            height={56}
                            className="rounded-full w-12 h-12 sm:w-14 sm:h-14"
                            alt="profile photo"
                          />

                          <div className="flex flex-col h-[3rem] sm:h-[3.5rem] justify-between">
                            <div className="text-lg sm:text-xl lg:text-2xl font-semibold">
                              Stephanie Nicol
                            </div>

                            <div className="text-sm sm:text-base">Vilnius, Lithuania </div>
                          </div>
                        </div>

                        <div className="w-full flex flex-col gap-2">
                          <div className="flex flex-row items-center gap-1 sm:gap-2">
                            <StarIcon color="#F4B920" width={16} height={16} className="sm:w-5 sm:h-5" />
                            
                            <StarIcon color="#F4B920" width={16} height={16} className="sm:w-5 sm:h-5" />
                            
                            <StarIcon color="#F4B920" width={16} height={16} className="sm:w-5 sm:h-5" />
                            
                            <StarIcon color="#F4B920" width={16} height={16} className="sm:w-5 sm:h-5" />
                            
                            <StarIcon color="#F4B920" width={16} height={16} className="sm:w-5 sm:h-5" />
                          </div>

                          <div className="w-full">
                            <p className="text-justify w-full text-base sm:text-lg lg:text-xl">
                              The team was super helpful in planning my
                              honeymoon. They customized the package exactly how
                              we wanted and ensured everything went smoothly.
                              Will definitely book again!
                            </p>
                          </div>
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
