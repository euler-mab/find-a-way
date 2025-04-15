import React from "react";
import { Button, Heading, Text, Link } from "@radix-ui/themes";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="w-[80%]">
        <div className="mb-4 text-center">
          <div className="flex justify-center items-center">
            <Link href="/">
              <Image
                src="/find-a-way-logo-2.png"
                alt="Find A Way logo"
                width={350} // adjust as needed
                height={100}
                className="object-contain"
              />
            </Link>
          </div>
          <Text size="5" weight="light" as="p">
            Helping you navigate the early years
          </Text>
        </div>
        <div className="mb-8  text-center">
          <Text size="3" weight="light" as="p">
            We are a community interest company. Our mission is empowering
            families across Yorkshire with accessible psychological support,
            tailored interventions, and community-based care—helping every
            family thrive in a safe, supportive environment.{" "}
          </Text>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-row">
            <div className="mr-2">
              <Button
                size="3"
                color="gray"
                highContrast
                asChild
                style={{ backgroundColor: "#6BA8A9" }}
              >
                <Link href="/#contact-us">Contact Us</Link>
              </Button>
            </div>
            <div>
              <Button size="3" variant="outline">
                Services
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-40 flex flex-col items-center justify-center gap-2">
          <div className="relative h-20 w-40">
            <Image
              src="/national-lottery-logo.png"
              alt="National Lottery"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm text-gray-600">
            Proudly funded by{" "}
            <span className="font-medium">The National Lottery</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
