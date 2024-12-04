import PricingCards from "./pricingPageCards";
import PricingTable from "./pricingTable";

/**
 * This component is used to render the PricingCards and PricingTable components.
 * It is just a wrapper component that renders the PricingCards and PricingTable components.
 *
 */

export default function PricingCardsWithTable() {
  return (
    <div>
      <PricingCards />
      <PricingTable />
    </div>
  );
}
