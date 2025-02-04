import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center py-14 space-y-4">
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/romainrr/"
            target="_blank"
            className="hover:text-blue-500 size-10 hover:scale-125 transition-all"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/RomainRamanzin"
            target="_blank"
            className="hover:text-blue-500 size-10 hover:scale-125 transition-all"
          >
            <Github />
          </a>
          <a
            href="mailto:romain.ramanzin@gmail.com"
            className="hover:text-blue-500 size-10 hover:scale-125 transition-all"
          >
            <Mail />
          </a>
        </div>
        <p className="text-gray-500">
          © {new Date().getFullYear()} Tous droits réservés
        </p>
      </div>
    </div>
  );
}

export default Footer;
