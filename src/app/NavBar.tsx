import Link from "next/link";
import React from "react";

const NavBar = () => {
  const links = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Our People", href: "/our-people" },
    { label: "EP Practice", href: "/ep-practice" },
    { label: "Contact Us", href: "/contact-us" },
  ];
  return (
    <nav className="flex space-x-8 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">Logo</Link>
      <ul className="flex  space-x-8">
        {links.map((link) => (
          <Link
            key={link.href}
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
