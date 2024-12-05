"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { CheckCircle2Icon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const startPlan = {
  monthly: 35,
  yearly: 27,
};

const enterprisePlan = {
  monthly: 275,
  yearly: 199,
};

type PlanType = "monthly" | "yearly";

export default function PricingSection() {
  const [startedPlanAmount, setStartedPlanAmount] = useState(startPlan.yearly);
  const [enterprisePlanAmount, setEnterprisePlanAmount] = useState(
    enterprisePlan.yearly
  );

  const handlePlanChange = (planType: PlanType) => {
    if (planType === "monthly") {
      setStartedPlanAmount(startPlan.monthly);
      setEnterprisePlanAmount(enterprisePlan.monthly);
    } else {
      setStartedPlanAmount(startPlan.yearly);
      setEnterprisePlanAmount(enterprisePlan.yearly);
    }
  };
  return (
    <section className="w-full py-0">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12 dark:text-gray-100">
          <h2 className="font-display text-2xl font-semibold tracking-tighter md:text-4xl md:leading-[4rem] drop-shadow-sm">
            Pricing table that makes sense
          </h2>
          <p className="pb-5 font-light text-muted-foreground sm:text-xl">
            Here&apos;s a simple pricing table with extra descriptions and
            features
          </p>
          <div className="flex flex-row items-center justify-center space-x-2 text-center">
            <Tabs
              defaultValue="yearly"
              className=""
              onValueChange={(tab) => handlePlanChange(tab as PlanType)}
            >
              <TabsList>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">Yearly</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 ">
          <PricingCard
            name="Free"
            description="Free for personal use and small projects. No credit card required."
            price={0}
            features={[
              "Individual configuration",
              "No setup, or hidden fees",
              "Team size: 1 developer",
              "Free updates: 6 months",
            ]}
            actionUrl="/"
            actionText="Get started"
          />
          <>
            <PricingCard
              name="Professional"
              description="For teams just getting started and ready to scale to the moon."
              price={startedPlanAmount}
              features={[
                "Individual configuration",
                "No setup, or hidden fees",
                "Team size: 10 developer",
                "Premium updates: 12 months",
                "Premium support: 6 months",
              ]}
              actionUrl="/"
              actionText="Get started"
              highlight
            />
          </>
          <>
            <PricingCard
              name="Business"
              description="Best option for large teams & enterprise projects."
              price={enterprisePlanAmount}
              features={[
                "Advanced configuration",
                "No setup, or hidden fees",
                "Team size: 100 developers",
                "Premium updates: 24 months",
                "Premium support: 12 months",
                "SLA agreement",
                "Dedicated account manager",
              ]}
              actionUrl="/"
              actionText="Get started"
            />
          </>
        </div>
      </div>
    </section>
  );
}

type PricingCardFeature = string | React.ReactNode;

type PricingCardProps = {
  name: string;
  description: string;
  price: number;
  features: PricingCardFeature[];
  actionUrl: string;
  actionText: string;
  highlight?: boolean;
};

const PricingCard = ({
  name,
  description,
  price,
  features,
  actionUrl,
  actionText,
  highlight,
}: PricingCardProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-8 p-6 mx-auto max-w-lg text-left text-zinc-900 dark:text-zinc-100 rounded-lg border border-zinc-100 shadow dark:border-zinc-800 xl:p-8 h-full w-full",
        highlight && "border-primary/25 dark:border-primary/25 "
      )}
    >
      <div className="flex flex-row gap-2 w-full">
        <h3
          className={cn(
            "text-1xl font-normal tracking-wide w-full",
            highlight && "font-semibold"
          )}
        >
          {name}
        </h3>
        {highlight && (
          <div>
            <Badge className="w-full capitalize whitespace-nowrap">
              Most popular
            </Badge>
          </div>
        )}
      </div>
      <div className="flex justify-start items-baseline grow-0">
        <p className="text-5xl font-semibold">
          <span className="text-5xl font-semibold">$</span>
          <NumberFlow
            className="pr-1 text-5xl font-semibold"
            value={price}
            format={{
              trailingZeroDisplay: "stripIfInteger",
            }}
          />
        </p>
        <span className="text-zinc-500 dark:text-zinc-400">/month</span>
      </div>
      <p className="font-light text-muted-foreground sm:text-md dark:text-muted-foreground grow-0">
        {description}
      </p>
      <Button
        variant={highlight ? "default" : "outline"}
        className="grow-1"
        asChild
      >
        <Link aria-label={actionText} href={actionUrl}>
          {actionText}
        </Link>
      </Button>

      <div className="grow-0 flex flex-col gap-4">
        <div
          className={cn(
            "flex items-center gap-3 text-center justify-center grow-0"
          )}
        >
          <hr className="flex-1 border-0 h-px bg-gradient-to-r from-transparent to-accent max-w-full" />
          <p className=" text-xs text-muted-foreground font-light uppercase tracking-widest">
            Features
          </p>
          <hr className="flex-1 border-0 h-px bg-gradient-to-l from-transparent to-accent max-w-full" />
        </div>
        {features && (
          <ul role="list" className="mb-8 space-y-4 text-left flex-grow">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-3">
                <CheckCircle2Icon
                  size={18}
                  className="text-green-500 dark:text-green-600"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
