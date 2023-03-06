import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
const Links: FC<{
  data: { title: string; id: string }[];
  linkStyles?: string;
}> = ({ data, linkStyles }) => {
  const router = useRouter();
  const path = router.pathname.replace("/", "");
  return (
    <>
      {data?.map((link: any) => (
        <li key={link?.title}>
          <Link
            href={link?.id}
            className={`${path === link.id ? "text-white" : "text-secondary"}
                hover:text-white text-[18px] font-medium cursor-pointer ${linkStyles}`}
          >
            {link?.title}
          </Link>
        </li>
      ))}
    </>
  );
};
export default Links;
