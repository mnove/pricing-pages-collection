"use client";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

type CodePreviewProps = {
  code: string;
  children: React.ReactNode;
};

export default function CodePreview({ code, children }: CodePreviewProps) {
  const [hasCheckIcon, setHasCheckIcon] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(code);
    setHasCheckIcon(true);

    setTimeout(() => {
      setHasCheckIcon(false);
    }, 1000);
  };

  return (
    <div className="relative">
      {" "}
      <div
        className="absolute right-4 top-4 cursor-pointer bg-transparent p-4"
        onClick={onCopy}
      >
        <div
          className={`absolute inset-0 transform transition-all duration-300  ${
            hasCheckIcon ? "scale-0 opacity-0" : "scale-100 opacity-100"
          }`}
        >
          <Tooltip>
            <TooltipTrigger>
              <Copy className="h-4 w-4 text-zinc-50" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Copy code</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div
          className={`absolute inset-0 transform transition-all duration-300 ${
            hasCheckIcon ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        >
          <Check className="h-4 w-4 text-zinc-50" />
        </div>
      </div>
      <div className="max-h-[650px] overflow-auto rounded-md bg-zinc-900">
        <div className=" p-0 text-sm">{children}</div>
      </div>
    </div>
  );
}
