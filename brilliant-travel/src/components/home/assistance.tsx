import Image from "next/image";
import DirectionSign from "@/assets/images/direction_sign.png";

export default function Assistance() {
  return (
    <div className="w-full bg-primaryBg rounded-2xl w-full p-[2.5rem] flex flex-row justify-between relative h-[22.5rem]">
      <div className="flex flex-col gap-7">
        <div className="flex flex-col h-full justify-between">
          <h2 className="font-semibold text-[2.625rem]">
            Do you need assistance?
          </h2>

          <p className="w-1/2">
            Not sure which destination suits you best? Let our travel experts
            guide you! Whether you're looking for an adventurous getaway or a
            cultural exploration, we’ll help you find the perfect experience.
          </p>

          <button className="w-fit px-6 py-3 bg-black text-white rounded-full border border-border">
            Contact us
          </button>
        </div>
      </div>

      <Image
        className="absolute bottom-0 right-10 h-[26.5rem] w-[374px]"
        src={DirectionSign}
        alt="DirectionSign"
      />
    </div>
  );
}
