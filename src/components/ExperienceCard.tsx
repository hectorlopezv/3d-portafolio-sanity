import Image from "next/image";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { meta } from "../assets";
interface IExperienceCard {
  experience: {
    title: string;
    company: string;
    date: string;
    icon: "globant" | "zemoga" | "epam";
    points: string[];
  };
}
const companyIcons = {
  epam: meta,
  zemoga: meta,
  globant: meta,
};
const ExperienceCard = ({ experience }: IExperienceCard) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: "#383E56" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src={companyIcons[experience.icon]}
            alt={experience.company}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
export default ExperienceCard;
