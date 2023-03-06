import { styles } from "@/utils/styles";
import { motion } from "framer-motion";
import Link from "next/link";
import ComputerCanvas from "./ComputerCanvas";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto pt-[60px]">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className="text-[#915EFF]">Hector</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Developer for Full stack web and mobile applications{" "}
            <br className="sm:block hidden" />
            with React, React Native, Node, Express, MongoDB, and more.
          </p>
        </div>
      </div>

      <ComputerCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <Link href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              className="w-3 h-3 rounded-full bg-secondary mb-1"
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </Link>
      </div>
    </section>
  );
};
export default Hero;
