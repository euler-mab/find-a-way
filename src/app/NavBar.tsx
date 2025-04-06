"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import classnames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();
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
            className={classnames({
              "text-zink-900": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
              "hover:text-zinc-800 transition-colors": true,
            })}
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
