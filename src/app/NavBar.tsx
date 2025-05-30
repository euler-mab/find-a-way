"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Menu, X } from "lucide-react";
import { Button } from "@radix-ui/themes";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const currentPath = usePathname();
  const links = [
    { label: "About Us", href: "/#about-us" },
    { label: "Our Services", href: "/#our-services" },
    { label: "Our Team", href: "/#our-team" },
    { label: "Private Practice", href: "/private-practice" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/#contact-us" },
  ];
  const linkComponents = links.map((link) => (
    <NavigationMenu.Link
      key={link.href}
      className={classnames({
        "text-zink-900": link.href === currentPath,
        "text-zinc-500": link.href !== currentPath,
        "hover:text-zinc-800 transition-colors": true,
      })}
      href={link.href}
    >
      {link.label}
    </NavigationMenu.Link>
  ));

  const socialLinks = (
    <div className="flex gap-4 text-black">
      <Link
        href="https://www.facebook.com/share/1HEMMP6LRs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook
          className="w-5 h-5 hover:text-gray-700"
          style={{ color: "#FFAD82" }}
        />
      </Link>
      <Link
        href="https://www.instagram.com/findaway_psychology"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram
          className="w-5 h-5 hover:text-gray-700"
          style={{ color: "#FFAD82" }}
        />
      </Link>
      <Link
        href="https://x.com/findawaycic"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter
          className="w-5 h-5 hover:text-gray-700"
          style={{ color: "#FFAD82" }}
        />
      </Link>
    </div>
  );

  return (
    <nav
      className="sticky top-0 z-50 shadow-2xs"
      style={{ backgroundColor: "white" }}
    >
      <div className="max-w-6xl w-full mx-auto px-4 py-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/find-a-way-logo-4.png"
                alt="Find A Way logo"
                width={150} // adjust as needed
                height={20}
                className="object-contain"
              />
            </Link>
          </div>

          <NavigationMenu.Root className="hidden md:block">
            <NavigationMenu.List className="flex space-x-6">
              {linkComponents}
            </NavigationMenu.List>
          </NavigationMenu.Root>

          <div>
            <div className="hidden md:flex">{socialLinks}</div>

            <div className="md:hidden">
              <Button
                variant="outline"
                onClick={() => setOpen((prev) => !prev)}
                aria-label="Toggle navigation menu"
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {open && (
          <div className="md:hidden fixed top-16 left-0 right-0 z-50 p-6 bg-white shadow-md">
            <NavigationMenu.Root>
              <NavigationMenu.List className="flex flex-col gap-y-8">
                {linkComponents}
                {socialLinks}
              </NavigationMenu.List>
            </NavigationMenu.Root>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
