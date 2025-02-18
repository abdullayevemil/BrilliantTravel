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
        <div className="w-full flex flex-row justify-between items-center px-24">
          <h2 className="font-semibold text-[2.625rem]">Clients’ opinions</h2>

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
                  <Card className="w-full">
                    <CardContent className="flex flex-col items-center justify-center p-0 w-full justify-between">
                      <div className="p-8 w-full flex flex-col justify-between gap-6">
                        <div className="flex flex-row items-center gap-4">
                          <Image
                            src="https://res.cloudinary.com/dzw2udcre/image/upload/v1739874002/brilliant%20travel/xo5bjsvv5ew6k1ts6wyc.png"
                            width={56}
                            height={56}
                            className="rounded-full"
                            alt="profile photo"
                          />

                          <div className="flex flex-col h-[3.5rem] justify-between">
                            <div className="text-2xl font-semibold">
                              Stephanie Nicol
                            </div>

                            <div>Vilnius, Lithuania </div>
                          </div>
                        </div>

                        <div className="w-full flex flex-col gap-2">
                          <div className="flex flex-row items-center gap-2">
                            <StarIcon color="#F4B920" width={20} height={20} />
                            
                            <StarIcon color="#F4B920" width={20} height={20} />
                            
                            <StarIcon color="#F4B920" width={20} height={20} />
                            
                            <StarIcon color="#F4B920" width={20} height={20} />
                            
                            <StarIcon color="#F4B920" width={20} height={20} />
                          </div>

                          <div className="w-full">
                            <p className="text-justify w-full text-xl">
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
