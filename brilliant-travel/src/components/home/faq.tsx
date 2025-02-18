import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="flex flex-row w-full justify-between">
      <div>
        <div className="flex flex-col 2">
          <h2 className="font-semibold text-[2.625rem]">FAQ</h2>

          <p className="text-lg w-[540px]">
            Here, you&apos;ll find answers to the most common questions about our
            travel services, including booking, cancellations, destinations, and
            travel requirements.
          </p>
        </div>
      </div>

      <div className="w-2/5 text-lg">
        <Accordion type="single" collapsible>
          <AccordionItem className="text-lg" value="item-1">
            <AccordionTrigger className="text-lg">
              What services does your travel agency offer?
            </AccordionTrigger>

            <AccordionContent className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
              laoreet justo, vel scelerisque erat. Donec in enim dignissim,
              luctus nunc et, bibendum dui. Pellentesque quis elementum lacus.
              Fusce sollicitudin feugiat posuere. Nullam posuere purus et ante
              eleifend elementum.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem className="text-lg" value="item-2">
            <AccordionTrigger className="text-lg">
              How can I book a trip with your agency?
            </AccordionTrigger>

            <AccordionContent className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
              laoreet justo, vel scelerisque erat. Donec in enim dignissim,
              luctus nunc et, bibendum dui. Pellentesque quis elementum lacus.
              Fusce sollicitudin feugiat posuere. Nullam posuere purus et ante
              eleifend elementum.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem className="text-lg" value="item-3">
            <AccordionTrigger className="text-lg">
              Do you offer customized travel packages?
            </AccordionTrigger>

            <AccordionContent className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
              laoreet justo, vel scelerisque erat. Donec in enim dignissim,
              luctus nunc et, bibendum dui. Pellentesque quis elementum lacus.
              Fusce sollicitudin feugiat posuere. Nullam posuere purus et ante
              eleifend elementum.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem className="text-lg" value="item-4">
            <AccordionTrigger className="text-lg">
              Can I book flights, hotels, and tours separately?
            </AccordionTrigger>

            <AccordionContent className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
              laoreet justo, vel scelerisque erat. Donec in enim dignissim,
              luctus nunc et, bibendum dui. Pellentesque quis elementum lacus.
              Fusce sollicitudin feugiat posuere. Nullam posuere purus et ante
              eleifend elementum.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem className="text-lg" value="item-5">
            <AccordionTrigger className="text-lg">
              What payment methods do you accept?
            </AccordionTrigger>

            <AccordionContent className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
              laoreet justo, vel scelerisque erat. Donec in enim dignissim,
              luctus nunc et, bibendum dui. Pellentesque quis elementum lacus.
              Fusce sollicitudin feugiat posuere. Nullam posuere purus et ante
              eleifend elementum.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
