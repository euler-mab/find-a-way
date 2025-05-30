import React from "react";
import { Heading, Text } from "@radix-ui/themes";
import BackButton from "../../components/BackButton";
import PrimaryButton from "@/app/components/PrimaryButton";

const Resource = () => {
  return (
    <div className="max-w-4xl w-full mx-auto min-h-[80vh] py-24 px-4">
      <div className="mb-12">
        <BackButton />
        <Heading mt="4" mb="2" size="8">
          Video Interaction Guidance (VIG)
        </Heading>
        <Heading size="5" weight="light">
          A relational tool for strengthening parent–child connection.
        </Heading>
      </div>

      <Heading mb="4" mt="8" size="5">
        What is VIG?
      </Heading>
      <Text size="3" as="p">
        Video Interaction Guidance (VIG) is a gentle, strengths-based approach
        that supports parents and carers to build more positive, connected
        relationships with their children. It focuses on what is already going
        well in everyday interactions — those small but powerful moments of
        connection — and helps to highlight and build on them.
      </Text>
      <Text size="3" as="p">
        A trained VIG practitioner films short clips of everyday parent–child
        interactions, such as playing, getting ready, or sharing a routine
        activity. The practitioner then selects a few clips that show moments of
        attunement, warmth, or responsiveness. These clips are reviewed with the
        parent in a relaxed, supportive session, offering the opportunity to
        reflect on what worked well, how the child responded, and how these
        moments can be built upon.
      </Text>
      <Text size="3" as="p">
        VIG is used across many settings — including children&apos;s centres,
        family support services, health and early years provision — as a way to
        strengthen relationships, boost confidence, and support emotional
        wellbeing. It is a respectful and collaborative approach that helps
        build emotional safety and trust.
      </Text>
      <br />

      <Heading mb="4" mt="8" size="5">
        Who is VIG for?
      </Heading>
      <Text size="3" as="p">
        At Find A Way, VIG is currently offered to parents and carers of young
        children, particularly in the early years. It is well suited to those
        who may benefit from support in building or strengthening their
        connection with their child. VIG can be particularly helpful when:
      </Text>
      <ul className="list-disc pl-6 text-gray-700 text-base mb-4">
        <li>
          The parent–child relationship feels strained, distant or ‘stuck&apos;
        </li>
        <li>
          A parent is feeling unsure, overwhelmed, or emotionally disconnected
        </li>
        <li>
          Communication between parent and child is difficult or easily
          misunderstood
        </li>
        <li>
          A relationship is being rebuilt following separation, family stress or
          safeguarding concerns
        </li>
        <li>
          A child is showing early signs of emotional or behavioural challenges
        </li>
        <li>
          A parent is experiencing difficulty bonding or connecting with their
          child
        </li>
        <li>
          The family is navigating developmental concerns or awaiting assessment
        </li>
        <li>
          There has been involvement from services (e.g. Early Help, social
          care), and relational support is needed
        </li>
      </ul>
      <Text size="3" as="p">
        VIG can be used preventatively or as part of a wider package of support.
        It complements trauma-informed and attachment-focused work and aligns
        well with early intervention approaches.
      </Text>
      <br />

      <Heading mb="4" mt="4" size="5">
        How does VIG work?
      </Heading>
      <Text size="3" as="p">
        VIG typically takes place over three to four cycles, each involving the
        following steps:
      </Text>

      <Heading mb="4" mt="4" size="5">
        1. Initial Meeting
      </Heading>
      <Text size="3" as="p">
        The practitioner meets with the parent or carer to discuss their hopes
        and goals. Together, they agree a helping question to guide the process,
        such as:
      </Text>
      <Text size="3" as="p">
        “What would you like to be happening between you and your child?”
      </Text>
      <Text size="3" as="p">
        This helps to keep the work focused on what matters most to the parent.
      </Text>

      <Heading mb="4" mt="4" size="5">
        2. Video Recording
      </Heading>
      <Text size="3" as="p">
        A short video (around 10–15 minutes) is taken of the parent and child
        during a familiar activity — such as playtime, mealtime, or getting
        ready. The filming takes place in a comfortable, natural setting
        (usually the home or a community space).
      </Text>

      <Heading mb="4" mt="4" size="5">
        3. Shared Review
      </Heading>
      <Text size="3" as="p">
        The practitioner selects a few short clips that show moments of positive
        connection and emotional responsiveness. In a follow-up session, these
        clips are watched and discussed with the parent using gentle, reflective
        questions such as:
      </Text>
      <ul className="list-disc pl-6 text-gray-700 text-base mb-4">
        <li>What did you notice going well?</li>
        <li>How did your child respond to you here?</li>
        <li>What helped that moment work?</li>
      </ul>
      <Text size="3" as="p">
        These reflections help parents recognise their own strengths and
        discover small, achievable steps for deepening connection.
      </Text>
      <br />

      <Heading mb="4" mt="4" size="5">
        What impact can VIG have?
      </Heading>
      <Text size="3" as="p">
        Parents who take part in VIG often report that they:
      </Text>
      <ul className="list-disc pl-6 text-gray-700 text-base mb-4">
        <li>
          Feel more confident and connected in their relationship with their
          child
        </li>
        <li>
          Gain insight into their child&apos;s communication and emotional needs
        </li>
        <li>Notice and celebrate more positive moments day to day</li>
        <li>
          Experience fewer struggles around communication, routines, or
          behaviour
        </li>
        <li>
          Enjoy their time with their child more and feel less overwhelmed
        </li>
      </ul>

      <Text size="3" as="p">
        In the longer term, VIG can support:
      </Text>
      <ul className="list-disc pl-6 text-gray-700 text-base mb-4">
        <li>
          Stronger attachment and emotional security between parent and child
        </li>
        <li>
          Improved emotional regulation and relational repair after stress or
          trauma
        </li>
        <li>
          Enhanced language and communication development in the early years
        </li>
        <li>
          A stronger foundation for school readiness — including confidence,
          attention, and curiosity
        </li>
        <li>
          Increased parental resilience during periods of change or challenge
        </li>
        <li>
          Reduced need for more intensive services through early relational
          support
        </li>
      </ul>

      <Text size="3" as="p">
        Professionals consistently report that VIG creates meaningful shifts in
        family relationships and can be a turning point in wider support plans.
        It is especially effective when used alongside other wraparound
        interventions.
      </Text>
      <br />

      <Heading mb="4" mt="4" size="5">
        Interested in VIG?
      </Heading>
      <Text size="3" as="p">
        Referrals to VIG at Find A Way can be made by professionals working with
        families, including family support workers, health visitors, social
        workers, school staff, and other voluntary or community organisations.
        Families can also self-refer.
      </Text>
      <Text size="3" as="p">
        Informal consultations are available to help determine whether VIG is
        the right fit for a particular family.
      </Text>
      <Text size="3" as="p" mb="8">
        Please contact us to request a referral form, discuss a specific family,
        or find out more about how VIG can complement your work.
      </Text>
      <PrimaryButton href="/#contact-us">Get Involved</PrimaryButton>
      <br />
    </div>
  );
};

export default Resource;
