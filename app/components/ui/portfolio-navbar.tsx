'use client'
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  NavbarLogo,
  NavbarButton,
} from "./resizable-navbar"; 
import { useState } from "react";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <Navbar>
      {/* Desktop Nav */}
      <NavBody>
        <div className="font-extrabold">Vivek Gorantla Portfolio</div>
        <NavItems items={navLinks} />
        <NavbarButton href="#contact" variant="gradient">
          Contact Me
        </NavbarButton>
      </NavBody>

      {/* Mobile Nav */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {navLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="w-full text-left py-2 text-black dark:text-white"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
