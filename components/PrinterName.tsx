"use client";

import { useState, useEffect } from "react";

export function PrinterName() {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showPrinter, setShowPrinter] = useState(true);

  const lines = ["Romain", "Ramanzin"];
  const printSpeed = 150; // ms par caractère
  const lineDelay = 500; // délai entre les lignes

  useEffect(() => {
    if (currentLine >= lines.length) {
      setIsComplete(true);
      // Masquer la tête d'imprimante après un délai
      setTimeout(() => setShowPrinter(false), 1000);
      return;
    }

    const currentLineText = lines[currentLine];

    if (currentChar < currentLineText.length) {
      const timer = setTimeout(() => {
        setCurrentChar(currentChar + 1);
      }, printSpeed);
      return () => clearTimeout(timer);
    } else {
      // Ligne terminée, passer à la suivante
      const timer = setTimeout(() => {
        setCurrentLine(currentLine + 1);
        setCurrentChar(0);
      }, lineDelay);
      return () => clearTimeout(timer);
    }
  }, [currentLine, currentChar, lines, printSpeed, lineDelay]);

  const getPrinterPosition = () => {
    if (currentLine >= lines.length) return { x: 100, y: 100 };

    const lineProgress = currentChar / lines[currentLine].length;
    const x = lineProgress * 80 + 10; // Position horizontale en %
    const y = currentLine * 60 + 20; // Position verticale en px

    return { x, y };
  };

  const printerPos = getPrinterPosition();

  return (
    <div className="relative w-full max-w-md mx-auto h-40 overflow-hidden">
      {/* Tête d'imprimante */}
      {showPrinter && (
        <div
          className="absolute transition-all duration-150 ease-linear z-20"
          style={{
            left: `${printerPos.x}%`,
            top: `${printerPos.y}px`,
            transform: "translate(-50%, -100%)",
          }}
        >
          {/* Tête d'imprimante */}
          <div className="relative">
            {/* Bras de l'imprimante */}
            <div className="w-8 h-2 bg-gradient-to-r from-slate-400 to-slate-600 rounded-sm mb-1"></div>

            {/* Tête d'extrusion */}
            <div className="w-4 h-4 bg-gradient-to-b from-slate-600 to-slate-800 rounded-sm mx-auto relative">
              {/* Buse */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-slate-900 rounded-b-full"></div>

              {/* Effet de "filament" qui sort */}
              {!isComplete && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-3 bg-gradient-to-b from-purple-500 to-transparent animate-pulse"></div>
              )}
            </div>

            {/* LED d'indication */}
            <div
              className={`absolute -top-1 -right-1 w-2 h-2 rounded-full ${
                !isComplete ? "bg-green-400 animate-pulse" : "bg-red-400"
              }`}
            ></div>
          </div>
        </div>
      )}

      {/* Plateau d'impression avec grille */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-lg border-2 border-slate-300 dark:border-slate-700">
        {/* Grille du plateau */}
        <div className="absolute inset-2 opacity-20">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute w-full h-px bg-slate-400 dark:bg-slate-600"
              style={{ top: `${i * 12.5}%` }}
            ></div>
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute h-full w-px bg-slate-400 dark:bg-slate-600"
              style={{ left: `${i * 8.33}%` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Texte imprimé */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
        <div className="flex flex-col items-center w-full">
          {lines.map((line, lineIndex) => (
            <div key={lineIndex} className="relative">
              <div className="text-4xl md:text-5xl font-bold tracking-tight">
                {/* Texte déjà imprimé */}
                <span className="text-slate-900 dark:text-white">
                  {lineIndex < currentLine
                    ? line
                    : lineIndex === currentLine
                    ? line.slice(0, currentChar)
                    : ""}
                </span>

                {/* Effet de "dépôt" sur le caractère en cours */}
                {lineIndex === currentLine && currentChar < line.length && (
                  <span className="relative">
                    <span className="text-transparent">
                      {line[currentChar]}
                    </span>
                    <span className="absolute inset-0 text-purple-500 animate-pulse">
                      {line[currentChar]}
                    </span>
                  </span>
                )}

                {/* Texte pas encore imprimé (invisible) */}
                <span className="text-transparent">
                  {lineIndex === currentLine
                    ? line.slice(currentChar + 1)
                    : lineIndex > currentLine
                    ? line
                    : ""}
                </span>
              </div>

              {/* Effet de "couche" fraîchement déposée */}
              {lineIndex === currentLine && currentChar > 0 && (
                <div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500/30 to-transparent rounded-full animate-pulse"
                  style={{ width: `${(currentChar / line.length) * 100}%` }}
                ></div>
              )}
            </div>
          ))}

          {/* Indicateur de progression - maintenant en dessous du texte */}
          <div className="mt-6 w-full max-w-xs">
            <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-1">
                <div
                  className="bg-gradient-to-r from-purple-500 to-blue-500 h-1 rounded-full transition-all duration-300"
                  style={{
                    width: `${
                      ((currentLine * 100 +
                        (currentChar / (lines[currentLine]?.length || 1)) *
                          100) /
                        (lines.length * 100)) *
                      100
                    }%`,
                  }}
                ></div>
              </div>
              <span className="font-mono">
                {isComplete
                  ? "100%"
                  : `${Math.round(
                      ((currentLine * 100 +
                        (currentChar / (lines[currentLine]?.length || 1)) *
                          100) /
                        (lines.length * 100)) *
                        100
                    )}%`}
              </span>
            </div>

            {/* Status */}
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono text-center">
              {isComplete
                ? "✓ Impression terminée"
                : "🖨️ Impression en cours..."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
