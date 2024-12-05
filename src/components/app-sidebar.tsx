"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import * as React from "react";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { GithubIcon } from "lucide-react";
import { ModeToggle } from "./ui/themeToggle";

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
          title: "Cards 2",
          url: "/pricingCards2",
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

export function AppSidebar({
  children,
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <SidebarProvider>
      <MainSidebar props={props} />
      <SidebarInset>
        <header className="flex sticky top-0 bg-background h-12 shrink-0 items-center gap-2 border-b px-4 z-50">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <div className="ml-auto grow-0">
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com/mnove" target="_blank">
                <GithubIcon />
              </Link>
            </Button>
          </div>
          <div className=" grow-0">
            <ModeToggle />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}

const MainSidebar = ({
  props,
}: {
  props: React.ComponentProps<typeof Sidebar>;
}) => {
  const { setOpenMobile } = useSidebar();
  return (
    <Sidebar {...props}>
      <SidebarHeader className="flex flex-row">
        <Link href="/" className="text text-base font-semibold py-2">
          Pricing pages collection
        </Link>
        <Badge variant="outline" className="">
          beta
        </Badge>
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
                        onClick={() => setOpenMobile(false)}
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
};
