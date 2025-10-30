"use client";

import { useState } from "react";
import {
  Calendar as CalendarIcon,
  MinusCircle,
  PlusCircle,
  Users,
} from "lucide-react";
import { Tour } from "@/types/tour";
import Link from "next/link";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

interface Props {
  tour: Tour;
}

export default function PaymentForm({ tour }: Props) {
  const [count, setCount] = useState(1);
  
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <div className="w-full lg:w-2/5">
      <div className="w-full bg-primaryBg rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col gap-4 sm:gap-6">
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-[2.625rem]">Book now</h2>

        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 h-full">
          <div className="w-full sm:w-1/2 flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center font-semibold text-lg sm:text-xl lg:text-2xl">
              <CalendarIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              
              <span>Select date</span>
            </div>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left text-sm sm:text-base"
                >
                  {date ? format(date, "yyyy-MM-dd") : "Pick a date"}
                </Button>
              </PopoverTrigger>

              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) => date < new Date()}
                  className="rounded-md border"
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="w-full sm:w-1/2 flex flex-col gap-2">
            <div className="flex flex-row gap-2 font-semibold text-lg sm:text-xl lg:text-2xl">
              <Users className="w-5 h-5 sm:w-6 sm:h-6" />

              <span>Travelers count</span>
            </div>

            <div className="rounded-lg border border-order flex flex-row justify-between p-3 sm:p-4 font-semibold text-lg sm:text-xl">
              <button
                onClick={() => setCount((a) => (a > 1 ? a - 1 : a))}
                className="hover:cursor-pointer"
              >
                <MinusCircle width={20} height={20} className="sm:w-6 sm:h-6" />
              </button>

              <span>{count}</span>

              <button
                onClick={() => setCount((a) => a + 1)}
                className="hover:cursor-pointer"
              >
                <PlusCircle width={20} height={20} className="sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-dashed border-order"></div>

        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <div className="flex flex-row gap-2 py-2 h-full items-center">
            <div className="font-bold text-xl sm:text-2xl flex items-center">
              <div>{tour.price} $</div>
            </div>

            <div className="h-6 flex items-center">
              <div className="border-l-[1px] border-secondaryFg h-full"></div>
            </div>

            <div className="text-secondaryFg font-medium text-sm sm:text-base flex items-center">
              <div>per person</div>
            </div>
          </div>

          <Link
            href={`/destinations/${tour.id}/checkout?date=${
              date ? format(date, "yyyy-MM-dd") : ""
            }&travelers=${count}`}
            className="flex flex-row py-2 sm:py-3 px-4 sm:px-6 rounded-full bg-black text-white items-center gap-1 text-sm sm:text-base"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}
