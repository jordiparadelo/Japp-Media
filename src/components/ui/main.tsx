"use client";

import { AnimatedLayout } from "@/components/ui";
// import { Suspense } from "react";

function Main({ children }: { children: React.ReactNode }) {
  return <AnimatedLayout>{children}</AnimatedLayout>;
}

export default Main;