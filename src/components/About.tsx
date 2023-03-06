import SectionWrapper from "@/hoc/SectionWrapper";
import { fetcher } from "@/utils/fetcher";
import { fadeIn, textVariant } from "@/utils/motion";
import { styles } from "@/utils/styles";
import { motion } from "framer-motion";
import useSWR from "swr";
import ServiceCard from "./ServiceCard";
const About = () => {
  const { data: services, error } = useSWR(
    `https://gspu7iun.api.sanity.io/v1/data/query/production?query=*[_type=="services"]`,
    fetcher
  );
  console.log("services", services);
  if (error) return <div>Failed to load</div>;
  if (!services) return null;
  return (
    <div id="about">
      <motion.div variants={textVariant()}>
        <p>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("down", "spring", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hi there! As a Full Stack Developer with extensive experience in Google
        Cloud Platform (GCP) and Amazon Web Services (AWS), I have a diverse
        skill set that includes both front-end and back-end development. In
        terms of front-end development, I am proficient in HTML, CSS, and
        JavaScript, typescript, React, as well as frameworks such as Next.js, I
        have experience building responsive and scalable user interfaces that
        are both visually appealing and intuitive to use. On the back-end side,
        I am skilled in server-side programming languages such as Node.js,
        Python, as well as frameworks like Express, Flask, and Nest.js. I have
        experience with database management systems like MySQL, MongoDB, and
        PostgreSQL, and have worked with RESTful APIs and microservices
        architectures. In addition to my expertise in front-end and back-end
        development, I have extensive experience working with GCP and AWS. I am
        familiar with a wide range of cloud services, including compute,
        storage, networking, and security. I have worked with services such as
        Google Cloud Functions, Google Kubernetes Engine, AWS Lambda, AWS AWS
        amplify, and AWS EC2, among others. As a Full Stack Developer, I am
        dedicated to producing high-quality code and delivering reliable and
        scalable solutions that meet the needs of my clients. I am always eager
        to learn new technologies and techniques and enjoy collaborating with
        cross-functional teams to deliver innovative solutions.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services?.result?.map((service: any, index: any) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};
export default SectionWrapper(About, "about");
