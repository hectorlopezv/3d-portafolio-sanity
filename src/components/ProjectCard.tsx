import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: any) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        tiltMaxAngleX={40}
        tiltMaxAngleY={40}
        perspective={800}
        transitionSpeed={1500}
        scale={1.1}
        gyroscope={true}
      >
        <div className="relative w-full h-[230px]">
          <Image
            src={""}
            alt={""}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-center m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image src="" alt="" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
          <div className="absolute inset-0 flex justify-center m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image src="" alt="" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag: any) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};
export default ProjectCard;
