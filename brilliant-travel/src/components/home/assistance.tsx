import Image from "next/image";
import DirectionSign from "@/assets/images/direction_sign.png";
import Link from "next/link";

export default function Assistance() {
  return (
    <div className="w-full bg-primaryBg rounded-2xl w-full p-4 sm:p-6 lg:p-[2.5rem] flex flex-col lg:flex-row justify-between relative min-h-[20rem] sm:min-h-[22.5rem] lg:h-[22.5rem]">
      <div className="flex flex-col gap-4 sm:gap-7 lg:w-1/2">
        <div className="flex flex-col h-full justify-between gap-4 sm:gap-6">
          <h2 className="font-semibold text-2xl sm:text-3xl lg:text-[2.625rem]">
            Do you need assistance?
          </h2>

          <p className="w-full lg:w-1/2 text-sm sm:text-base lg:text-lg">
            Not sure which destination suits you best? Let our travel experts
            guide you! Whether you&apos;re looking for an adventurous getaway or a
            cultural exploration, we&apos;ll help you find the perfect experience.
          </p>

          <Link href="/contact" className="w-fit px-4 sm:px-6 py-2 sm:py-3 bg-black text-white rounded-full border border-border text-sm sm:text-base">
            Contact us
          </Link>
        </div>
      </div>

      <Image
        className="absolute bottom-0 right-2 sm:right-4 lg:right-10 h-[16rem] sm:h-[20rem] lg:h-[26.5rem] w-auto max-w-[50%] lg:max-w-none lg:w-[374px]"
        src={DirectionSign}
        alt="DirectionSign"
      />
    </div>
  );
}
