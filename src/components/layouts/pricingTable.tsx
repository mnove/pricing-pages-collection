"use client";
import { Check } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Feature = {
  name: string;
  description?: string;
  free: boolean | string;
  starter: boolean | string;
  enterprise: boolean | string;
};

type FeatureGroup = {
  groupName: string;
  features: Feature[];
};

const featuresGroups: FeatureGroup[] = [
  {
    groupName: "Usage",
    features: [
      {
        name: "Feature 1",
        description: "A short description of the feature",
        free: true,
        starter: true,
        enterprise: true,
      },
      {
        name: "Feature 2",
        description: "A short description of the feature",
        free: "100 sessions",
        starter: "200 sessions",
        enterprise: "300 sessions or more",
      },
      {
        name: "Feature 3",
        description: "A short description of the feature",
        free: "100 sessions",
        starter: "200 sessions",
        enterprise: "300 sessions or more",
      },
      { name: "Feature 4", free: false, starter: true, enterprise: true },
      { name: "Feature 5", free: false, starter: true, enterprise: true },
    ],
  },
  {
    groupName: "Features",
    features: [
      {
        name: "Feature 1",
        description: "A short description of the feature",
        free: true,
        starter: true,
        enterprise: true,
      },
      {
        name: "Feature 2",
        description: "A short description of the feature",
        free: "100 sessions",
        starter: "200 sessions",
        enterprise: "300 sessions or more",
      },
      {
        name: "Feature 3",
        description: "A short description of the feature",
        free: "100 sessions",
        starter: "200 sessions",
        enterprise: "300 sessions or more",
      },
      { name: "Feature 4", free: false, starter: true, enterprise: true },
      { name: "Feature 5", free: false, starter: true, enterprise: true },
      { name: "Feature 6", free: false, starter: true, enterprise: true },
      { name: "Feature 7", free: false, starter: true, enterprise: true },
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="p-0 md:p-4">
      <div className=" py-2 relative">
        <div className="relative flex items-center sm:justify-center ml-4 sm:ml-0">
          <div className="hidden md:block w-full">
            <table className="table-auto w-full min-w-[600px]">
              <thead className="sticky top-[0px] bg-white dark:bg-zinc-950">
                <tr className="relative overflow-auto">
                  <th className="py-2 font-light text-left sticky top-0"></th>
                  <th className="px-8 py-2 font-normal text-left sticky top-0">
                    <div className="flex flex-col gap-3">
                      <h2 className="text-display font-semibold text-lg">
                        Free
                      </h2>
                      <Button variant="secondary" className="max-w-fit">
                        Get started
                      </Button>
                    </div>
                  </th>
                  <th className="px-8 py-2 font-normal text-left bg-zinc-200 dark:bg-zinc-900 rounded-tl-lg rounded-tr-lg sticky top-0">
                    <div className="flex flex-col gap-3">
                      <h2 className="text-display font-semibold text-lg">
                        Started
                      </h2>
                      <Button variant="default" className="max-w-fit">
                        Get started
                      </Button>
                    </div>
                  </th>
                  <th className="px-8 py-2 font-normal text-left sticky top-0">
                    <div className="flex flex-col gap-3">
                      <h2 className="text-display font-semibold text-lg">
                        Enterprise
                      </h2>
                      <Button variant="secondary" className="max-w-fit">
                        Get started
                      </Button>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {featuresGroups.map((group, groupIndex) => (
                  <React.Fragment key={groupIndex}>
                    <tr>
                      <td className="p-0 text-base pt-6 pb-6 whitespace-nowrap">
                        <p className="font-semibold">{group.groupName}</p>
                      </td>
                      <td className="p-0 whitespace-nowrap"></td>
                      <td className="p-0 bg-zinc-200 dark:bg-zinc-900 whitespace-nowrap"></td>
                      <td className="p-0 whitespace-nowrap"></td>
                    </tr>
                    {group.features.map((feature, featureIndex) => (
                      <TableRow
                        key={featureIndex}
                        name={feature.name}
                        description={feature.description}
                        free={feature.free}
                        starter={feature.starter}
                        enterprise={feature.enterprise}
                      />
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
          <div className="block md:hidden w-full">
            <div className="sticky top-0 bg-white dark:bg-zinc-950 z-10">
              <div className="grid grid-cols-3 gap-4 p-4">
                <div className="flex flex-col gap-3">
                  <h2 className="text-display font-semibold text-lg">Free</h2>
                  <Button variant="secondary" className="max-w-fit">
                    Get started
                  </Button>
                </div>
                <div className="flex flex-col gap-3">
                  <h2 className="text-display font-semibold text-lg">
                    Starter
                  </h2>
                  <Button variant="default" className="max-w-fit">
                    Get started
                  </Button>
                </div>
                <div className="flex flex-col gap-3 ">
                  <h2 className="text-display font-semibold text-lg">
                    Enterprise
                  </h2>
                  <Button variant="secondary" className="max-w-fit">
                    Get started
                  </Button>
                </div>
              </div>
            </div>
            {featuresGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="mb-8">
                <h3 className="text-lg font-semibold mb-4">
                  {group.groupName}
                </h3>

                {group.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        {feature.description ? (
                          <Tooltip>
                            <TooltipTrigger>
                              <p className="underline decoration-dotted underline-offset-4">
                                {feature.name}
                              </p>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{feature.description}</p>
                            </TooltipContent>
                          </Tooltip>
                        ) : (
                          <p>{feature.name}</p>
                        )}
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        {typeof feature.free === "boolean" ? (
                          feature.free ? (
                            <Check color="teal" width="16px" />
                          ) : (
                            <div style={{ width: "16px", height: "32px" }} />
                          )
                        ) : (
                          <div className="flex items-center gap-2">
                            <Check color="teal" width="16px" />
                            {feature.free}
                          </div>
                        )}
                      </div>
                      <div className="text-center">
                        {typeof feature.starter === "boolean" ? (
                          feature.starter ? (
                            <Check color="teal" width="16px" />
                          ) : (
                            <div style={{ width: "16px", height: "32px" }} />
                          )
                        ) : (
                          <div className="flex items-center gap-2">
                            <Check color="teal" width="16px" />
                            {feature.starter}
                          </div>
                        )}
                      </div>
                      <div className="text-center">
                        {typeof feature.enterprise === "boolean" ? (
                          feature.enterprise ? (
                            <Check color="teal" width="16px" />
                          ) : (
                            <div style={{ width: "16px", height: "32px" }} />
                          )
                        ) : (
                          <div className="flex items-center gap-2">
                            <Check color="teal" width="16px" />
                            {feature.enterprise}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TableRowProps {
  name: string;
  description?: string;
  free: boolean | string;
  starter: boolean | string;
  enterprise: boolean | string;
}

const TableRow: React.FC<TableRowProps> = ({
  name,
  description,
  free,
  starter,
  enterprise,
}) => {
  return (
    <tr>
      <td className="px-8 py-3 text-muted-foreground font-light">
        <div className="flex items-center gap-2 pb-2">
          {description ? (
            <Tooltip>
              <TooltipTrigger>
                <p className="underline decoration-dotted underline-offset-4">
                  {name}
                </p>
              </TooltipTrigger>
              <TooltipContent>
                <p>{description}</p>
              </TooltipContent>
            </Tooltip>
          ) : (
            <p>{name}</p>
          )}
        </div>
        <hr className="border-zinc-900" />
      </td>
      <td className="px-8 py-3 whitespace-nowrap">
        {typeof free === "boolean" ? (
          free ? (
            <Check color="teal" width="16px" className="pb-2" />
          ) : (
            <div style={{ width: "16px", height: "32px" }} className="pb-2" />
          )
        ) : (
          <div className="flex items-center gap-2 pb-2">
            <Check color="teal" width="16px" />
            {free}
          </div>
        )}
        <hr className="border-zinc-900" />
      </td>
      <td className="px-8 py-3 bg-zinc-200 dark:bg-zinc-900 whitespace-nowrap">
        {typeof starter === "boolean" ? (
          starter ? (
            <Check color="teal" width="16px" className="pb-2" />
          ) : (
            <div style={{ width: "16px", height: "32px" }} className="pb-2" />
          )
        ) : (
          <div className="flex items-center gap-2 pb-2">
            <Check color="teal" width="16px" />
            {starter}
          </div>
        )}
        <hr className="border-zinc-800" />
      </td>
      <td className="px-8 py-3 whitespace-nowrap">
        {typeof enterprise === "boolean" ? (
          enterprise ? (
            <Check color="teal" width="16px" className="pb-2" />
          ) : (
            <div style={{ width: "16px", height: "32px" }} className="pb-2" />
          )
        ) : (
          <div className="flex items-center gap-2 pb-2">
            <Check color="teal" width="16px" />
            {enterprise}
          </div>
        )}
        <hr className="border-zinc-900" />
      </td>
    </tr>
  );
};
