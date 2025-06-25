"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

function Header() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "projects",
        "recommendations",
        "experience",
        "education",
        "certifications",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="fixed top-4 left-4 right-4 md:left-1/2 md:right-auto md:transform md:-translate-x-1/2 z-50 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full px-4 md:px-6 py-3 shadow-lg border border-white/20 dark:border-slate-700/20">
      <nav className="flex items-center justify-between">
        {/* <p className="text-blue-600">{"{Romain Ramanzin}"}</p> */}

        <Image
          src={"/images/profile-pic.png"}
          alt={"Avatar Romain Ramanzin"}
          width={40}
          height={40}
          className={"rounded-full"}
        />

        {/* Navigation desktop */}
        <div className="hidden lg:flex items-center space-x-6 mx-6">
          <button
            className={`text-sm font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400 ${
              activeSection === "hero"
                ? "text-purple-600 dark:text-purple-400"
                : "text-slate-600 dark:text-slate-300"
            }`}
          >
            Accueil
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className={`text-sm font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400 ${
              activeSection === "projects"
                ? "text-purple-600 dark:text-purple-400"
                : "text-slate-600 dark:text-slate-300"
            }`}
          >
            Projets
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className={`text-sm font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400 ${
              activeSection === "experience"
                ? "text-purple-600 dark:text-purple-400"
                : "text-slate-600 dark:text-slate-300"
            }`}
          >
            Expérience
          </button>
          <button
            onClick={() => scrollToSection("education")}
            className={`text-sm font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400 ${
              activeSection === "education"
                ? "text-purple-600 dark:text-purple-400"
                : "text-slate-600 dark:text-slate-300"
            }`}
          >
            Formation
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`text-sm font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400 ${
              activeSection === "contact"
                ? "text-purple-600 dark:text-purple-400"
                : "text-slate-600 dark:text-slate-300"
            }`}
          >
            Contact
          </button>
        </div>

        {/* Navigation mobile - menu compact */}
        <div className="flex lg:hidden items-center space-x-1">
          <button
            onClick={() => scrollToSection("projects")}
            className={`text-xs px-2 py-1 rounded-full transition-colors ${
              activeSection === "projects"
                ? "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300"
                : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
            }`}
          >
            Projets
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className={`text-xs px-2 py-1 rounded-full transition-colors ${
              activeSection === "experience"
                ? "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300"
                : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
            }`}
          >
            Exp
          </button>
          <button
            onClick={() => scrollToSection("education")}
            className={`text-xs px-2 py-1 rounded-full transition-colors ${
              activeSection === "education"
                ? "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300"
                : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
            }`}
          >
            Form
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`text-xs px-2 py-1 rounded-full transition-colors ${
              activeSection === "contact"
                ? "bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300"
                : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
            }`}
          >
            Contact
          </button>
        </div>

        {/* <ThemeToggle /> */}
      </nav>
    </header>
  );
}

export default Header;
