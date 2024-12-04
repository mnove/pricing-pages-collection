import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Button } from "../components/ui/button";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <h2 className="text text-base font-semibold py-2">
          Shadcn/ui pricing collection
        </h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <>
            <SidebarMenuButton>
              <SidebarMenuSubButton asChild>
                <Link href="/">Get started</Link>
              </SidebarMenuSubButton>
            </SidebarMenuButton>
            <SidebarMenuButton>Examples</SidebarMenuButton>
            <SidebarMenuSub>
              <SidebarMenuSubItem>
                <SidebarMenuSubButton asChild>
                  <Link href="/pricingCards">Pricing Cards</Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
              <SidebarMenuSubItem>
                <SidebarMenuSubButton asChild>
                  <Link href="/pricingTable">Pricing Table</Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
              <SidebarMenuSubItem>
                <SidebarMenuSubButton asChild>
                  <Link href="/pricingCardsWithTable">
                    Pricing Cards + Table
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
              <SidebarMenuSubItem>
                <SidebarMenuSubButton asChild>
                  <Link href="/pricingUsageBased">Pricing Usage Based</Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            </SidebarMenuSub>
          </>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <div className="flex flex-row gap-2 align-middle items-center">
          <p>Built by: </p>
          <Link href="https://github.com/mnove" target="_blank">
            mnove
          </Link>
          <Button asChild variant="link"></Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
