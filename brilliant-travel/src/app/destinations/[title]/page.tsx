import { tours } from "@/db/tours";
import Header from "@/components/layout/header";
import { ForkKnifeCrossed, MapPin } from "lucide-react";
import Image from "next/image";
import TourGuide from "@/assets/icons/tour-guide.gif";
import Wallet from "@/assets/icons/wallet.gif";
import Water from "@/assets/icons/mineral-water.gif";
import Bus from "@/assets/icons/bus-journey.gif";
import Link from "next/link";
import Assistance from "@/components/home/assistance";
import OtherTours from "@/components/tours/other-tours";
import PaymentForm from "@/components/tours/payment";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Gallery from "@/components/tours/gallery";

const icons = [TourGuide, Bus, Wallet, Water];

export async function generateStaticParams() {
  return tours.map((tour) => ({
    title: tour.id.toString(),
  }));
}

export default async function TourPage({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const { title } = await params;

  const tour = tours.find((tour) => tour.id === title);

  if (tour) {
    return (
      <div>
        <Header />

        <main className="px-[6rem] pt-[4.5rem] w-full flex flex-col gap-[4.5rem]">
          <section className="flex flex-col gap-12 w-full">
            <h1 className="font-bold text-7xl max-w-[44rem]">{tour.title}</h1>

            <div className="flex flex-row gap-6 w-full h-[28.75rem]">
              <Image
                key={0}
                src={tour.header_images[0]}
                alt="tour introductory image"
                width={718}
                height={460}
                className="h-full w-[60%] object-cover rounded-2xl"
              />

              <div className="grid grid-rows-2 grid-cols-2 gap-6 h-full w-[40%]">
                <Image
                  key={1}
                  src={tour.header_images[1]}
                  alt="tour introductory image"
                  width={506}
                  height={218}
                  className="col-span-2 h-full w-full rounded-2xl object-cover"
                />

                <Image
                  key={2}
                  src={tour.header_images[2]}
                  alt="tour introductory image"
                  width={241}
                  height={218}
                  className="h-full w-full rounded-2xl object-cover"
                />

                <div className="relative">
                  <Image
                    key={3}
                    src={tour.header_images[3]}
                    alt="tour introductory image"
                    width={241}
                    height={218}
                    className="h-full w-full object-cover rounded-2xl"
                  />

                  <div className="absolute left-0 top-0 w-full h-full bg-footer rounded-2xl flex items-center justify-center">
                    <Dialog>
                      <DialogTrigger className="bg-button px-4 py-2 rounded-full">
                        Show all
                      </DialogTrigger>
                      <DialogContent className="w-4/5">
                        <DialogHeader>
                          <DialogTitle>Photo gallery</DialogTitle>

                          <Gallery links={tour.images} />
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full flex flex-row justify-between gap-[4.5rem]">
            <div className="w-3/5 flex flex-col gap-12">
              <div className="w-full flex flex-col gap-4">
                <h2 className="font-bold text-4xl">Tour overview</h2>

                <p className="text-xl">{tour.overview}</p>
              </div>

              <div className="flex flex-col gap-7">
                <h3 className="font-semibold text-4xl">Included</h3>

                <div className="grid grid-rows-2 grid-cols-2 gap-6">
                  {tour.included.map((feat, index) => (
                    <div
                      key={index}
                      className="border border-order rounded-2xl w-full p-6 flex flex-col gap-3"
                    >
                      <Image
                        src={icons[index]}
                        alt="Tour guide icon"
                        width={72}
                        height={72}
                      />

                      <div className="flex flex-col gap-2">
                        <h4 className="text-[2rem] font-semibold">
                          {feat.title}
                        </h4>

                        <h5 className="text-footer">{feat.description}</h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <PaymentForm tour={tour} />
          </section>

          <section className="flex flex-col gap-7 mb-16">
            <h3 className="font-semibold text-4xl">Tour program</h3>

            <div className="flex flex-row justify-between items-center gap-4">
              <div className="flex flex-col gap-5 relative">
                <div className="flex flex-row items-center gap-3">
                  <div className="border rounded-full p-[0.625rem] w-12 h-12 flex items-center justify-center bg-white">
                    <MapPin />
                  </div>

                  <div className="absolute left-6 top-0 w-[2px] -z-10 h-full border border-dashed"></div>

                  <div className="flex flex-row gap-2 py-2 h-full items-center">
                    <div className="font-bold text-2xl flex items-center">
                      <div>{tour.tour_program[0].name}</div>
                    </div>

                    <div className="h-6 flex items-center">
                      <div className="border-l-[1px] border-secondaryFg h-full"></div>
                    </div>

                    <div className="text-secondaryFg font-medium text-base flex items-center">
                      <div>{tour.tour_program[0].time}</div>
                    </div>
                  </div>
                </div>

                {tour.tour_program
                  .slice(1, tour.tour_program.length - 1)
                  .map((stop, index) =>
                    stop.name.toLocaleLowerCase().includes("lunch") ? (
                      <div
                        key={index}
                        className="flex flex-row items-center gap-3"
                      >
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
                      <div
                        key={index}
                        className="flex flex-row items-center gap-3"
                      >
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
                      <div>
                        {tour.tour_program[tour.tour_program.length - 1].name}
                      </div>
                    </div>

                    <div className="h-6 flex items-center">
                      <div className="border-l-[1px] border-secondaryFg h-full"></div>
                    </div>

                    <div className="text-secondaryFg font-medium text-base flex items-center">
                      <div>
                        {tour.tour_program[tour.tour_program.length - 1].time}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative w-2/5">
                <Image
                  src={tour.tour_program_photo}
                  alt="mosque image"
                  width={900}
                  height={900}
                  className="w-full h-[32.5rem] object-cover rounded-2xl"
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
            <OtherTours id={tour.id} />
          </section>
        </main>
      </div>
    );
  } else {
    return <div>Failed to load tour details</div>;
  }
}
