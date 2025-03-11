"use client";

import Header from "@/components/layout/header";
import { DatePicker } from "@/components/tours/date-picker";
import {
  Calendar,
  ForkKnifeCrossed,
  MapPin,
  MinusCircle,
  PlusCircle,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import TourGuide from "@/assets/icons/tour-guide.gif";
import Wallet from "@/assets/icons/wallet.gif";
import Water from "@/assets/icons/mineral-water.gif";
import Bus from "@/assets/icons/bus-journey.gif";
import BibiEybat from "@/assets/images/bibi-eybat.png";
import Link from "next/link";
import Assistance from "@/components/home/assistance";
import OtherTours from "@/components/tours/other-tours";

const headerImages = [
  {
    link: "https://res.cloudinary.com/dzw2udcre/image/upload/v1741621858/brilliant%20travel/destinations/gobustan%20absheron/k8a9et0xwmr85kaxkqxt.png",
  },
  {
    link: "https://res.cloudinary.com/dzw2udcre/image/upload/v1741621444/brilliant%20travel/destinations/gobustan%20absheron/gclunk6p4iccx2kunnvy.png",
  },
  {
    link: "https://res.cloudinary.com/dzw2udcre/image/upload/v1741621444/brilliant%20travel/destinations/gobustan%20absheron/s3bknpz2rcz4l8fg5snh.png",
  },
  {
    link: "https://res.cloudinary.com/dzw2udcre/image/upload/v1741621444/brilliant%20travel/destinations/gobustan%20absheron/s3bknpz2rcz4l8fg5snh.png",
  },
];

const stops = [
  {
    name: "Pickup from hotel",
    time: "at 10:00",
    number: 0,
  },
  {
    name: "Mosque Bibi-Heybat",
    time: "25 minutes",
    number: 1,
  },
  {
    name: "Gobustan",
    time: "40 minutes",
    number: 2,
  },
  {
    name: "Mud Volcanoes",
    time: "30 minutes",
    number: 3,
  },
  {
    name: "First Oil Well",
    time: "30 minutes",
    number: 4,
  },
  {
    name: "Lunch at a local restaurant",
    time: "1 hour",
    number: 4,
  },
  {
    name: "Fire Temple",
    time: "50 minutes",
    number: 5,
  },
  {
    name: "Fire Mountain",
    time: "30 minutes",
    number: 6,
  },
  {
    name: "Drop off to hotel",
    time: "at 17:00",
    number: 6,
  },
];

export default function Destinations() {
  const [count, setCount] = useState(1);

  return (
    <div>
      <Header />

      <main className="px-[6rem] pt-[4.5rem] w-full flex flex-col gap-[4.5rem]">
        <section className="flex flex-col gap-12 w-full">
          <h1 className="font-bold text-7xl max-w-[44rem]">
            Gobustan & Absheron tour
          </h1>

          <div className="flex flex-row gap-6 w-full h-[28.75rem]">
            <Image
              key={0}
              src={headerImages[0].link}
              alt="tour introductory image"
              width={718}
              height={460}
              className="h-full w-[60%] object-cover rounded-2xl"
            />

            <div className="grid grid-rows-2 grid-cols-2 gap-6 h-full w-[40%]">
              <Image
                key={1}
                src={headerImages[1].link}
                alt="tour introductory image"
                width={506}
                height={218}
                className="col-span-2 h-full w-full rounded-2xl object-cover"
              />

              <Image
                key={2}
                src={headerImages[2].link}
                alt="tour introductory image"
                width={241}
                height={218}
                className="h-full w-full rounded-2xl object-cover"
              />

              <div className="relative">
                <Image
                  key={3}
                  src={headerImages[3].link}
                  alt="tour introductory image"
                  width={241}
                  height={218}
                  className="h-full w-full object-cover rounded-2xl"
                />

                <div className="absolute left-0 top-0 w-full h-full bg-footer rounded-2xl flex items-center justify-center">
                  <button className="bg-button px-4 py-2 rounded-full">
                    Show all
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full flex flex-row justify-between gap-[4.5rem]">
          <div className="w-3/5 flex flex-col gap-12">
            <div className="w-full flex flex-col gap-4">
              <h2 className="font-bold text-4xl">Tour overview</h2>

              <p className="text-xl">
                The best-seller tour allows you to discover Azerbaijan&apos;s
                globally unique nature, one of the world&apos;s earliest human
                settlements, and the rich cultural and historical heritage of
                Azerbaijan. Whether you are a history enthusiast, a nature
                lover, or an adventure seeker, this tour promises an enriching
                and memorable experience.
              </p>
            </div>

            <div className="flex flex-col gap-7">
              <h3 className="font-semibold text-4xl">Included</h3>

              <div className="grid grid-rows-2 grid-cols-2 gap-6">
                <div className="border border-order rounded-2xl w-full p-6 flex flex-col gap-3">
                  <Image
                    src={TourGuide}
                    alt="Tour guide icon"
                    width={72}
                    height={72}
                  />

                  <div className="flex flex-col gap-2">
                    <h4 className="text-[2rem] font-semibold">Tour Guide</h4>

                    <h5 className="text-footer">
                      Professional guidance in English, Russian
                    </h5>
                  </div>
                </div>

                <div className="border border-order rounded-2xl w-full p-6 flex flex-col gap-3">
                  <Image src={Bus} alt="bus icon" width={72} height={72} />

                  <div className="flex flex-col gap-2">
                    <h4 className="text-[2rem] font-semibold">
                      Transportation
                    </h4>

                    <h5 className="text-footer">
                      Pickup from hotel & Drop-off to hotel
                    </h5>
                  </div>
                </div>

                <div className="border border-order rounded-2xl w-full p-6 flex flex-col gap-3">
                  <Image
                    src={Wallet}
                    alt="Wallet icon"
                    width={72}
                    height={72}
                  />

                  <div className="flex flex-col gap-2">
                    <h4 className="text-[2rem] font-semibold">Entrance fees</h4>

                    <h5 className="text-footer">
                      Ensuring a hassle-free experience
                    </h5>
                  </div>
                </div>

                <div className="border border-order rounded-2xl w-full p-6 flex flex-col gap-3">
                  <Image
                    src={Water}
                    alt="water bottle icon"
                    width={72}
                    height={72}
                  />

                  <div className="flex flex-col gap-2">
                    <h4 className="text-[2rem] font-semibold">
                      Drinking water
                    </h4>

                    <h5 className="text-footer">
                      Complimentary refreshing water
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-2/5">
            <div className="w-full bg-primaryBg rounded-2xl p-8 flex flex-col gap-6">
              <h2 className="font-bold text-[2.625rem]">Book now</h2>

              <div className="w-full flex flex-row justify-between items-center gap-4">
                <div className="w-1/2 flex flex-col gap-2">
                  <div className="flex flex-row gap-2 items-center font-semibold text-2xl">
                    <Calendar />

                    <span>Select date</span>
                  </div>

                  <DatePicker />
                </div>

                <div className="w-1/2 flex flex-col gap-2">
                  <div className="flex flex-row gap-2 font-semibold text-2xl">
                    <Users />

                    <span>Travelers count</span>
                  </div>

                  <div className="rounded-lg border border-order flex flex-row justify-between p-4 font-semibold text-xl">
                    <button
                      onClick={() => setCount((a) => (a > 1 ? a - 1 : a))}
                      className="hover:cursor-pointer"
                    >
                      <MinusCircle width={24} height={24} />
                    </button>

                    <span>{count}</span>
                    <button
                      onClick={() => setCount((a) => a + 1)}
                      className="hover:cursor-pointer"
                    >
                      <PlusCircle width={24} height={24} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full border-t border-dashed border-order"></div>

              <div className="w-full flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2 py-2 h-full items-center">
                  <div className="font-bold text-2xl flex items-center">
                    <div>60 AZN</div>
                  </div>

                  <div className="h-6 flex items-center">
                    <div className="border-l-[1px] border-secondaryFg h-full"></div>
                  </div>

                  <div className="text-secondaryFg font-medium text-base flex items-center">
                    <div>per person</div>
                  </div>
                </div>

                <button className="flex flex-row py-3 px-6 rounded-full bg-black text-white items-center gap-1">
                  <span>Continue</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-7 mb-16">
          <h3 className="font-semibold text-4xl">Tour program</h3>

          <div className="flex flex-row justify-between items-end">
            <div className="flex flex-col gap-5 relative">
              <div className="flex flex-row items-center gap-3">
                <div className="border rounded-full p-[0.625rem] w-12 h-12 flex items-center justify-center bg-white">
                  <MapPin />
                </div>

                <div className="absolute left-6 top-0 w-[2px] -z-10 h-full border border-dashed"></div>
                
                <div className="flex flex-row gap-2 py-2 h-full items-center">
                  <div className="font-bold text-2xl flex items-center">
                    <div>{stops[0].name}</div>
                  </div>

                  <div className="h-6 flex items-center">
                    <div className="border-l-[1px] border-secondaryFg h-full"></div>
                  </div>

                  <div className="text-secondaryFg font-medium text-base flex items-center">
                    <div>{stops[0].time}</div>
                  </div>
                </div>
              </div>

              {stops.slice(1, stops.length - 1).map((stop, index) =>
                stop.name.toLocaleLowerCase().includes("lunch") ? (
                  <div key={index} className="flex flex-row items-center gap-3">
                    <div className="border rounded-full p-[0.625rem] bg-white">
                      <ForkKnifeCrossed />
                    </div>

                    <div className="flex flex-row gap-2 py-2 h-full items-center">
                      <div className="font-bold text-2xl flex items-center">
                        <div>{stop.name}</div>
                      </div>

                      <div className="h-6 flex items-center">
                        <div className="border-l-[1px] border-secondaryFg h-full"></div>
                      </div>

                      <div className="text-secondaryFg font-medium text-base flex items-center">
                        <div>{stop.time}</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div key={index} className="flex flex-row items-center gap-3">
                    <div className="border rounded-full p-[0.625rem] bg-black text-white font-semibold w-12 h-12 flex items-center justify-center">
                      {stop.number}
                    </div>

                    <div className="flex flex-row gap-2 py-2 h-full items-center">
                      <div className="font-bold text-2xl flex items-center">
                        <div>{stop.name}</div>
                      </div>

                      <div className="h-6 flex items-center">
                        <div className="border-l-[1px] border-secondaryFg h-full"></div>
                      </div>

                      <div className="text-secondaryFg font-medium text-base flex items-center">
                        <div>{stop.time}</div>
                      </div>
                    </div>
                  </div>
                )
              )}

              <div className="flex flex-row items-center gap-3">
                <div className="border rounded-full p-[0.625rem] w-12 h-12 flex items-center justify-center  bg-white">
                  <MapPin />
                </div>

                <div className="flex flex-row gap-2 py-2 h-full items-center">
                  <div className="font-bold text-2xl flex items-center">
                    <div>{stops[stops.length - 1].name}</div>
                  </div>

                  <div className="h-6 flex items-center">
                    <div className="border-l-[1px] border-secondaryFg h-full"></div>
                  </div>

                  <div className="text-secondaryFg font-medium text-base flex items-center">
                    <div>{stops[stops.length - 1].time}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-2/5">
              <Image
                src={BibiEybat}
                alt="mosque image"
                width={900}
                height={900}
                className="w-full object-cover rounded-2xl"
              />

              <div className="gap-[0.625rem] p-8 w-full h-2/5 absolute bottom-0 left-0 bg-tourGradient rounded-2xl text-white flex flex-col justify-end">
                <div className="font-semibold text-2xl">
                  Mosqoue Bibi-Heybat
                </div>

                <Link href="/" className="underline font-normal">
                  Show on the map
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full">
          <Assistance />
        </section>

        <section className="w-full">
          <OtherTours />
        </section>
      </main>
    </div>
  );
}
