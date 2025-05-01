import React from "react";
import { Heading, Text } from "@radix-ui/themes";
import BackButton from "../../components/BackButton";

const Resource = () => {
  return (
    <div className="max-w-4xl w-full mx-auto min-h-[80vh] py-24 px-4">
      <div className="mb-12">
        <BackButton />
        <Heading mt="4" mb="2" size="8">
          Safeguarding Policy
        </Heading>
        <Heading size="5" weight="light">
          Learn more about our approach to safeguarding.
        </Heading>
      </div>

      <Heading mb="4" mt="8" size="5">
        Introduction
      </Heading>
      <Text size="3" as="p">
        Coming soon.
      </Text>
      <br />
    </div>
  );
};

export default Resource;
