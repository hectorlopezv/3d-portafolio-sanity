import { fetcher } from "@/utils/fetcher";
import { styles } from "@/utils/styles";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";
import { close, logo, menu } from "../../public/assets";
import Links from "./Links";

const NavBar = () => {
  const [hambuger, sethambuger] = useState(false);
  const { data, error } = useSWR("/api/navigation", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return null;
  return (
    <nav
      className={`${styles.paddingX} w-full items-center py-5 fixed top-0 z-20 bg-primary flex`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Hector Lopez &nbsp;
            <span className="sm:block hidden">| Full Stack Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          <Links data={data} />
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={hambuger ? close : menu}
            alt="menu"
            className="w-[20px] h-[20px] object-contain cursor-pointer"
            onClick={() => sethambuger((prev) => !prev)}
          />
          <div
            className={`${
              !hambuger ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              <Links
                data={data}
                linkStyles="font-poppins font-medium cursor-pointer text-[14px]"
              />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
