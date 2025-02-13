import Benefits from "@/components/home/benefits";
import Hero from "@/components/home/hero";
import Image from "next/image";
import QizQalasi from '@/assets/images/qiz-qalasi copy.png';

export default function Home() {
  return (
    <main className="flex flex-col gap-[4.5rem] w-full">
      <section className="w-full">
        <Hero />
      </section>

      <section className="px-24 w-full flex flex-col gap-7">
        <Benefits />
      </section>

      <section className="px-24 w-full flex flex-col gap-7">
        <div className="w-full bg-primary rounded-2xl w-full p-[2.5rem] flex flex-row justify-between relative">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold text-[2.625rem]">Who we are?</h2>

              <p className="w-1/2">
                <span className="font-bold">Brilliant Travel -</span> With our
                expertly crafted travel packages, personalized itineraries, and
                seamless booking experience, we make exploring the world
                effortless. Our dedicated team ensures every journey is
                unforgettable. Let’s make your next trip brilliant!
              </p>
            </div>

            <button className="w-fit px-6 py-3 rounded-full border border-border">Learn more</button>
          </div>

          <Image className="absolute bottom-0 right-0" src={QizQalasi} alt="qiz qalasi" />
        </div>
      </section>
    </main>
  );
}
