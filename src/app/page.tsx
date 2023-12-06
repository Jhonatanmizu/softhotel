"use client";

import { NextUIProvider } from "@nextui-org/react";

//Components
import HomePage from "./navigation/home";

export default function Home() {
  return (
    <NextUIProvider>
      <HomePage />
    </NextUIProvider>
  );
}
