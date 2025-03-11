import Header from "@/components/layout/header";
import SuitcaseIcon from "@/assets/icons/personalized-honeymoons.gif";
import Image from "next/image";
import TourGuide from "@/assets/icons/tour-guide.gif";
import Wallet from "@/assets/icons/wallet.gif";
import FAQ from "@/components/home/faq";

export default function About() {
  return (
    <div>
      <Header />

      <main className="px-[6rem] pt-[4.5rem] w-full flex flex-col gap-[4.5rem]">
        <section className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <h1 className="text-7xl font-semibold w-1/2">
              Every trip should be{" "}
              <span className="bg-transparent relative">
                <span className="bg-transparent italic">Brilliant!</span>

                <div className="absolute left-3 top-6 bg-primaryBg -z-10 w-full h-4/5"></div>
              </span>
            </h1>

            <p className="text-xl w-3/5">
              At Brilliant Travel, we believe that every journey should be an
              unforgettable experience. With years of expertise in the travel
              industry, we specialize in crafting personalized travel packages
              that suit every traveler’s needs. Our team is dedicated to
              providing seamless booking experiences, expert travel advice, and
              exceptional customer service. From flights and accommodations to
              guided tours and visa assistance, we take care of every detail so
              you can travel with confidence. Let Brilliant Travel turn your
              dream destinations into reality.
            </p>
          </div>

          <Image
            src="https://res.cloudinary.com/dzw2udcre/image/upload/v1741696925/brilliant%20travel/rxrnhgaxq5jdcpozbv5n.png"
            alt="tour image"
            width={1000}
            height={1000}
            className="w-full object-cover rounded-2xl"
          />
        </section>

        <section className="flex flex-col gap-7">
          <h2 className="font-semibold text-[2.625rem]">
            Why you should choose us?
          </h2>

          <div className="flex flex-row gap-6">
            <div className="rounded-2xl w-1/3 p-6 flex flex-col gap-3">
              <Image
                src={SuitcaseIcon}
                alt="Suitcase icon"
                width={72}
                height={72}
              />

              <h3 className="w-4/5 text-[2rem] font-semibold">
                Seamless Travel Experience
              </h3>

              <p className="text-lg text-hero">
                From airport transfers to guided tours, we handle all the
                details, so you can relax and enjoy Azerbaijan without any
                hassle.
              </p>
            </div>

            <div className="rounded-2xl w-1/3 p-6 flex flex-col gap-3">
              <Image
                src={TourGuide}
                alt="Tour guide icon"
                width={72}
                height={72}
              />

              <h3 className="w-4/5 text-[2rem] font-semibold">
                Expert Local Guides
              </h3>

              <p className="text-lg text-hero">
                Discover hidden gems and cultural treasures with knowledgeable
                guides who bring Azerbaijan’s history and traditions to life.
              </p>
            </div>

            <div className="rounded-2xl w-1/3 p-6 flex flex-col gap-3">
              <Image src={Wallet} alt="Wallet icon" width={72} height={72} />

              <h3 className="w-4/5 text-[2rem] font-semibold">
                Secure & Easy Payment
              </h3>

              <p className="text-lg text-hero">
                Book with confidence using our safe and hassle-free payment
                options, ensuring a smooth and secure transaction every time.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="w-full bg-primaryBg rounded-2xl p-[2.5rem] flex flex-row justify-between relative h-[22.5rem] overflow-hidden">
            <div className="flex flex-col gap-7 z-10">
              <div className="flex flex-col h-full justify-between">
                <h2 className="font-semibold text-[2.625rem]">
                  Our statistics
                </h2>

                <p className="w-1/2">
                  We take pride in delivering exceptional travel experiences.
                  success is reflected in the numbers, showcasing our commitment
                  to quality service, customer satisfaction, and unforgettable
                  journeys.
                </p>

                <div className="flex flex-row gap-12">
                  <div className="px-4 flex flex-col gap-2 border-l border-order">
                    <h3 className="text-[2.625rem]">+250</h3>

                    <span className="text-lg">Organized tours</span>
                  </div>

                  <div className="px-4 flex flex-col gap-2 border-l border-order">
                    <h3 className="text-[2.625rem]">+496</h3>

                    <span className="text-lg">Happy Travelers</span>
                  </div>

                  <div className="px-4 flex flex-col gap-2 border-l border-order">
                    <h3 className="text-[2.625rem]">+5</h3>

                    <span className="text-lg">Years experience </span>
                  </div>
                </div>
              </div>
            </div>

            <Image
              src="https://res.cloudinary.com/dzw2udcre/image/upload/v1741698588/brilliant%20travel/s57clac0vtx4tqdebjsu.png"
              alt="image of a photo camera"
              width={900}
              height={900}
              className="absolute bottom-0 right-0 h-full w-[38%] object-cover object-right rounded-r-2xl"
            />
          </div>
        </section>

        <section>
          <FAQ />
        </section>
      </main>
    </div>
  );
}
