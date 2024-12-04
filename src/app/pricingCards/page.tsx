import PricingSection from "@/components/layouts/pricingPageCards";
import { ComponentViewer } from "@/components/ui/componentViewer";

export default function PricingCards() {
  return (
    <div className="container">
      <ComponentViewer
        filePath="src/components/layouts/pricingPageCards.tsx"
        name="Pricing Cards"
        description="A collection of pricing cards that can be used in your next project."
        componentPreview={<PricingSection />}
        shadcnuiComponentsUsed={["badge", "button", "tabs"]}
        externalLibrariesUsed={["@number-flow/react", "lucide-react"]}
      />
    </div>
  );
}
