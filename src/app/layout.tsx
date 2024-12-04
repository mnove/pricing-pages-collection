import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/ui/themeToggle";
import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Script from "next/script";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pricing Pages Collection",
  authors: [
    {
      name: "mnove",
      url: "https://github.com/mnove",
    },
  ],
  description:
    "A collection of pricing pages built with tailwindcss. Ready to be copied and pasted into your project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.NODE_ENV === "development";

  return (
    <html lang="en" data-website-id="5a54a8f9-5ba1-49e6-8c95-52b0e663ca79">
      {!isDev ? (
        <Script
          async
          src="https://cloud.umami.is/script.js"
          data-website-id="5a54a8f9-5ba1-49e6-8c95-52b0e663ca79"
        />
      ) : null}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <SidebarProvider>
              <AppSidebar />
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
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
