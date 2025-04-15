import React from "react";
import { Container, Heading, Text } from "@radix-ui/themes";
import BackButton from "@/app/components/BackButton";

const SchoolsAndEducation = () => {
  return (
    <div className="max-w-4xl w-full mx-auto min-h-[80vh] py-24 px-4">
      <div className="mb-12">
        <BackButton />
        <Heading mt="4" mb="2" size="8">
          Parents and carers
        </Heading>
        <Heading size="5" weight="light">
          Support for parents or carers in a home setting
        </Heading>
      </div>

      <Heading mb="4" mt="8" size="5">
        Introduction
      </Heading>
      <Text size="3" as="p">
        At Find A Way CIC, we provide comprehensive support to parents, carers,
        and families in a wide range of situations. When conducting assessments
        for children or young people, we aim to meet with families to gather
        valuable information relevant to the referral request.
      </Text>
      <br />

      <Heading mb="4" mt="4" size="5">
        Support for families
      </Heading>
      <Text size="3" as="p">
        Examples of our work include:
      </Text>
      <br />
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <Text size="3">
            <span className="font-semibold">Consultations:</span> We meet with
            parents to discuss concerns about their child's learning, behaviour,
            or emotional well-being, offering expert advice and guidance.
          </Text>
        </li>
        <li>
          <Text size="3">
            <span className="font-semibold">Parent workshops:</span> We deliver
            workshops focused on topics such as child development, social,
            emotional, and mental health needs, or strategies for supporting
            learning at home.
          </Text>
        </li>
        <li>
          <Text size="3">
            <span className="font-semibold">Assessment feedback:</span> After
            conducting psychological assessments, we provide detailed feedback,
            explaining the results and offering practical recommendations.
          </Text>
        </li>
        <li>
          <Text size="3">
            <span className="font-semibold">Development of support plans:</span>{" "}
            We collaborate with parents to create individualised education plans
            (IEPs) or other tailored strategies that address their child’s
            specific needs.
          </Text>
        </li>
        <li>
          <Text size="3">
            <span className="font-semibold">Home-school collaboration:</span> We
            act as a link between parents and schools, ensuring both are aligned
            in supporting the child’s learning and emotional well-being.
          </Text>
        </li>
        <li>
          <Text size="3">
            <span className="font-semibold">Multi-agency meetings:</span> We
            attend meetings with other professionals, such as social workers or
            therapists, alongside parents, to provide coordinated and
            comprehensive support for the child.
          </Text>
        </li>
        <li>
          <Text size="3">
            <span className="font-semibold">
              Emotional support for parents:
            </span>{" "}
            We offer emotional support to help parents navigate the challenges
            of raising children with additional needs or complex situations.
          </Text>
        </li>
        <li>
          <Text size="3">
            <span className="font-semibold">Transition support:</span> We assist
            parents in supporting their child through key educational
            transitions, such as starting school or moving to a new setting,
            ensuring a smooth and supported change.
          </Text>
        </li>
      </ul>

      <br />
      <Text size="3" as="p">
        Our goal is to ensure families feel supported, informed, and empowered
        to help their children thrive.
      </Text>
      <br />
    </div>
  );
};

export default SchoolsAndEducation;
