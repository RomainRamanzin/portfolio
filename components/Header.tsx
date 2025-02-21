"use client";

import React from "react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { Sun } from "lucide-react";

function Header() {
  const { setTheme, theme } = useTheme();
  return (
    <>
      <Button
        variant={"ghost"}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <Sun />
      </Button>
    </>
  );
}

export default Header;
