import PricingSection from "@/components/layouts/pricingTable";
import { ComponentViewer } from "@/components/ui/componentViewer";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function PricingCards() {
  return (
    <div className="container">
      <ComponentViewer
        filePath="src/components/layouts/pricingTable.tsx"
        name="Pricing Table"
        description="A pricing table with detailed features comparison. It can be used together with pricing cards. "
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
