import PricingSection from "@/components/layouts/pricingPageCards2";
import { ComponentViewer } from "@/components/ui/componentViewer";

export default function PricingCards2() {
  return (
    <div className="container">
      <ComponentViewer
        filePath="src/components/layouts/pricingPageCards2.tsx"
        name="Pricing Cards - 2"
        description="A collection of pricing cards that can be used in your next project."
        componentPreview={<PricingSection />}
        shadcnuiComponentsUsed={["badge", "button", "tabs"]}
        externalLibrariesUsed={["@number-flow/react", "lucide-react"]}
      />
    </div>
  );
}
