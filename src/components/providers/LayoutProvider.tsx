"use client";

import React from "react";
import Header from "../layout/Header";
import { usePathname } from "next/navigation";

export default function LayoutProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  if (path === "/sign-up" || path === "/sign-in") return <>{children}</>;
  return (
    <>
      <Header />
      {children}
    </>
  );
}
