import { Heading, Link, Text } from "@radix-ui/themes";
import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#D6C49A" }}>
      <div className="max-w-6xl w-full mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row">
          {/* Column 1 (2x width) */}
          <div className="flex-1 mb-8 md:mb-0">
            <Heading mb="2" size="4">
              Find A Way
            </Heading>
            <Text size="3" weight="light" as="p">
              Helping you navigate the early years.
            </Text>
          </div>

          {/* Columns 2–5 */}
          <div className="flex-2 flex flex-col md:flex-row gap-8 text-left md:text-right">
            <div className="flex-1 md:flex-[1]">
              <h4 className="text-base font-medium mb-2">About</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>
                  <Text as="span" size="2">
                    <Link href="/#about-us">About Us</Link>
                  </Text>
                </li>
                <li>
                  <Text as="span" size="2">
                    <Link href="/#our-services">Our Services</Link>
                  </Text>
                </li>
                <li>
                  <Text as="span" size="2">
                    <Link href="/#our-team">Our Team</Link>
                  </Text>
                </li>
                <li>
                  <Text as="span" size="2">
                    <Link href="/private-practice">Private Practice</Link>
                  </Text>
                </li>
              </ul>
            </div>

            <div className="flex-1 md:flex-[1]">
              <h4 className="text-base font-medium mb-2">Resources</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>
                  <Text as="span" size="2">
                    <Link href="/news">News</Link>
                  </Text>
                </li>
                <li>
                  <Text as="span" size="2">
                    <Link href="/brand-kit">Brand Kit</Link>
                  </Text>
                </li>
                <li>
                  <Text as="span" size="2">
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </Text>
                </li>
                <li>
                  <Text as="span" size="2">
                    <Link href="/safeguarding-policy">Safeguarding Policy</Link>
                  </Text>
                </li>
              </ul>
            </div>

            <div className="flex-1 md:flex-[1]">
              <h4 className="text-base font-medium mb-2">Contact</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>
                  <Text as="span" size="2">
                    <Link href="mailto:hello@findaway.org">Email</Link>
                  </Text>
                </li>
                <li>
                  <Text as="span" size="2">
                    <Link
                      href="https://www.facebook.com/share/1HEMMP6LRs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </Link>
                  </Text>
                </li>
                <li>
                  <Text as="span" size="2">
                    <Link
                      href="https://www.instagram.com/findaway_psychology"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </Link>
                  </Text>
                </li>
                <li>
                  <Text as="span" size="2">
                    <Link
                      href="https://x.com/findaway_psych"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </Link>
                  </Text>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl w-full mx-auto px-4 flex justify-between pb-8">
        <Text size="1" weight="light" as="p" align="left">
          &copy; {new Date().getFullYear()} Find A Way: Psychological Services
          CIC. All rights reserved.
        </Text>
        <Text size="1" weight="light" as="p" align="right">
          Registered in England & Wales. Company no.{" "}
          <Link
            href="https://find-and-update.company-information.service.gov.uk/company/15992869"
            target="_blank"
            rel="noopener noreferrer"
          >
            15992869
          </Link>
          .
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
