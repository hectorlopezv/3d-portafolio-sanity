import { staggerContainer } from "@/utils/motion";
import { styles } from "@/utils/styles";
import { motion } from "framer-motion";
const SectionWrapper = (Component: any, idName: any) =>
  function HocWrapper() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        viewport={{ once: true, amount: 0.25 }}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
