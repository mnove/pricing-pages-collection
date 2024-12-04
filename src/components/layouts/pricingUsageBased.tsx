"use client";

import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

export default function PricingUsageBased() {
  const [sliderValue, setSliderValue] = useState(6);

  return (
    <section className="w-full py-0">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12 dark:text-gray-100">
          <h2 className="font-display text-2xl font-semibold tracking-tighter md:text-4xl md:leading-[4rem] drop-shadow-sm">
            Estimate our API costs
          </h2>
          <p className=" font-light text-muted-foreground sm:text-xl">
            Only pay for what you use
          </p>
          <div className=" flex flex-row items-center justify-center space-x-2 text-center"></div>
        </div>

        <div className="border rounded-lg p-6 mx-auto max-w-screen-md">
          <div className="text-center flex flex-col gap-4 align-middle items-center">
            <p className="text-muted-foreground">
              Number of API requests per month
            </p>
            <Input
              type="number"
              className="text-center w-16 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              value={sliderValue * 1000}
              onChange={(e) => setSliderValue(Number(e.target.value) / 1000)}
            />
            <div className=" w-full">
              <SliderWithTicks value={sliderValue} onChange={setSliderValue} />
            </div>

            <div className="flex justify-center items-baseline  grow-0">
              <p className="text-5xl font-semibold">
                {sliderValue >= 10 ? (
                  <h1 className="p-4">Let&apos;s chat!</h1>
                ) : (
                  <>
                    {" "}
                    <NumberFlow
                      className="pr-1 text-5xl font-semibold"
                      value={sliderValue * 5}
                      format={{
                        style: "currency",
                        currency: "EUR",
                        trailingZeroDisplay: "stripIfInteger",
                      }}
                    />
                    <span className="text-zinc-500 dark:text-zinc-400 text-sm font-light">
                      /month
                    </span>
                  </>
                )}
              </p>
            </div>

            <div className="grow-0">
              <Button className="w-fit">Get started</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SliderWithTicks({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) {
  const max = 12;
  const skipInterval = 2;
  const ticks = [...Array(max + 1)].map((_, i) => i);

  return (
    <div className="space-y-4">
      <div>
        <Slider
          value={[value]}
          onValueChange={(val) => onChange(val[0])}
          max={max}
          aria-label="Slider with ticks"
        />
        <span
          className="mt-3 flex w-full items-center justify-between gap-1 px-2.5 text-xs font-medium text-muted-foreground"
          aria-hidden="true"
        >
          {ticks.map((_, i) => (
            <span
              key={i}
              className="flex w-0 flex-col items-center justify-center gap-2"
            >
              <span
                className={cn(
                  "h-1 w-px bg-muted-foreground/70",
                  i % skipInterval !== 0 && "h-0.5"
                )}
              />
              <span className={cn(i % skipInterval !== 0 && "opacity-0")}>
                {i}
              </span>
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
