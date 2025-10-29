import * as React from "react";

export function Select({ children, ...props }) {
  return (
    <select
      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
      {...props}
    >
      {children}
    </select>
  );
}

export function SelectTrigger({ children }) {
  return <div className="font-medium">{children}</div>;
}

export function SelectValue({ value }) {
  return <option value={value}>{value}</option>;
}

export function SelectContent({ children }) {
  return <>{children}</>;
}

export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>;
}
