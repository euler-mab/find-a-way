import React from "react";
import { Button, Heading, Text, Link } from "@radix-ui/themes";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center gap-12">
      {/* Text content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-whi">
          Helping you navigate the early years
        </h1>
        <div className="mb-8  text-left">
          <Text size="3" weight="light" as="p">
            We are a community interest company. Our mission is empowering
            families across Yorkshire with accessible psychological support,
            tailored interventions, and community-based care—helping every
            family thrive in a safe, supportive environment.
          </Text>
        </div>
        <div className="flex flex-row">
          <div className="mr-2">
            <Button
              size="3"
              highContrast
              asChild
              style={{ backgroundColor: "#FFAD82" }}
            >
              <Link
                href="/#contact-us"
                className="no-underline"
                style={{ textDecoration: "none" }}
              >
                Contact Us
              </Link>
            </Button>
          </div>
          <div>
            <Button size="3" variant="outline">
              Services
            </Button>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="md:w-1/2">
        <img
          src="/stepping_stones.jpg"
          alt="Illustration of support"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
