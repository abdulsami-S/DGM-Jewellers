// import * as React from "react";
// import * as TabsPrimitive from "@radix-ui/react-tabs";
// import { cn } from "@/lib/utils";

// const Tabs = TabsPrimitive.Root;

// const TabsList = React.forwardRef(({ className, ...props }, ref) => (
//   <TabsPrimitive.List
//     ref={ref}
//     className={cn(
//       "inline-flex h-10 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
//       className
//     )}
//     {...props}
//   />
// ));
// TabsList.displayName = TabsPrimitive.List.displayName;

// const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
//   <TabsPrimitive.Trigger
//     ref={ref}
//     className={cn(
//       "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
//       className
//     )}
//     {...props}
//   />
// ));
// TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

// const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
//   <TabsPrimitive.Content
//     ref={ref}
//     className={cn(
//       "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
//       className
//     )}
//     {...props}
//   />
// ));
// TabsContent.displayName = TabsPrimitive.Content.displayName;

// export { Tabs, TabsList, TabsTrigger, TabsContent };


// src/components/ui/tabs.jsx
import * as React from "react";
import { cn } from "../../lib/utils";

export const Tabs = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col w-full text-white", className)}
    {...props}
  />
));
Tabs.displayName = "Tabs";

export const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex border-b border-gray-700 bg-[#1e1b18] rounded-t-lg",
      className
    )}
    {...props}
  />
));
TabsList.displayName = "TabsList";

export const TabsTrigger = React.forwardRef(
  ({ className, active, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "px-4 py-2 text-sm font-medium transition-colors duration-200",
        active
          ? "text-amber-400 border-b-2 border-amber-400"
          : "text-gray-400 hover:text-amber-300",
        className
      )}
      {...props}
    />
  )
);
TabsTrigger.displayName = "TabsTrigger";

export const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-4 bg-[#161310] rounded-b-lg", className)} {...props} />
));
TabsContent.displayName = "TabsContent";
