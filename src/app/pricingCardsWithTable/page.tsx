import PricingSection from "@/components/layouts/pricingCardsWithTable";
import { ComponentViewer } from "@/components/ui/componentViewer";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function PricingCardsWithTable() {
  return (
    <div className="container">
      <ComponentViewer
        filePath="src/components/layouts/pricingCardsWithTable.tsx"
        name="Pricing Cards + Table"
        description="An example composition with pricing cards and a pricing table below it."
        componentPreview={
          <ScrollArea className="h-[700px]">
            <PricingSection />
          </ScrollArea>
        }
        componentCode={"code.."}
      />
    </div>
  );
}
