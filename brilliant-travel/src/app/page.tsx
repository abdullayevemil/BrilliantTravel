import Benefits from "@/components/home/benefits";
import Hero from "@/components/home/hero";

export default function Home() {
  return (
    <main className="flex flex-col gap-[4.5rem] w-full">
      <section className="w-full">
        <Hero />
      </section>

      <section className="px-24 w-full flex flex-col gap-7">
        <Benefits />
      </section>
    </main>
  );
}
