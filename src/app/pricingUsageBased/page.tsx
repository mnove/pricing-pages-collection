import PricingSection from "@/components/layouts/pricingUsageBased";
import { ComponentViewer } from "@/components/ui/componentViewer";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function PricingUsageBased() {
  return (
    <div className="container">
      <ComponentViewer
        filePath="src/components/layouts/pricingUsageBased.tsx"
        name="Pricing Usage Based"
        description="A simple pricing section with usage based pricing calculator."
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
