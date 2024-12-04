import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import * as React from "react";
import { Badge } from "./ui/badge";

const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Getting Started",
      url: "#",
      items: [
        {
          title: "Installation",
          url: "/",
        },
      ],
    },
    {
      title: "Examples",
      url: "#",
      items: [
        {
          title: "Cards",
          url: "/pricingCards",
        },
        {
          title: "Table",
          url: "/pricingTable",
        },
        {
          title: "Cards + Table",
          url: "/pricingCardsWithTable",
        },
        {
          title: "Usage Based - Simple",
          url: "/pricingUsageBased",
        },
        {
          title: "Usage Based - with card",
          url: "",
          comingSoon: true,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link href="/" className="text text-base font-semibold py-2">
          {" "}
          Shadcn/ui pricing collection
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className={cn(
                          item.comingSoon ? "text-muted-foreground" : "text"
                        )}
                      >
                        {item.title}
                        {item.comingSoon && (
                          <Badge variant="secondary" className="ml-2">
                            Coming
                          </Badge>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />

      <SidebarFooter>
        <div>
          Built by:{" "}
          <Link
            className="underline"
            target="_blank"
            href="https://github.com/mnove"
          >
            mnove
          </Link>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
