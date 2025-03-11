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

      <main className="px-[6rem] pt-[4.5rem] w-full flex flex-col gap-[4.5rem]">
        <section className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <h1 className="text-7xl font-semibold w-1/2">Contact us</h1>

            <p className="text-xl w-3/5">
              Have questions or need assistance planning your next trip? Our
              team at Brilliant Travel is here to help! Whether you’re looking
              for customized travel packages, visa assistance, or simply travel
              advice, we’re just a message away.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-7">
          <div className="flex flex-row gap-6">
            <div className="border border-border rounded-2xl w-1/3 p-6 flex flex-col gap-3">
              <Image
                src={SuitcaseIcon}
                alt="Suitcase icon"
                width={72}
                height={72}
              />

              <h3 className="w-4/5 text-[2rem] font-semibold">Call us</h3>

              <span className="text-2xl underline">+994 50 123 45 67</span>
            </div>

            <div className="border border-border rounded-2xl w-1/3 p-6 flex flex-col gap-3">
              <Image
                src={TourGuide}
                alt="Tour guide icon"
                width={72}
                height={72}
              />

              <h3 className="w-4/5 text-[2rem] font-semibold">
                Write us email
              </h3>

              <span className="text-2xl underline">
                info@brilliant.travel.az
              </span>
            </div>

            <div className="border border-border rounded-2xl w-1/3 p-6 flex flex-col gap-3">
              <Image src={Wallet} alt="Wallet icon" width={72} height={72} />

              <h3 className="w-4/5 text-[2rem] font-semibold">
                Visit our office
              </h3>

              <span className="text-2xl underline">Tiblisi avenue, Baku</span>
            </div>
          </div>
        </section>

        <section className="flex flex-row w-full justify-between">
          <div className="flex flex-col gap-7 w-1/2">
            <h2 className="font-semibold text-[2.625rem]">Get in touch</h2>

            <div className="w-4/5">
              <ContactForm />
            </div>
          </div>

          <div className="w-1/2 relative rounded-2xl">
            <Image
              className="w-full rounded-2xl"
              src={Tour}
              alt="image from tour"
            />

            <div className="gap-[0.625rem] p-8 w-full h-2/5 absolute bottom-0 left-0 bg-tourGradient rounded-2xl text-white flex flex-col justify-end">
              <div className="font-semibold text-2xl italic">
                People don’t take trips, trips take people.
              </div>

              <span className="font-normal">by John Steinbeck</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
