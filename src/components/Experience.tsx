import SectionWrapper from "@/hoc/SectionWrapper";
import { fetcher } from "@/utils/fetcher";
import { textVariant } from "@/utils/motion";
import { styles } from "@/utils/styles";
import { motion } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import useSWR from "swr";
import ExperienceCard from "./ExperienceCard";
const Experience = () => {
  const { data: experiences = [], error } = useSWR(
    `https://gspu7iun.api.sanity.io/v1/data/query/production?query=*[_type=="experiences"]`,
    fetcher
  );
  if (error) return <div>Failed to load</div>;
  if (Array.isArray(experiences)) return null;
  return (
    <section>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences?.result?.map((experience: any, index: any) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};
export default SectionWrapper(Experience, "work");
