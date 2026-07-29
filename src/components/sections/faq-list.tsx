import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/content/faqs";

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <Accordion type="single" collapsible className="border-border border-t">
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id} className="border-border">
          <AccordionTrigger className="font-heading py-4 text-base font-semibold hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pb-4">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
