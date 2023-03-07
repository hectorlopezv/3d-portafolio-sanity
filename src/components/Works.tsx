import SectionWrapper from "@/hoc/SectionWrapper";
import { fetcher } from "@/utils/fetcher";
import { fadeIn, textVariant } from "@/utils/motion";
import { styles } from "@/utils/styles";
import { motion } from "framer-motion";
import useSWR from "swr";
import ProjectCard from "./ProjectCard";
const Works = () => {
  const { data: projects = [], error } = useSWR(
    `https://gspu7iun.api.sanity.io/v1/data/query/production?query=*[_type=="projects"]`,
    fetcher
  );
  if (error) return <div>Failed to load</div>;
  if (Array.isArray(projects)) return null;
  return (
    <section>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("left", "spring", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          As a full-stack developer, I have worked on a range of exciting and
          challenging projects throughout my career. In this section, I would
          like to showcase some of the most significant projects I have worked
          on, including personal projects, freelance work, and team
          collaborations. Each project has given me the opportunity to apply my
          technical expertise, problem-solving skills, and creativity to deliver
          high-quality solutions to complex problems. Through this section, you
          will gain a deeper understanding of my experience as a full-stack
          developer, and see how I approach each project with attention to
          detail and a passion for delivering innovative solutions.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects?.result?.map((project: any, index: number) => (
          <ProjectCard key={project._id} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};
export default SectionWrapper(Works, "works");
