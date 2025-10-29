// import * as React from "react"

// import { cn } from "@/lib/utils"

// const Textarea = React.forwardRef(({ className, ...props }, ref) => {
//   return (
//     <textarea
//       className={cn(
//         "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
//         className
//       )}
//       ref={ref}
//       {...props} />
//   );
// })
// Textarea.displayName = "Textarea"

// export { Textarea }






// src/components/ui/textarea.jsx
import * as React from "react";
import { cn } from "../../lib/utils";

export const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm text-gray-100 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";
