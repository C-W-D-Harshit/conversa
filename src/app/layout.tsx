import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import { Suspense } from "react";
import MobWrapper from "@/components/wrappers/MobWrapper";
import Header from "@/components/layout/Header";
import LayoutProvider from "@/components/providers/LayoutProvider";
import TopLoader from "@/components/loaders/TopLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Conversa",
  description: "A chatbot made by Harshit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            "min-h-screen bg-card font-sans antialiased",
            inter.className
          )}
        >
          <Suspense>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              forcedTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <MobWrapper>
                <TopLoader />
                <LayoutProvider>{children}</LayoutProvider>
              </MobWrapper>
            </ThemeProvider>
          </Suspense>
        </body>
      </html>
    </ClerkProvider>
  );
}
