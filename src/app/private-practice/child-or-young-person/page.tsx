import React from "react";
import { Container, Heading, Text } from "@radix-ui/themes";
import BackButton from "@/app/components/BackButton";

const SchoolsAndEducation = () => {
  return (
    <div className="max-w-4xl w-full mx-auto min-h-[80vh] py-24 px-4">
      <div className="mb-12">
        <BackButton />
        <Heading mt="4" mb="2" size="8">
          Child or young person
        </Heading>
        <Heading size="5" weight="light">
          Direct work with the individual in any setting
        </Heading>
      </div>

      <Heading mb="4" mt="8" size="5">
        Introduction
      </Heading>
      <Text size="3" as="p">
        In addition to completing assessments and providing advice for children,
        young people, and key adults, Find A Way CIC also offers ongoing support
        and interventions through direct work with the individual.
      </Text>
      <br />

      <Heading mb="4" mt="4" size="5">
        Skill development sessions
      </Heading>
      <Text size="3" as="p">
        Target specific areas of growth, such as:
      </Text>
      <br />
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <Text size="3">Social interaction skills</Text>
        </li>
        <li>
          <Text size="3">Emotional awareness and regulation skills</Text>
        </li>
        <li>
          <Text size="3">Problem-solving and decision-making skills</Text>
        </li>
        <li>
          <Text size="3">Resilience and coping strategies</Text>
        </li>
        <li>
          <Text size="3">Communication skills</Text>
        </li>
        <li>
          <Text size="3">Self-esteem and confidence building</Text>
        </li>
      </ul>
      <br />

      <Heading mb="4" mt="4" size="5">
        Therapeutic interventions
      </Heading>
      <Text size="3" as="p">
        Address psychological and emotional challenges, including:
      </Text>
      <br />
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <Text size="3">Anxiety</Text>
        </li>
        <li>
          <Text size="3">Trauma</Text>
        </li>
        <li>
          <Text size="3">Stress management</Text>
        </li>
        <li>
          <Text size="3">Managing anger or frustration</Text>
        </li>
        <li>
          <Text size="3">Overcoming low mood/depression</Text>
        </li>
        <li>
          <Text size="3">Support with grief and loss</Text>
        </li>
        <li>
          <Text size="3">Addressing attachment issues</Text>
        </li>
      </ul>
      <br />

      <Heading mb="4" mt="4" size="5">
        Behavioural support
      </Heading>
      <Text size="3" as="p">
        Assist in managing specific behaviours, including:
      </Text>
      <br />
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <Text size="3">Reducing challenging behaviours</Text>
        </li>
        <li>
          <Text size="3">Improving focus and attention</Text>
        </li>
        <li>
          <Text size="3">Encouraging positive behavioural change</Text>
        </li>
      </ul>
      <br />

      <Heading mb="4" mt="4" size="5">
        Cognitive development support
      </Heading>
      <Text size="3" as="p">
        Aid in:
      </Text>
      <br />
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <Text size="3">
            Executive functioning skills (e.g., organisation, time management)
          </Text>
        </li>
        <li>
          <Text size="3">Memory and attention strategies</Text>
        </li>
      </ul>
      <br />
    </div>
  );
};

export default SchoolsAndEducation;
