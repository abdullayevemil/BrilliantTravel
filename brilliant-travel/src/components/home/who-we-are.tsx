import Image from "next/image";
import QizQalasi from "@/assets/images/qiz-qalasi copy.png";
import Link from "next/link";

export default function WhoWeAre() {
  return (
    <div className="w-full bg-primaryBg rounded-2xl w-full p-[2.5rem] flex flex-row justify-between relative h-[22.5rem]">
      <div className="flex flex-col gap-7">
        <div className="flex flex-col h-full justify-between">
          <h2 className="font-semibold text-[2.625rem]">Who we are?</h2>

          <p className="w-1/2">
            <span className="font-bold">Brilliant Travel -</span> With our
            expertly crafted travel packages, personalized itineraries, and
            seamless booking experience, we make exploring the world effortless.
            Our dedicated team ensures every journey is unforgettable. Let’s
            make your next trip brilliant!
          </p>

          <Link href="/about" className="w-fit px-6 py-3 rounded-full border border-border">
            Learn more
          </Link>
        </div>
      </div>

      <Image
        className="absolute bottom-0 right-0 h-[26.5rem] object-cover"
        src={QizQalasi}
        alt="qiz qalasi"
      />
    </div>
  );
}
