import SectionWrapper from "@/hoc/SectionWrapper";
import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";
import BallCanvas from "./BallCanvas";
const Techs = () => {
  const { data: techs = [], error } = useSWR(
    `https://gspu7iun.api.sanity.io/v1/data/query/production?query=*[_type=="techs"]`,
    fetcher
  );
  if (error) return <div>Failed to load</div>;
  if (Array.isArray(techs)) return null;
  return (
    <section className="flex flex-row flex-wrap justify-center gap-10">
      {techs?.result?.map((tech: { title: string; icon: any }) => (
        <div className="w-28 h-28" key={tech?.title}>
          <BallCanvas icon={tech?.icon} />
        </div>
      ))}
    </section>
  );
};

export default SectionWrapper(Techs, "techs");
