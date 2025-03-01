import { ReactNode } from "react";

export function Header({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center min-h-16 bg-white px-regular-20 md:px-regular-28 shadow-2">
      {children}
    </div>
  );
}
