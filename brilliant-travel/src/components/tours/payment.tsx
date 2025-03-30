"use client";

import { useState } from "react";
import { Calendar, MinusCircle, PlusCircle, Users } from "lucide-react";
import { DatePicker } from "./date-picker";
import { Tour } from "@/types/tour";

interface Props {
  tour: Tour;
}

export default function PaymentForm({ tour }: Props) {
  const [count, setCount] = useState(1);

  return (
    <div className="w-2/5">
      <div className="w-full bg-primaryBg rounded-2xl p-8 flex flex-col gap-6">
        <h2 className="font-bold text-[2.625rem]">Book now</h2>

        <div className="w-full flex flex-row justify-between items-center gap-4">
          <div className="w-1/2 flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center font-semibold text-2xl">
              <Calendar />

              <span>Select date</span>
            </div>

            <DatePicker />
          </div>

          <div className="w-1/2 flex flex-col gap-2">
            <div className="flex flex-row gap-2 font-semibold text-2xl">
              <Users />

              <span>Travelers count</span>
            </div>

            <div className="rounded-lg border border-order flex flex-row justify-between p-4 font-semibold text-xl">
              <button
                onClick={() => setCount((a) => (a > 1 ? a - 1 : a))}
                className="hover:cursor-pointer"
              >
                <MinusCircle width={24} height={24} />
              </button>

              <span>{count}</span>

              <button
                onClick={() => setCount((a) => a + 1)}
                className="hover:cursor-pointer"
              >
                <PlusCircle width={24} height={24} />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-dashed border-order"></div>

        <div className="w-full flex flex-row justify-between items-center">
          <div className="flex flex-row gap-2 py-2 h-full items-center">
            <div className="font-bold text-2xl flex items-center">
              <div>{tour.price} $</div>
            </div>

            <div className="h-6 flex items-center">
              <div className="border-l-[1px] border-secondaryFg h-full"></div>
            </div>

            <div className="text-secondaryFg font-medium text-base flex items-center">
              <div>per person</div>
            </div>
          </div>

          <button className="flex flex-row py-3 px-6 rounded-full bg-black text-white items-center gap-1">
            <span>Continue</span>
          </button>
        </div>
      </div>
    </div>
  );
}
