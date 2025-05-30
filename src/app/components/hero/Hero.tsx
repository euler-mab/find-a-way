import { Button, Link, Text } from "@radix-ui/themes";

const Hero = () => {
  return (
    <div className="flex flex-row justify-center text-center py-24">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Helping you navigate the early years
        </h1>
        <div className="mb-8">
          <Text size="3" as="p">
            We are a community interest company. Our mission is empowering
            families across Yorkshire with accessible psychological support,
            tailored interventions, and community-based care—helping every
            family thrive in a safe, supportive environment.
          </Text>
        </div>
        <div className="flex flex-row justify-center">
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
    </div>
  );
};

export default Hero;
