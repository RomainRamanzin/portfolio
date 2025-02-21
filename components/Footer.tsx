import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

const links = [
  {
    href: "https://www.linkedin.com/in/romainrr/",
    icon: <Linkedin />,
  },
  {
    href: "https://github.com/RomainRamanzin",
    icon: <Github />,
  },
  {
    href: "mailto:romain.ramanzin@gmail.com",
    icon: <Mail />,
  },
];

function Footer() {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center py-14 space-y-4">
        <div className="flex space-x-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              className="hover:text-custom-primary size-10 hover:scale-125 transition-all"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="text-gray-500">
          © {new Date().getFullYear()} Tous droits réservés
        </p>
      </div>
    </div>
  );
}

export default Footer;
