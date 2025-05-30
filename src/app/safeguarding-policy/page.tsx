import React from "react";
import { Heading, Text } from "@radix-ui/themes";
import BackButton from "../components/BackButton";

const SafeguardingPolicy = () => {
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
        Find A Way: Psychological Services CIC engages with vulnerable adults
        through our work with families, as well as through direct support
        including advocacy, emotional wellbeing services, mentoring, and
        inclusive community-based activities. Many of the adults we support may
        be vulnerable due to age, disability, mental health, or other
        circumstances. We are committed to promoting the welfare, dignity, and
        safety of all adults we engage with. Safeguarding is everyone’s
        responsibility, and all staff and volunteers are expected to act
        immediately on any concerns regarding the safety or wellbeing of a
        vulnerable adult.
      </Text>
      <br />

      <Heading mb="4" mt="4" size="5">
        Safeguarding Leads
      </Heading>
      <Text size="3" as="p">
        Designated Safeguarding Officer (DSO):
        <br />
        Name: Dr Sophia Bentley
        <br />
        Email: sophia@findaway.org
      </Text>
      <br />
      <Text size="3" as="p">
        Deputy Safeguarding Officer:
        <br />
        Name: Laura Andrews
        <br />
        Email: Laura@findaway.org
      </Text>
      <br />

      <Heading mb="4" mt="4" size="5">
        Recognising Signs of Abuse
      </Heading>
      <Text size="3" as="p">
        Forms of abuse affecting vulnerable adults may include:
      </Text>
      <ul className="list-disc pl-6 text-gray-700 text-base mb-4">
        <li>Physical abuse</li>
        <li>Emotional or psychological abuse</li>
        <li>Financial or material abuse</li>
        <li>Neglect and acts of omission</li>
        <li>Sexual abuse</li>
        <li>Discriminatory abuse</li>
        <li>Domestic abuse</li>
        <li>Organisational abuse</li>
        <li>Modern slavery</li>
        <li>Self-neglect</li>
      </ul>
      <Text size="3" as="p">
        All staff must complete safeguarding training relevant to working with
        adults.
      </Text>
      <br />

      <Heading mb="4" mt="4" size="5">
        Becoming Aware of a Safeguarding Issue
      </Heading>
      <Text size="3" as="p">
        Concerns may arise through:
      </Text>
      <ul className="list-disc pl-6 text-gray-700 text-base mb-4">
        <li>Changes in behaviour or presentation</li>
        <li>Disclosures</li>
        <li>Observations or conversations</li>
        <li>Third-party information</li>
      </ul>
      <br />

      <Heading mb="4" mt="4" size="5">
        Responding to Concerns
      </Heading>
      <Text size="3" as="p">
        Stage 1:
      </Text>
      <ul className="list-disc pl-6 text-gray-700 text-base mb-4">
        <li>Listen and remain calm.</li>
        <li>Avoid leading questions.</li>
        <li>Reassure the individual they’ve done the right thing.</li>
        <li>Inform them that information must be shared to keep them safe.</li>
        <li>Record details accurately using the safeguarding form.</li>
      </ul>
      <Text size="3" as="p">
        Stage 2:
      </Text>
      <ul className="list-disc pl-6 text-gray-700 text-base mb-4">
        <li>The DSO will assess the concern and, if necessary, refer to:</li>
        <li>Adult Social Care</li>
        <li>Police (if there is immediate risk)</li>
      </ul>
      <Text size="3" as="p">
        Consent will be sought unless the individual lacks capacity or others
        may be at risk.
      </Text>
      <br />

      <Heading mb="4" mt="4" size="5">
        Safe Recruitment
      </Heading>
      <ul className="list-disc pl-6 text-gray-700 text-base mb-4">
        <li>
          All staff and volunteers working with adults undergo DBS checks.
        </li>
        <li>
          A clear recruitment process including interviews, reference checks,
          and safeguarding commitment.
        </li>
        <li>
          Overseas applicants must provide equivalent checks and additional
          references.
        </li>
      </ul>
      <br />

      <Heading mb="4" mt="4" size="5">
        Management and Supervision
      </Heading>
      <ul className="list-disc pl-6 text-gray-700 text-base mb-4">
        <li>
          Regular supervision includes time for discussing safeguarding and
          wellbeing.
        </li>
        <li>
          All safeguarding concerns raised by staff or volunteers must be
          reported and recorded.
        </li>
      </ul>
      <br />

      <Heading mb="4" mt="4" size="5">
        Allegations Against Staff
      </Heading>
      <Text size="3" as="p">
        Allegations will be referred to the Local Authority Safeguarding Adults
        Board (SAB) and the appropriate statutory services.
      </Text>
      <br />

      <Heading mb="4" mt="4" size="5">
        Recording and Confidentiality
      </Heading>
      <ul className="list-disc pl-6 text-gray-700 text-base mb-4">
        <li>Use the safeguarding form to record all concerns.</li>
        <li>All records are kept securely and confidentially.</li>
        <li>
          Adults have the right to confidentiality unless there is risk of
          significant harm.
        </li>
      </ul>
      <br />

      <Heading mb="4" mt="4" size="5">
        Review and Dissemination
      </Heading>
      <ul className="list-disc pl-6 text-gray-700 text-base mb-4">
        <li>
          This policy is reviewed annually and approved by the Management
          Committee.
        </li>
        <li>A copy will be provided to all staff and volunteers.</li>
        <li>It will be displayed on our website.</li>
      </ul>
      <br />
    </div>
  );
};

export default SafeguardingPolicy;
