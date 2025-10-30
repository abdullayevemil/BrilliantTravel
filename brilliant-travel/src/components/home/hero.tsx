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
    // ✅ Added min-h-screen + relative to contain everything
    <div className="relative w-full min-h-screen">
      {/* ✅ Background image fills hero */}
      <Image
        src={HeroImage}
        alt="Hero image"
        className="absolute inset-0 w-full h-full object-cover"
        priority
      />

      {/* ✅ Full-image gradient overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient z-0" />

      {/* ✅ Bottom scroll indicator stays the same */}
      <div className="absolute left-0 bottom-0 w-full h-[6rem] sm:h-[8.3125rem] bg-gradient z-50 flex justify-center items-center">
        <div className="py-2 px-3 rounded-full flex flex-row gap-2 border border-border">
          <AnimationLottie />
          <span className="text-navigation text-sm sm:text-base">Scroll down</span>
        </div>
      </div>

      {/* ✅ Top content: Header + hero text/buttons */}
      <div className="absolute left-0 top-0 w-full flex flex-col gap-2 z-50">
        <Header />

        <div className="w-full sm:w-4/5 lg:w-3/5 pt-16 sm:pt-20 lg:pt-28 px-4 sm:px-8 md:px-12 lg:px-16 xl:pl-24 flex flex-col gap-4 sm:gap-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold">
            Discover Azerbaijan, Unforgettable Journey!
          </h1>

          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="text-hero text-base sm:text-lg">
              <div>
                Explore Azerbaijan history, stunning landscapes, and vibrant
                culture. From Baku's
              </div>

              <div>
                charm to the Caucasus Mountains, we ensure a seamless and
                unforgettable journey!
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/destinations"
                className="text-white bg-black px-4 sm:px-6 py-2 rounded-full text-lg sm:text-xl text-center"
              >
                Book a trip
              </Link>

              <Link
                href="/about"
                className="bg-white/[0.3] px-4 sm:px-6 py-2 rounded-full text-lg sm:text-xl border border-border text-center"
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
