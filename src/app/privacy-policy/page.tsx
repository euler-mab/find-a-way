import React from "react";
import { Heading, Text } from "@radix-ui/themes";
import BackButton from "../components/BackButton";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl w-full mx-auto min-h-[80vh] py-24 px-4">
      <div className="mb-12">
        <BackButton />
        <Heading mt="4" mb="2" size="8">
          Privacy Policy
        </Heading>
        <Heading size="5" weight="light">
          Understand how we use your data.
        </Heading>
      </div>

      <Heading mb="4" mt="8" size="5">
        Introduction
      </Heading>
      <Text size="3" as="p">
        This Privacy Notice explains how Find A Way: Psychological Services CIC
        collects, uses, and protects your personal data when you engage with our
        services. It also outlines your rights under the Data Protection Act
        2018 and the UK General Data Protection Regulation (UK GDPR).
      </Text>
      <Text size="3" as="p">
        For the purposes of these laws, Find A Way: Psychological Services CIC
        is the Data Controller. This means we are responsible for deciding how
        your personal data is used and why it is collected.
      </Text>
      <Text size="3" as="p">
        We are committed to respecting your privacy and handling your data
        fairly, lawfully, and transparently.
      </Text>
      <br />

      <Heading mb="4" mt="4" size="5">
        Who We Are
      </Heading>
      <Text size="3" as="p">
        Find A Way: Psychological Services CIC is a community-based organisation
        that supports families — including children, young people, and
        vulnerable adults — through advocacy, mentoring, inclusive activities,
        and emotional wellbeing services.
      </Text>
      <Text size="3" mt="4" as="p">
        Registered Office: 82 James Carter Road, IP28 7DE
      </Text>
      <Text size="3" as="p">
        Email:{" "}
        <a
          href="mailto:sophia@findaway.org"
          className="text-blue-600 hover:underline"
        >
          sophia@findaway.org
        </a>
      </Text>
      <Text size="3" as="p">
        Company Number: 15992869
      </Text>
      <br />

      <Heading mb="4" mt="4" size="5">
        Purpose of this Notice
      </Heading>
      <Text size="3" as="p">
        The purpose of this Privacy Notice is to tell you:
      </Text>
      <ul className="list-disc pl-6 text-gray-700 text-base mb-4">
        <li>What personal data we collect about you</li>
        <li>Why we collect it and how we use it</li>
        <li>Who we may share it with</li>
        <li>How we keep it safe</li>
        <li>What your rights are under data protection law</li>
      </ul>
      <br />

      <Heading mb="4" mt="4" size="5">
        What Information We Collect
      </Heading>
      <Text size="3" as="p">
        We may collect the following information depending on your relationship
        with us:
      </Text>
      <ul className="list-disc pl-6 text-gray-700 text-base mb-4">
        <li>Basic contact details — name, phone number, email, address</li>
        <li>Demographic information — date of birth, gender</li>
        <li>Emergency contact details</li>
        <li>
          Relevant personal information — health needs, education/employment
          status, family or support circumstances
        </li>
        <li>
          Safeguarding or risk-related information — where necessary to ensure
          safety
        </li>
        <li>Communication records — notes from sessions, emails, referrals</li>
      </ul>
      <Text size="3" as="p">
        We only collect what is necessary to provide our services safely,
        appropriately, and effectively.
      </Text>
      <br />

      <Heading mb="4" mt="4" size="5">
        How We Use Your Information
      </Heading>
      <Text size="3" as="p">
        We use your data to:
      </Text>
      <ul className="list-disc pl-6 text-gray-700 text-base mb-4">
        <li>Deliver our services and support to you</li>
        <li>Respond to enquiries and referrals</li>
        <li>Maintain accurate records of our work</li>
        <li>Safeguard children, young people, and adults at risk</li>
        <li>Comply with legal, contractual, and funder requirements</li>
        <li>
          Improve our services and monitor impact (using anonymised data for
          reporting)
        </li>
      </ul>
      <br />

      <Heading mb="4" mt="4" size="5">
        Lawful Basis for Processing
      </Heading>
      <Text size="3" as="p">
        We rely on different lawful bases depending on the situation. These
        include:
      </Text>
      <ul className="list-disc pl-6 text-gray-700 text-base mb-4">
        <li>Consent — where you have given clear permission</li>
        <li>
          Legal obligation — where we must comply with the law (e.g.
          safeguarding, data retention)
        </li>
        <li>Vital interests — to protect someone's life or wellbeing</li>
        <li>Public task — where we deliver services in the public interest</li>
        <li>
          Legitimate interests — to run our services effectively (unless these
          are overridden by your rights)
        </li>
      </ul>
      <br />

      <Heading mb="4" mt="4" size="5">
        Who We May Share Your Data With
      </Heading>
      <Text size="3" as="p">
        We never sell your information. We may share your data with:
      </Text>
      <ul className="list-disc pl-6 text-gray-700 text-base mb-4">
        <li>
          Professionals involved in your care or support (e.g. schools, social
          workers, GPs)
        </li>
        <li>
          Statutory agencies (e.g. local authority, police) where there is a
          safeguarding concern
        </li>
        <li>
          Funders or commissioners (only anonymised or with consent, unless
          required otherwise)
        </li>
        <li>Volunteers or staff members — on a need-to-know basis only</li>
      </ul>
      <Text size="3" as="p">
        We will always aim to involve you in decisions about sharing your
        information unless there is a legal or safeguarding reason not to.
      </Text>
      <br />

      <Heading mb="4" mt="4" size="5">
        Data Security and Storage
      </Heading>
      <Text size="3" as="p">
        We take steps to protect your personal data:
      </Text>
      <ul className="list-disc pl-6 text-gray-700 text-base mb-4">
        <li>
          Electronic records are stored on secure, password-protected systems
        </li>
        <li>Paper records (if used) are kept in locked storage</li>
        <li>Access is restricted to those who need it</li>
        <li>
          We train our staff and volunteers in data protection and safeguarding
        </li>
        <li>
          We keep your information only as long as necessary, in line with legal
          requirements and good practice. When no longer needed, your data is
          securely deleted or anonymised.
        </li>
      </ul>
      <br />

      <Heading mb="4" mt="4" size="5">
        Your Rights
      </Heading>
      <Text size="3" as="p">
        Under the UK GDPR, you have the right to:
      </Text>
      <ul className="list-disc pl-6 text-gray-700 text-base mb-4">
        <li>Access the personal data we hold about you</li>
        <li>Request correction of inaccurate or incomplete data</li>
        <li>Request erasure of your data in certain circumstances</li>
        <li>
          Object to processing, or ask us to restrict how we use your data
        </li>
        <li>
          Withdraw consent at any time (if we are using consent as the basis)
        </li>
        <li>
          Complain to the Information Commissioner's Office (ICO) if you are
          unhappy with how your data is handled:
          <br />
          Website:{" "}
          <a
            href="https://ico.org.uk"
            className="text-blue-600 hover:underline"
          >
            https://ico.org.uk
          </a>{" "}
          | Tel: 0303 123 1113
        </li>
      </ul>
      <Text size="3" as="p">
        To exercise your rights or ask questions, please contact:
      </Text>
      <Text size="3" as="p">
        Data Protection Lead — Dr Sophia Bentley — Find A Way: Psychological
        Services CIC
      </Text>
      <Text size="3" as="p">
        Email:{" "}
        <a
          href="mailto:sophia@findaway.org"
          className="text-blue-600 hover:underline"
        >
          sophia@findaway.org
        </a>
      </Text>
      <br />
    </div>
  );
};

export default PrivacyPolicy;
