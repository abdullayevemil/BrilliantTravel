import SuitcaseIcon from "@/assets/icons/personalized-honeymoons.gif";
import Image from "next/image";

export default function Benefits() {
  return (
    <div>
      <h2 className="font-semibold text-[2.625rem]">Our benefits</h2>

      <div className="flex flex-row gap-6">
        <div className="border border-border rounded-2xl w-1/3 p-6 flex flex-col gap-3">
          <Image
            src={SuitcaseIcon}
            alt="Suitcase icon"
            width={72}
            height={72}
          />

          <h3 className="text-[2rem] font-semibold">
            Seamless Travel Experience
          </h3>
        </div>

        <div className="border border-border rounded-2xl w-1/3 p-6 flex flex-col gap-3">
          <Image
            src={SuitcaseIcon}
            alt="Suitcase icon"
            width={72}
            height={72}
          />

          <h3 className="text-[2rem] font-semibold">
            Seamless Travel Experience
          </h3>
        </div>

        <div className="border border-border rounded-2xl w-1/3 p-6 flex flex-col gap-3">
          <Image
            src={SuitcaseIcon}
            alt="Suitcase icon"
            width={72}
            height={72}
          />

          <h3 className="text-[2rem] font-semibold">
            Seamless Travel Experience
          </h3>
        </div>
      </div>
    </div>
  );
}
