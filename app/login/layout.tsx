import { ReactNode } from "react";

export default function AuthLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <main className="bg-neutral-700 w-full h-full flex flex-col overflow-auto">
      {children}
    </main>
  );
}
