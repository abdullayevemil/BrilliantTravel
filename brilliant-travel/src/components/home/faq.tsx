import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function FAQ() {
  return (
    <div className="flex flex-col lg:flex-row w-full justify-between py-6 gap-8 lg:gap-0">
      <div>
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-2xl sm:text-3xl lg:text-[2.625rem]">FAQ</h2>

          <p className="text-base sm:text-lg w-full lg:w-[540px]">
            Here, you&apos;ll find answers to the most common questions about
            our travel services, including booking, cancellations, destinations,
            and travel requirements.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-2/5 text-base sm:text-lg">
        <Accordion type="single" collapsible>
          <AccordionItem className="text-base sm:text-lg" value="item-1">
            <AccordionTrigger className="text-base sm:text-lg">
              What services does your travel agency offer?
            </AccordionTrigger>

            <AccordionContent className="text-base sm:text-lg">
              <ol className="list-decimal">
                <li>Discover Azerbaijan with high comfort</li>{" "}
                <li>Hotels, Tours and free consultation service</li>{" "}
                <li>Professional guide and comfortable transportation</li>
              </ol>{" "}
              <ol>
                <li className="list-decimal">
                  🌿 Guba Shahdag Candy Canes Tour ❄️ Stunning mountain views
                  and thrilling activities!
                </li>{" "}
                <li>
                  🔥 Gobustan - Absheron: Mud Volcanoes & Fire Temple An
                  excellent opportunity to discover ancient Azerbaijani history,
                  culture and traditions
                </li>{" "}
                <li>
                  Gabala-Shamakhi-Tufandag -Nohur lake - Waterfall tour 🌄
                  Azerbaijan&apos;s Best Nature Tour 🌿 Experience the breathtaking
                  landscapes and stunning natural wonders!
                </li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem className="text-base sm:text-lg" value="item-2">
            <AccordionTrigger className="text-base sm:text-lg">
              How can I book a trip with your agency?
            </AccordionTrigger>

            <AccordionContent className="text-base sm:text-lg">
              Contact with us with{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:qurban.quliyev@brilliant-travel.com"
                className="underline"
              >
                mail
              </Link>{" "}
              or{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="tel:+994 50 256 15 19"
                className="underline"
              >
                whatsapp
              </Link>
              . Or just order from{" "}
              <Link href="/destinations" className="underline">
                tours
              </Link>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem className="text-base sm:text-lg" value="item-3">
            <AccordionTrigger className="text-base sm:text-lg">
              Do you offer customized travel packages?
            </AccordionTrigger>

            <AccordionContent className="text-base sm:text-lg">
              Yes we offer customized travel packages if currently we have any
              tour going with your demands. Try your luck
            </AccordionContent>
          </AccordionItem>

          <AccordionItem className="text-base sm:text-lg" value="item-5">
            <AccordionTrigger className="text-base sm:text-lg">
              What payment methods do you accept?
            </AccordionTrigger>

            <AccordionContent className="text-base sm:text-lg">
              You can pay with{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                href="https://www.bokun.io"
              >
                Bokun
              </Link>{" "}
              (safe and reliable) after choosing your tour. In future we are
              planning to add card options too.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
