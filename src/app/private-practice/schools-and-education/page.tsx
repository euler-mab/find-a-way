import BackButton from "@/app/components/BackButton";
import { Heading, Text } from "@radix-ui/themes";

const SchoolsAndEducation = () => {
  return (
    <div className="max-w-4xl w-full mx-auto min-h-[80vh] py-24 px-4">
      <div className="mb-12">
        <BackButton />
        <Heading mt="4" mb="2" size="8">
          Schools and Education
        </Heading>
        <Heading size="5" weight="light">
          Get support in an educational setting
        </Heading>
      </div>

      <Heading mb="4" mt="8" size="5">
        Introduction
      </Heading>
      <Text size="3" as="p">
        We provide comprehensive psychological assessments, advice, support, and
        interventions for individuals, groups, and organizations. Our services
        are tailored to a variety of educational settings, including early years
        provision, primary and secondary schools, alternative provisions, and
        SEN (Special Educational Needs) settings.
      </Text>
      <br />

      <Heading mb="4" mt="4" size="5">
        Psychological assessments and interventions
      </Heading>
      <Text size="3" as="p">
        Our team works directly with schools to support and advise on a wide
        range of educational and developmental issues. We provide services at
        the individual, group, and systemic level, collaborating with pupils,
        teachers, support staff, senior leadership teams, and parents. Our
        psychologists have extensive knowledge of school systems and the broader
        educational landscape, enabling us to offer targeted advice on both
        general teaching practices and special educational needs.
      </Text>
      <br />
      <Text size="3" as="p">
        Our team works directly with schools to support and advise on a wide
        range of educational and developmental issues. We provide services at
        the individual, group, and systemic level, collaborating with pupils,
        teachers, support staff, senior leadership teams, and parents. Our
        psychologists have extensive knowledge of school systems and the broader
        educational landscape, enabling us to offer targeted advice on both
        general teaching practices and special educational needs.
      </Text>
      <br />
      <Text size="3" as="p">
        Examples of our work include:
      </Text>
      <br />
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <Text size="3">Classroom observations and feedback</Text>
        </li>
        <li>
          <Text size="3">Pupil assessments with various report options</Text>
        </li>
        <li>
          <Text size="3">Consultations with school staff</Text>
        </li>
        <li>
          <Text size="3">Training programs for staff development</Text>
        </li>
        <li>
          <Text size="3">
            Policy development in partnership with Senior Leaders
          </Text>
        </li>
        <li>
          <Text size="3">Staff consultation sessions and drop-ins</Text>
        </li>
        <li>
          <Text size="3">Meetings and drop-in sessions with parents</Text>
        </li>
        <li>
          <Text size="3">Participation in multi-agency meetings</Text>
        </li>
        <li>
          <Text size="3">
            Training for parents and support for parent groups
          </Text>
        </li>
      </ul>
      <br />
      <Heading mb="4" mt="4" size="5">
        Systemic support
      </Heading>
      <Text size="3" as="p">
        We also offer systemic support within schools, focusing on policy and
        practice development. Our consultations with teachers, support staff, or
        senior leadership teams help drive positive changes in areas such as
        inclusion, well-being, behavior management (including restorative
        practices), emotional literacy, and special educational needs.
      </Text>
      <br />
      <Text size="3" as="p">
        In addition, we provide tailored support for school staff experiencing
        high levels of stress or anxiety related to their roles. We offer
        supervision for staff working directly with challenging or vulnerable
        pupils, promoting well-being and professional resilience.
      </Text>
      <br />
      <Text size="3" as="p">
        Our goal is to empower schools to create a supportive and inclusive
        environment that fosters learning and emotional growth for all students.
      </Text>
      <br />
      <Text size="3" as="p">
        If you would like more information or wish to discuss your individual
        needs and requirements, please contact us in complete confidence and
        with no obligation. We&apos;re here to help.
      </Text>
      <br />
    </div>
  );
};

export default SchoolsAndEducation;
