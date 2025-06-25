import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const links = [
  {
    href: "https://www.linkedin.com/in/romainrr/",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    href: "https://github.com/RomainRamanzin",
    icon: <Github className="w-5 h-5" />,
  },
  {
    href: "mailto:romain.ramanzin@gmail.com",
    icon: <Mail className="w-5 h-5" />,
  },
];

function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-slate-800 bg-slate-900/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-col items-center justify-center">
          {/* <Logo /> */}
          <div className="flex items-center gap-6 my-6">
            {links.map((link, _index) => (
              <Link
                key={_index}
                href={link.href}
                target="_blank"
                className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors"
                aria-label="LinkedIn"
              >
                {link.icon}
              </Link>
            ))}
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            © {new Date().getFullYear()} Romain Ramanzin. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
