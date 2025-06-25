"use client";

import { ChevronRight, Code, Github, Linkedin, Mail } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { PrinterName } from "./PrinterName";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 pt-24 pb-12 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-32 h-32 md:w-64 md:h-64 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-40 h-40 md:w-72 md:h-72 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 md:w-80 md:h-80 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        <div className="text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
            <Code className="w-3 h-3 md:w-4 md:h-4" />
            <span className="hidden sm:inline">
              Développeur Symfony • React • Node.js
            </span>
            <span className="sm:hidden">Dev Full Stack</span>
          </div>

          {/* Animation d'impression 3D du nom */}
          <div className="mb-4 md:mb-6">
            <PrinterName />
          </div>

          <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Développeur passionné par la création d&apos;expériences numériques.
            Spécialisé dans les technologies modernes et l&apos;innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-6 md:px-8 py-3 rounded-full text-sm md:text-base"
            >
              Voir mes projets
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-6 md:px-8 py-3 rounded-full text-sm md:text-base"
            >
              Me contacter
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                window.open(
                  "/documents/CV_2025-06-02_Romain_Ramanzin.pdf",
                  "_blank"
                )
              }
              className="border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 px-6 md:px-8 py-3 rounded-full text-sm md:text-base"
            >
              📄 Télécharger CV
            </Button>
          </div>

          <div className="mt-8 md:mt-12 flex gap-4 justify-center lg:justify-start">
            <Link
              href="https://github.com/RomainRamanzin"
              target="_blank"
              className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors"
            >
              <Github className="w-5 h-5 md:w-6 md:h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/romainrr/"
              target="_blank"
              className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors"
            >
              <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
            </Link>
            <Link
              href="mailto:romain.ramanzin@gmail.com"
              className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors"
            >
              <Mail className="w-5 h-5 md:w-6 md:h-6" />
            </Link>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
          <div className="relative z-10">
            <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl mx-auto">
              <Image
                src="/images/profile-pic.png"
                alt="Photo de profil"
                width={320}
                height={320}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl transform scale-110"></div>

          {/* Floating skill badges - responsive positioning */}
          <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 bg-white dark:bg-slate-800 rounded-full px-2 py-1 sm:px-4 sm:py-2 shadow-lg border border-slate-100 dark:border-slate-700">
            <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300 text-xs sm:text-sm">
              Symfony
            </Badge>
          </div>
          <div className="absolute top-1/2 -right-2 sm:-right-4 bg-white dark:bg-slate-800 rounded-full px-2 py-1 sm:px-4 sm:py-2 shadow-lg border border-slate-100 dark:border-slate-700">
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 text-xs sm:text-sm">
              React
            </Badge>
          </div>
          <div className="absolute -bottom-2 left-1/4 sm:-bottom-4 sm:left-1/4 bg-white dark:bg-slate-800 rounded-full px-2 py-1 sm:px-4 sm:py-2 shadow-lg border border-slate-100 dark:border-slate-700">
            <Badge className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-300 text-xs sm:text-sm">
              Next.js
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
