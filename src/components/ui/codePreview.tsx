"use client";
import { Check, Copy, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "./button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

type CodePreviewProps = {
  code: string;
  fileName: string;
  children: React.ReactNode;
};

export default function CodePreview({
  code,
  fileName,
  children,
}: CodePreviewProps) {
  const [hasCheckIcon, setHasCheckIcon] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(code);
    setHasCheckIcon(true);

    setTimeout(() => {
      setHasCheckIcon(false);
    }, 1000);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative w-full max-w-full">
      <div className="relative bg-zinc-900 w-full">
        <div className="relative text-gray-50 bg-zinc-900 w-full border-b-2 px-1 ">
          <div className="flex flex-row gap-6 w-full p-2 align-middle items-center">
            <div className="grow-1 w-full ">
              <p className="font-mono">{fileName}</p>
            </div>
            <div className="grow-0 ">
              <Tooltip>
                <TooltipTrigger>
                  <Button onClick={toggleExpand} variant="ghost" size="icon">
                    {isExpanded ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronUp className="h-4 w-4" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{isExpanded ? "Collapse" : "Expand"}</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="grow-0 ">
              <Tooltip>
                <TooltipTrigger>
                  <Button onClick={onCopy} variant="ghost" size="icon">
                    {hasCheckIcon ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy code</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`relative overflow-hidden rounded-md transition-all duration-300 ${
              isExpanded
                ? "h-full overflow-x-auto overflow-y-auto"
                : "max-h-[200px] before:content-[''] before:absolute before:z-20 before:inset-0 before:pointer-events-none before:bg-gradient-to-b before:from-transparent  before:via-zinc-900/50 before:to-zinc-900"
            }`}
          >
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 z-50">
              <Button
                variant="ghost"
                onClick={toggleExpand}
                className="text-gray-50"
              >
                {isExpanded ? "Collapse" : "Expand"}
              </Button>
            </div>
            <div className=" p-4 text-sm w-full ">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
