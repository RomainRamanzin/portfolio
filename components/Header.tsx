"use client";

import React from "react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";

function Header() {
  const { setTheme, theme } = useTheme();
  return (
    <header className="p-8">
      <div className="flex justify-between w-4/6 mx-auto">
        <div className="flex items-center gap-16">
          <Link href="/">
            <h1 className="text-2xl font-bold text-custom-primary">
              {"{Romain Ramanzin}"}
            </h1>
          </Link>
          <ul className="flex gap-8">
            <li>
              <a
                className="hover:underline hover:text-custom-muted p-2 font-medium"
                href="#about"
              >
                À propos
              </a>
            </li>
            <li>
              <a
                className="hover:underline hover:text-custom-muted p-2 font-medium"
                href="#competences"
              >
                Compétences
              </a>
            </li>
            <li>
              <a
                className="hover:underline hover:text-custom-muted p-2 font-medium"
                href="#projects"
              >
                Projets
              </a>
            </li>
            <li>
              <a
                className="hover:underline hover:text-custom-muted p-2 font-medium"
                href="#experience"
              >
                Expériences
              </a>
            </li>
          </ul>
        </div>
        <Button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          variant="ghost"
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </Button>
      </div>
    </header>
  );
}

export default Header;
