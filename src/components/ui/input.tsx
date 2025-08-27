import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-12 w-full min-w-0 rounded-full border border-freakmode-gray-300 bg-freakmode-gray-50 px-8 py-3 text-sm font-medium text-freakmode-gray-700 placeholder:text-freakmode-gray-500 transition-all outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-freakmode-red focus-visible:ring-freakmode-red/20 focus-visible:ring-[3px]",
        "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-freakmode-gray-700",
        className
      )}
      {...props}
    />
  );
}

export { Input };
