"use client";

import { Button } from "@/components/ui/button";
import { Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme, theme } = useTheme();

  return (
    <>
      <Button
        variant={"ghost"}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <Sun />
      </Button>
      <div className="bg-slate-500 h-screen"></div>
    </>
  );
}
