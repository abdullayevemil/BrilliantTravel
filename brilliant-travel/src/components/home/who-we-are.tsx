import Image from "next/image";
import QizQalasi from "@/assets/images/qiz-qalasi copy.png";
import Link from "next/link";

export default function WhoWeAre() {
  return (
    <div className="w-full bg-primaryBg rounded-2xl w-full p-4 sm:p-6 lg:p-[2.5rem] flex flex-col lg:flex-row justify-between relative min-h-[20rem] sm:min-h-[22.5rem] lg:h-[22.5rem]">
      <div className="flex flex-col gap-4 sm:gap-7 lg:w-1/2">
        <div className="flex flex-col h-full justify-between gap-4 sm:gap-6">
          <h2 className="font-semibold text-2xl sm:text-3xl lg:text-[2.625rem]">Who we are?</h2>

          <p className="w-full lg:w-1/2 text-sm sm:text-base lg:text-lg">
            <span className="font-bold">Brilliant Travel -</span> With our
            expertly crafted travel packages, personalized itineraries, and
            seamless booking experience, we make exploring the world effortless.
            Our dedicated team ensures every journey is unforgettable. Let's
            make your next trip brilliant!
          </p>

          <Link href="/about" className="w-fit px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-border text-sm sm:text-base">
            Learn more
          </Link>
        </div>
      </div>

      <Image
        className="absolute bottom-0 right-0 h-[16rem] sm:h-[20rem] lg:h-[26.5rem] object-cover w-auto max-w-[50%] lg:max-w-none"
        src={QizQalasi}
        alt="qiz qalasi"
      />
    </div>
  );
}
