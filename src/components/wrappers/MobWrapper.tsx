import React from "react";

export default function MobWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full flex justify-center items-center bg-muted min-h-screen">
      <div className="max-w-screen-md w-full bg-card shadow-sm min-h-screen relative flex flex-col">
        {children}
      </div>
    </div>
  );
}
