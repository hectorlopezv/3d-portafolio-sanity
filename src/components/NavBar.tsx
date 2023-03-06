import { fetcher } from "@/utils/fetcher";
import { styles } from "@/utils/styles";
import useSWR from "swr";

const NavBar = () => {
  const { data, error } = useSWR("/api/navigation", fetcher);
  console.log("data", data);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <nav
      className={`${styles.paddingX} w-full items-center py-5 fixed top-0 z-20 bg-primary flex`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto"></div>
    </nav>
  );
};
export default NavBar;
