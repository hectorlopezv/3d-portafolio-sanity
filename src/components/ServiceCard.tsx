import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { mobile, web } from "../../public/assets";
const icons = {
  web,
  mobile,
  cloud: web,
};
const ServiceCard = ({
  title,
  index,
  icon,
}: {
  title: string;
  index: number;
  icon: "web" | "mobile" | "cloud";
}) => {
  const iconImage = icons[icon];
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      tiltMaxAngleX={40}
      tiltMaxAngleY={40}
      perspective={800}
      transitionSpeed={1500}
      scale={1.1}
      gyroscope={true}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <Image
            src={iconImage}
            alt={title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
export default ServiceCard;
