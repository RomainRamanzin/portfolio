"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-white/20 dark:border-slate-700/20 w-auto max-w-4xl">
      <nav className="flex items-center justify-between w-full gap-4 md-gap-0">
        {/* Logo avec photo de profil */}
        <Link href="#" className="flex items-center gap-3 flex-shrink-0">
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-purple-500/20">
            <Image
              src="./images/profile-pic.png"
              alt="Avatar Romain Ramanzin"
              width={32}
              height={32}
              className="object-cover w-full h-full"
            />
          </div>
          <span className="font-bold text-lg text-slate-900 dark:text-white hidden sm:inline whitespace-nowrap">
            Romain Ramanzin
          </span>
        </Link>

        {/* Navigation desktop */}
        <div className="hidden lg:flex items-center space-x-8 mx-8">
          <button
            onClick={() => scrollToSection("hero")}
            className={`text-sm font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400 whitespace-nowrap ${
              activeSection === "hero"
                ? "text-purple-600 dark:text-purple-400"
                : "text-slate-600 dark:text-slate-300"
            }`}
          >
            Accueil
          </button>
          {/* <button
            onClick={() => scrollToSection("projects")}
            className={`text-sm font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400 whitespace-nowrap ${
              activeSection === "projects"
                ? "text-purple-600 dark:text-purple-400"
                : "text-slate-600 dark:text-slate-300"
            }`}
          >
            Projets
          </button> */}
          <button
            onClick={() => scrollToSection("experience")}
            className={`text-sm font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400 whitespace-nowrap ${
              activeSection === "experience"
                ? "text-purple-600 dark:text-purple-400"
                : "text-slate-600 dark:text-slate-300"
            }`}
          >
            Expérience
          </button>
          <button
            onClick={() => scrollToSection("education")}
            className={`text-sm font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400 whitespace-nowrap ${
              activeSection === "education"
                ? "text-purple-600 dark:text-purple-400"
                : "text-slate-600 dark:text-slate-300"
            }`}
          >
            Formation
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`text-sm font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400 whitespace-nowrap ${
              activeSection === "contact"
                ? "text-purple-600 dark:text-purple-400"
                : "text-slate-600 dark:text-slate-300"
            }`}
          >
            Contact
          </button>
        </div>

        {/* Navigation mobile et tablette */}
        <div className="flex lg:hidden items-center space-x-2 flex-shrink-0">
          {/* <button
            onClick={() => scrollToSection("projects")}
            className={`text-xs px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap ${
              activeSection === "projects"
                ? "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 scale-105"
                : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
            }`}
          >
            Projets
          </button> */}
          <button
            onClick={() => scrollToSection("experience")}
            className={`text-xs px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap ${
              activeSection === "experience"
                ? "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 scale-105"
                : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
            }`}
          >
            <span className="hidden sm:inline">Expérience</span>
            <span className="sm:hidden">Exp</span>
          </button>
          <button
            onClick={() => scrollToSection("education")}
            className={`text-xs px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap ${
              activeSection === "education"
                ? "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 scale-105"
                : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
            }`}
          >
            <span className="hidden sm:inline">Formation</span>
            <span className="sm:hidden">Form</span>
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`text-xs px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap ${
              activeSection === "contact"
                ? "bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 scale-105"
                : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
            }`}
          >
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
