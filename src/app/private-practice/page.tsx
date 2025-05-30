import { Box, Card, Heading, Table, Text } from "@radix-ui/themes";
import BackButton from "../components/BackButton";

const PrivatePractice = () => {
  return (
    <div className="max-w-4xl w-full mx-auto min-h-[80vh] py-24 px-4">
      <div className="mb-12">
        <BackButton />
        <Heading mt="4" mb="2" size="8">
          å Private Practice
        </Heading>
        <Heading size="5" weight="light">
          Access our private educational psychology practice
        </Heading>
      </div>

      <Heading mb="4" mt="8" size="5">
        Introduction
      </Heading>
      <Text size="3" as="p">
        To help provide additional funding for our free services, Find A Way
        also offers private practice support from a chartered Educational &
        Child Psychologist (EP). We offer psychological assessments, advice,
        support, and interventions for individuals, groups, and organisations.
        Our services extend to early years provision, primary and secondary
        schools, alternative provisions, and special educational needs (SEN)
        settings, ensuring tailored support for diverse educational
        environments.
      </Text>
      <br />
      <Text size="3" as="p">
        To view more information about how we can help in different settings
        please view the dedicated sections here:
      </Text>

      <div className="flex flex-wrap gap-4 w-full mt-4 justify-center md:justify-start">
        <Box className="w-full md:w-[250px]">
          <Card asChild className="w-full h-full">
            <a href="/private-practice/schools-and-education">
              <Text as="div" size="2" weight="bold">
                Schools and education
              </Text>
              <Text as="div" color="gray" size="2">
                Get support in an educational setting
              </Text>
            </a>
          </Card>
        </Box>

        <Box className="w-full md:w-[250px]">
          <Card asChild className="w-full h-full">
            <a href="/private-practice/parents-and-carers">
              <Text as="div" size="2" weight="bold">
                Parents and carers
              </Text>
              <Text as="div" color="gray" size="2">
                Support for parents or carers in a home setting
              </Text>
            </a>
          </Card>
        </Box>

        <Box className="w-full md:w-[250px]">
          <Card asChild className="w-full h-full">
            <a href="/private-practice/child-or-young-person">
              <Text as="div" size="2" weight="bold">
                Child or young person
              </Text>
              <Text as="div" color="gray" size="2">
                Direct work with the individual in any setting
              </Text>
            </a>
          </Card>
        </Box>
      </div>

      <Heading mb="4" mt="8" size="5">
        Fees
      </Heading>
      <Text size="3" as="p">
        At Find A Way CIC, we believe in providing support to all families,
        regardless of their financial situation. To make this possible, a
        portion of the fees collected from our private practice services is
        reinvested into our pro bono work. This allows us to offer free or
        subsidised support to individuals and families facing financial hardship
        or those in need of urgent assistance who might otherwise be unable to
        access vital psychological services.
      </Text>
      <br />
      <Text size="3" as="p">
        By choosing our private practice services, you not only receive expert
        care but also contribute to our mission of ensuring that vulnerable
        families and children have access to the help they need, regardless of
        their circumstances. This model ensures that the positive impact of our
        work extends beyond those who can afford private services, helping us
        reach and support a broader range of people in the community.
      </Text>
      <br />
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Task</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Cost</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.RowHeaderCell>School half day</Table.RowHeaderCell>
            <Table.Cell>£325</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.RowHeaderCell>School full day</Table.RowHeaderCell>
            <Table.Cell>£600</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.RowHeaderCell>Full EP report</Table.RowHeaderCell>
            <Table.Cell>£1000</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.RowHeaderCell>
              EP report for EHCP needs assessment
            </Table.RowHeaderCell>
            <Table.Cell>£1250</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.RowHeaderCell>Bespoke packages</Table.RowHeaderCell>
            <Table.Cell>Price on request</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default PrivatePractice;
