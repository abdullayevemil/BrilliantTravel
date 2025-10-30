import SuitcaseIcon from "@/assets/icons/personalized-honeymoons.gif";
import Image from "next/image";
import TourGuide from "@/assets/icons/tour-guide.gif";
import Wallet from "@/assets/icons/wallet.gif";

export default function Benefits() {
  return (
    <div className="flex flex-col gap-7">
      <h2 className="font-semibold text-2xl sm:text-3xl lg:text-[2.625rem]">Our benefits</h2>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <div className="border border-border rounded-2xl w-full sm:w-1/3 p-4 sm:p-6 flex flex-col gap-3">
          <Image
            src={SuitcaseIcon}
            alt="Suitcase icon"
            width={72}
            height={72}
            className="w-12 h-12 sm:w-[72px] sm:h-[72px]"
          />

          <h3 className="text-xl sm:text-2xl lg:text-[2rem] font-semibold">
            Seamless Travel Experience
          </h3>
        </div>

        <div className="border border-border rounded-2xl w-full sm:w-1/3 p-4 sm:p-6 flex flex-col gap-3">
          <Image
            src={TourGuide}
            alt="Tour guide icon"
            width={72}
            height={72}
            className="w-12 h-12 sm:w-[72px] sm:h-[72px]"
          />

          <h3 className="text-xl sm:text-2xl lg:text-[2rem] font-semibold">
            Expert Local Guides
          </h3>
        </div>

        <div className="border border-border rounded-2xl w-full sm:w-1/3 p-4 sm:p-6 flex flex-col gap-3">
          <Image
            src={Wallet}
            alt="Wallet icon"
            width={72}
            height={72}
            className="w-12 h-12 sm:w-[72px] sm:h-[72px]"
          />

          <h3 className="text-xl sm:text-2xl lg:text-[2rem] font-semibold">
            Secure & Easy Payment
          </h3>
        </div>
      </div>
    </div>
  );
}
