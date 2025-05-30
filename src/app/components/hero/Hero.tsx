import { Text } from "@radix-ui/themes";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";

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
            <PrimaryButton href="/#contact-us">Contact Us</PrimaryButton>
          </div>
          <div>
            <SecondaryButton href="/#our-services">Services</SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
