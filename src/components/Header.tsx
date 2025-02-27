import { ReactNode } from "react";

export function Header({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-[60px] bg-white items-center px-5 shadow-2">
      {children}
    </div>
  );
}
