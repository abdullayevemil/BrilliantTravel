"use client";

import Image from "next/image";
import HeroImage from "@/assets/images/hero_background.png";
import animationData from "@/assets/icons/mouse.json";
import Link from "next/link";
import Header from "../layout/header";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <Lottie
      className="flex justify-center items-center w-6 h-6 text-navigation"
      {...defaultOptions}
    />
  );
};

export default function Hero() {
  return (
    <div className="relative w-full">
      <Image src={HeroImage} alt="Hero image" className="w-full" />

      <div className="absolute left-0 bottom-0 w-full h-[8.3125rem] bg-gradient z-50 flex justify-center items-center">
        <div className="py-2 px-3 rounded-full flex flex-row gap-2 border border-border">
          <AnimationLottie />

          <span className="text-navigation">Scroll down</span>
        </div>
      </div>

      <div className="absolute left-0 top-0 w-full flex flex-col gap-2">
        <Header />

        <div className="w-3/5 pt-28 pl-24 flex flex-col gap-6">
          <h1 className="text-7xl font-semibold">
            Discover Azerbaijan, Unforgettable Journey!
          </h1>

          <div className="flex flex-col gap-6">
            <div className="text-hero text-lg">
              <div>
                Explore Azerbaijan history, stunning landscapes, and vibrant
                culture. From Baku’s
              </div>

              <div>
                charm to the Caucasus Mountains, we ensure a seamless and
                unforgettable journey!
              </div>
            </div>

            <div className="flex flex-row gap-4">
              <Link
                href="/destination"
                className="text-white bg-black px-6 py-2 rounded-full text-xl"
              >
                Book a trip
              </Link>

              <Link
                href="/destination"
                className="bg-white/[0.3] px-6 py-2 rounded-full text-xl border border-border"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
