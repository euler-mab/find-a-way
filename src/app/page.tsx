"use client";

import { Button, Heading, Link, Text } from "@radix-ui/themes";
import Hero from "./components/hero/Hero";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import Image from "next/image";
import PrimaryButton from "./components/PrimaryButton";
import SecondaryButton from "./components/SecondaryButton";

const Home = () => {
  const cards = [
    {
      title: "Video Interactive Guidance (VIG)",
      description:
        "VIG is an evidence-based intervention that uses video feedback to improve communication and relationships between parents or carers and children. By reviewing short video clips of positive interactions, families can reflect on their strengths and develop new ways to enhance their connections.",
      image: "/vig.png",
      alt: "Video Interactive Guidance (VIG) logo",
      link: "/services/video-interactive-guidance",
    },
    {
      title: "Parent Support Groups",
      description:
        "Our Parent Support Groups provide a safe and welcoming space for parents to connect, share experiences, and receive guidance on a range of issues, from parenting challenges to emotional support. These groups foster a sense of community while offering practical advice from our experienced facilitators.",
      image: "/support-group.png",
      alt: "Parent Support Groups",
      link: "/services/parent-support-groups",
    },
    {
      title: "Strength-Based Interventions",
      description:
        "Our strength-based interventions focus on identifying and building upon the unique strengths of each family and individual. This positive approach empowers families to harness their abilities and resources to overcome challenges and promote well-being, rather than focusing solely on areas of need.",
      image: "/strength.png",
      alt: "Video Interactive Guidance (VIG) logo",
      link: "/services/strength-based-interventions",
    },
    {
      title: "One-to-One Consultations",
      description:
        "We offer individual consultations for parents, carers, and families seeking personalised advice and support. These sessions provide an opportunity to discuss specific concerns about your child&apos;s development, emotional well-being, and behaviour. Our consultations are designed to offer problem-solving strategies and expert guidance tailored to your unique situation.",
      image: "/consultations.png",
      alt: "Parent Support Groups",
      link: "/services/one-to-one-consultations",
    },
  ];

  return (
    <main className="scroll-smooth">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-[80vh] px-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/background_crop.jpeg")' }}
      >
        <div className="absolute inset-0 bg-white/40 backdrop-blur-xs"></div>

        <div className="relative max-w-6xl w-full mx-auto px-12 flex justify-center min-h-[70vh]">
          <Hero />
        </div>
      </section>

      {/* Funding Section */}
      <section
        id="about-us"
        className="flex flex-col items-center px-6 py-4"
        style={{ backgroundColor: "#FBF7E8" }}
      >
        <div className="flex flex-col items-center justify-center gap-1">
          <p className="text-md text-gray-600">
            Proudly funded by{" "}
            <span className="font-medium">The National Lottery</span>
          </p>
          <div className="relative h-16 w-32">
            <Image
              src="/national-lottery-logo.png"
              alt="National Lottery"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about-us"
        className="flex px-6 py-24"
        style={{ backgroundColor: "white" }}
      >
        <div className="max-w-6xl w-full mx-auto px-12">
          <div className="mb-12">
            <Heading mb="2" size="8">
              About us
            </Heading>
            <Heading mb="8" size="5" weight="light">
              Learn more about our role in the community
            </Heading>
          </div>

          <Text size="3" as="p">
            At Find A Way, we believe every family should have the support they
            need, when they need it, and be part of a community that&apos;s
            there for them.
          </Text>
          <br />
          <Text mb="4" size="3" as="p">
            We are committed to providing a wide range of interventions for
            families and individuals, including pre-natal support, parent
            support groups, individual consultations, interventions, and
            assessments. Our flexible and dynamic approach ensures that we
            respond to the specific needs of families, carers, and children in
            real-time.We understand the importance of early intervention in
            improving outcomes for families and children. That&apos;s why all
            our interventions are evidence-based and rooted in strength-based
            practice, empowering families by focusing on their inherent
            strengths and resources.
          </Text>
          <br />
          <Heading mb="4" size="5">
            Our approach
          </Heading>
          <Text size="3" as="p">
            Our services are grounded in proven theories and best practice
            models, designed to be adaptable and suitable for those facing
            multiple adversities. Whether families are dealing with trauma,
            attachment issues, or social, emotional, and behavioral challenges,
            our support is tailored to promote positive, lasting outcomes.
          </Text>
          <br />
          <Heading mb="4" size="5">
            Our practitioners
          </Heading>
          <Text size="3" as="p">
            All of our practitioners have specialist knowledge and extensive
            experience working with vulnerable families, including looked-after
            children and those with special educational needs. Our team is
            highly skilled in supporting individuals who have experienced
            trauma, disruptions in attachment, and those with complex social and
            emotional needs.
          </Text>
          <br />
          <Text size="3" as="p">
            We combine our expertise with a compassionate, person-centered
            approach to help families overcome challenges and achieve long-term
            well-being. Contact us today to learn more about how we can support
            your family.
          </Text>
          <br />
          <div className="flex justify-start mt-8">
            <div className="flex flex-row">
              <div className="mr-2">
                <PrimaryButton href="/#contact-us">Get in Touch</PrimaryButton>
              </div>
              <div>
                <SecondaryButton href="/#our-services">
                  Services
                </SecondaryButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="our-services"
        className="flex px-6 py-24"
        style={{ backgroundColor: "#F8F0D1" }}
      >
        <div className="max-w-6xl w-full mx-auto px-12">
          <div className="text-left md:text-right">
            <div className="mb-12">
              <Heading mb="2" size="8">
                Our services
              </Heading>
              <Heading size="5" weight="light">
                What we have to offer
              </Heading>
            </div>

            <Text mb="8" size="3" as="p">
              At Find A Way, we are dedicated to offering a comprehensive range
              of services to support families and individuals. Our services are
              tailored to meet the unique needs of each family, empowering them
              to overcome challenges and thrive. Here&apos;s a brief overview of
              what we offer:
            </Text>
          </div>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
            {cards.map((card, index) => (
              <div
                key={index}
                className="rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col"
                style={{ backgroundColor: "white" }}
              >
                <div className="relative h-[200px] mb-4">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-700 text-base mb-4">
                  {card.description}
                </p>
                {/* <div className="mt-auto flex justify-end">
                  <Button size="3" color="gray" highContrast asChild>
                    <Link href={card.link}>Read more</Link>
                  </Button>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="our-team"
        className="py-24"
        style={{ backgroundColor: "white" }}
      >
        <div className="max-w-6xl w-full mx-auto px-12">
          <div className="mb-20">
            <Heading mb="2" size="8">
              Our team
            </Heading>
            <Heading size="5" weight="light">
              Meet the people behind Find A Way
            </Heading>
          </div>

          <div className="flex flex-col md:flex-row items-start mb-16 gap-8">
            <Image
              src="/sophia.png"
              alt="Sophia"
              width={192} // 48 * 4 (since Tailwind's w-48 is usually 12rem = 192px)
              height={192}
              className="w-48 aspect-square object-cover rounded-full"
            />
            <div>
              <h3 className="text-xl font-semibold">Dr Sophia Bentley</h3>
              <p className="text-gray-500 mb-2">Educational Psycgologist</p>
              <p className="text-gray-700 mb-3">
                I'm Dr Sophia Bentley, Founder and Managing Director of Find A
                Way CIC — a community-led organisation dedicated to supporting
                families with young children. Our aim is simple: to make sure
                every child has the best possible start in life, no matter their
                background or circumstances.
              </p>
              <p className="text-gray-700 mb-3">
                As an Educational and Child Psychologist with over 15 years'
                experience working with local authorities, schools, and
                communities, I've spent my career helping families navigate the
                early years. I understand how confusing and overwhelming it can
                be for parents trying to find the right support. That's why I
                founded Find A Way CIC: to create a space where families can
                access practical help, feel heard, and build the confidence to
                move forward in a way that works for them.
              </p>
              <p className="text-gray-700 mb-3">
                As both a professional and a parent, I know that every family's
                journey is different. My passion is in helping families discover
                their own path, creating opportunities for children to thrive,
                and building stronger, more connected communities where no one
                feels like they're doing it alone.
              </p>

              <div className="mt-8 flex gap-4 text-black">
                <Link
                  href="https://www.facebook.com/share/1HEMMP6LRs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="w-5 h-5 hover:text-gray-700" />
                </Link>
                <Link
                  href="https://www.instagram.com/findaway_psychology"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="w-5 h-5 hover:text-gray-700" />
                </Link>
                <Link
                  href="https://x.com/findawaycic"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="w-5 h-5 hover:text-gray-700" />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-start mb-16 gap-8">
            <Image
              src="/laura.jpeg"
              alt="Laura"
              width={192} // 48 * 4 (since Tailwind's w-48 is usually 12rem = 192px)
              height={192}
              className="w-48 aspect-square object-cover rounded-full"
            />
            <div>
              <h3 className="text-xl font-semibold">Laura Andrews</h3>
              <p className="text-gray-500 mb-2">Social Work Team Manager</p>
              <p className="text-gray-700 mb-3">
                I’m Laura Andrews, Director of Find A Way CIC. With 15 years
                experience working in children’s safeguarding, I have dedicated
                my career to working with children and their families where
                there is a risk of harm and a need for support to ensure
                children live in a safe environment.
              </p>
              <p className="text-gray-700 mb-3">
                As a Social Work Team Manager, I have a strong belief in
                empowering parents and caregivers by equipping them with the
                tools and guidance necessary to support children to reach their
                full potential. I am committed to creating a collaborative and
                restorative environment when working with families to achieve
                the best possible outcome.
              </p>
              <p className="text-gray-700 mb-3">
                Not only do I bring a professional understanding of the
                challenges parents face, but as a mother of two young children
                myself, I have a personal appreciation for the complexities of
                parenting. This blend of professional expertise and my personal
                experience allows me to approach my work with empathy,
                compassion, and a deep commitment to helping families succeed.
              </p>
              <div className="mt-8 flex gap-4 text-black">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="w-5 h-5 hover:text-gray-700" />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="w-5 h-5 hover:text-gray-700" />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="w-5 h-5 hover:text-gray-700" />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start mb-16 gap-8">
            <Image
              src="/hannah.jpeg"
              alt="Hannah"
              width={192} // 48 * 4 (since Tailwind's w-48 is usually 12rem = 192px)
              height={192}
              className="w-48 aspect-square object-cover rounded-full"
            />

            <div>
              <h3 className="text-xl font-semibold">Hannah Flaherty</h3>
              <p className="text-gray-500 mb-2">Civil Servant</p>
              <p className="text-gray-700 mb-3">
                I&#39;m Hannah Flaherty Moftakhar, a Civil Servant working on
                Major Rail Projects where I lead on engagement and strategy. I
                have over 15 years experience managing relationships and am
                responsible for building and maintaining connections with key
                stakeholders, understanding their needs and concerns, and
                actively engaging with them through a project.
              </p>
              <p className="text-gray-700 mb-3">
                I passionately believe in the power of community, which can help
                parents to be more resilient when faced with challenges,
                especially in the early years of parenting. I hope that by being
                part of Find A Way I can use my project delivery skills to help
                parents to develop strong, long-lasting relationships with their
                children.
              </p>
              <p className="text-gray-700 mb-3">
                Outside of work I am a busy mum of twin toddlers, a keen foodie
                (cooking and eating) and a novice runner.
              </p>
              <div className="mt-8 flex gap-4 text-black">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="w-5 h-5 hover:text-gray-700" />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="w-5 h-5 hover:text-gray-700" />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="w-5 h-5 hover:text-gray-700" />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-start gap-8">
            <Image
              src="/louise.jpeg"
              alt="Louise"
              width={192} // 48 * 4 (since Tailwind's w-48 is usually 12rem = 192px)
              height={192}
              className="w-48 aspect-square object-cover rounded-full"
            />
            <div>
              <h3 className="text-xl font-semibold">Louise Hilder</h3>
              <p className="text-gray-500 mb-2">Delivery Manager</p>
              <p className="text-gray-700 mb-3">
                Louise Carter is a passionate and dedicated Delivery Manager for
                a leading Financial Services firm, where she works across the
                Development and Data teams to manage products through their
                lifecycle and ensures successful delivery to the business. With
                a solid background in project management, Louise has a wealth of
                experience delivering key business projects.
              </p>
              <p className="text-gray-700 mb-3">
                Outside of her professional career, Louise is a committed
                advocate for postnatal care and believes in equal access to
                services and education, regardless of location or financial
                status. As Chair of the Parent Teacher Association (PTA) at her
                children&#39;s primary school, she works closely with both the
                school and parents to raise funds that enhance the
                children&#39;s school experience.
              </p>
              <p className="text-gray-700 mb-3">
                A proud mother of two beautiful boys, Louise is keen to get
                involved in supporting others during the early years. Having
                joined NCT during her first pregnancy, the network and support
                she received during the postnatal period were invaluable, and
                she is passionate about ensuring all families have access to
                social and professional support.
              </p>
              <div className="mt-8 flex gap-4 text-black">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="w-5 h-5 hover:text-gray-700" />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="w-5 h-5 hover:text-gray-700" />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="w-5 h-5 hover:text-gray-700" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Section */}
      <section
        id="about-us"
        className="flex px-6 py-24"
        style={{ background: "#FBF7E8" }}
      >
        <div className="max-w-6xl w-full mx-auto px-12">
          <div className="flex flex-col-reverse md:flex-row">
            <div className="flex-1 mt-12 md:mt-0 md:mr-24">
              <div className="relative min-h-[200px]">
                <Image
                  src="/national-lottery-logo.png"
                  alt="National Lottery"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-gray-600 text-center mt-4">
                Proudly funded by{" "}
                <span className="font-medium">The National Lottery</span>
              </p>
            </div>
            <div className="flex-1 text-left md:text-right">
              <div className="mb-12">
                <Heading mb="2" size="8">
                  Funding
                </Heading>
                <Heading size="5" weight="light">
                  We are a Community Interest Company (CIC)
                </Heading>
              </div>
              <Text size="3" as="p">
                Find A Way operates under a not-for-profit model as a CIC
                (company no.{" "}
                <Link
                  href="https://find-and-update.company-information.service.gov.uk/company/15992869"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  15992869
                </Link>
                ). We are funded partially by grants and partially by our
                private practice. We are proud to have received our first grant
                in 2025 from the National Lottery. If you would like to help
                with funding, volunteer your time or resources, or otherwise get
                involved and help our cause, please contact us.
              </Text>
              <br />
              <div className="flex justify-start md:justify-end mt-8">
                <div className="flex flex-row">
                  <div className="mr-2">
                    <PrimaryButton href="/#contact-us">
                      Get Involved
                    </PrimaryButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <form
        action="https://usebasin.com/f/e642cdee668f"
        method="POST"
        encType="multipart/form-data"
        id="form"
      >
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" required />
        <label htmlFor="message">Message</label>
        <textarea name="message"></textarea>
        <label htmlFor="checkbox1">Checkbox</label>
        <input type="checkbox" name="checkbox1" />
        <label htmlFor="checkbox2">Checkbox</label>
        <input type="checkbox" name="checkbox2" />
        <label htmlFor="radio1">Radio1</label>
        <input id="radio1" type="radio" name="radio" value="radio1" checked />
        <label htmlFor="radio2">Radio2</label>
        <input id="radio2" type="radio" name="radio" value="radio2" />
        <label htmlFor="file-upload">File Upload</label>
        <input type="file" name="file-upload" />
        <button type="submit">Send</button>
      </form> */}

      {/* <section
        id="contact-us"
        className="flex px-6 py-24"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div className="max-w-4xl w-full mx-auto ">
          <div className="mb-12">
            <Heading mb="2" size="8">
              Contact us
            </Heading>
            <Heading size="5" weight="light">
              Thank you for messaging us, we will be in touch shortly!
            </Heading>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section
        id="contact-us"
        className="flex px-6 py-24"
        style={{ backgroundColor: "#F8F0D1" }}
      >
        <div className="max-w-6xl w-full mx-auto px-12">
          <div className="mb-12">
            <Heading mb="2" size="8">
              Contact us
            </Heading>
            <Heading size="5" weight="light">
              Thank you for visiting our site, let&apos;s keep in touch!
            </Heading>
          </div>
          <Text mb="8" size="3" as="p">
            If you have any questions or would like to learn more about how we
            can support you and your family or a family you would like to refer,
            please don&apos;t hesitate to get in touch. Drop us an email at{" "}
            <a
              href="mailto:hello@findaway.org"
              className="text-blue-600 hover:underline"
            >
              hello@findaway.org
            </a>{" "}
            or use the contact form below. We are here to listen, provide
            guidance, and work together to find the best solutions for your
            needs. Feel free to contact us in confidence, and without any
            obligation.
          </Text>
          <br />

          <form
            className="max-w"
            action="https://usebasin.com/f/e6fae10f0547"
            method="POST"
          >
            <div className="mb-5">
              <label htmlFor="first-name" className="block mb-2">
                <Text size="3" as="p">
                  Name
                </Text>
              </label>
              <input
                name="name"
                type="text"
                id="first-name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your name"
              ></input>
            </div>
            <div className="mb-5">
              <label htmlFor="first-name" className="block mb-2">
                <Text size="3" as="p">
                  Email
                </Text>
              </label>
              <input
                name="email"
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@email.com"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="first-name" className="block mb-2">
                <Text size="3" as="p">
                  Subject
                </Text>
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your name"
              ></input>
            </div>
            <div className="mb-12">
              <label htmlFor="first-name" className="block mb-2">
                <Text size="3" as="p">
                  Message
                </Text>
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your message..."
              ></textarea>

              <Text mt="2" size="2" as="p">
                We’ll never share your details. Read our{" "}
                <a
                  href="/privacy-policy"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Privacy Policy.
                </a>
              </Text>
            </div>

            <PrimaryButton href="/#contact-us">
              <button type="submit">Submit</button>
            </PrimaryButton>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Home;
