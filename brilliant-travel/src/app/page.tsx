import Benefits from "@/components/home/benefits";
import Hero from "@/components/home/hero";
import Tours from "@/components/home/tours";
import WhoWeAre from "@/components/home/who-we-are";

export default function Home() {
  return (
    <main className="flex flex-col gap-[4.5rem] w-full">
      <section className="w-full">
        <Hero />
      </section>

      <section className="px-24 w-full flex flex-col gap-7 mb-16">
        <Benefits />
      </section>

      <section className="px-24 w-full flex flex-col gap-7">
        <WhoWeAre />
      </section>

      <section className="w-full flex flex-col gap-7">
        <Tours />
      </section>
    </main>
  );
}
