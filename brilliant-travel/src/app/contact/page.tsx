import Header from "@/components/layout/header";
import TourGuide from "@/assets/icons/email.gif";
import Image from "next/image";
import SuitcaseIcon from "@/assets/icons/contact.gif";
import Wallet from "@/assets/icons/google-maps.gif";
import ContactForm from "@/components/contact/contact-form";
import Tour from "@/assets/images/tour.png";

export default function Contact() {
  return (
    <div>
      <Header />

      <main className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[6rem] pt-8 sm:pt-12 lg:pt-[4.5rem] w-full flex flex-col gap-8 sm:gap-12 lg:gap-[4.5rem]">
        <section className="flex flex-col gap-8 sm:gap-12">
          <div className="flex flex-col gap-4 sm:gap-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold w-full lg:w-1/2">Contact us</h1>

            <p className="text-base sm:text-lg lg:text-xl w-full lg:w-3/5">
              Have questions or need assistance planning your next trip? Our
              team at Brilliant Travel is here to help! Whether you&apos;re looking
              for customized travel packages, visa assistance, or simply travel
              advice, we&apos;re just a message away.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-7">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="border border-border rounded-2xl w-full sm:w-1/3 p-4 sm:p-6 flex flex-col gap-3">
              <Image
                src={SuitcaseIcon}
                alt="Suitcase icon"
                width={72}
                height={72}
                className="w-12 h-12 sm:w-[72px] sm:h-[72px]"
              />

              <h3 className="w-full sm:w-4/5 text-xl sm:text-2xl lg:text-[2rem] font-semibold">Call us</h3>

              <span className="text-lg sm:text-xl lg:text-2xl underline">+994 50 123 45 67</span>
            </div>

            <div className="border border-border rounded-2xl w-full sm:w-1/3 p-4 sm:p-6 flex flex-col gap-3">
              <Image
                src={TourGuide}
                alt="Tour guide icon"
                width={72}
                height={72}
                className="w-12 h-12 sm:w-[72px] sm:h-[72px]"
              />

              <h3 className="w-full sm:w-4/5 text-xl sm:text-2xl lg:text-[2rem] font-semibold">
                Write us email
              </h3>

              <span className="text-sm sm:text-base lg:text-lg xl:text-xl underline break-all">
                qurban.quliyev@brilliant-travel.com
              </span>
            </div>

            <div className="border border-border rounded-2xl w-full sm:w-1/3 p-4 sm:p-6 flex flex-col gap-3">
              <Image src={Wallet} alt="Wallet icon" width={72} height={72} className="w-12 h-12 sm:w-[72px] sm:h-[72px]" />

              <h3 className="w-full sm:w-4/5 text-xl sm:text-2xl lg:text-[2rem] font-semibold">
                Visit our office
              </h3>

              <span className="text-lg sm:text-xl lg:text-2xl underline">Tiblisi avenue, Baku</span>
            </div>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row w-full justify-between gap-8 lg:gap-0">
          <div className="flex flex-col gap-4 sm:gap-7 w-full lg:w-1/2">
            <h2 className="font-semibold text-2xl sm:text-3xl lg:text-[2.625rem]">Get in touch</h2>

            <div className="w-full lg:w-4/5">
              <ContactForm />
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative rounded-2xl">
            <Image
              className="w-full rounded-2xl"
              src={Tour}
              alt="image from tour"
            />

            <div className="gap-2 sm:gap-[0.625rem] p-4 sm:p-6 lg:p-8 w-full h-2/5 absolute bottom-0 left-0 bg-tourGradient rounded-2xl text-white flex flex-col justify-end">
              <div className="font-semibold text-lg sm:text-xl lg:text-2xl italic">
                People don&apos;t take trips, trips take people.
              </div>

              <span className="font-normal text-sm sm:text-base">by John Steinbeck</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
