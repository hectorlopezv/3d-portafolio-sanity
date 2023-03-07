import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Techs from "@/components/Techs";
import Works from "@/components/Works";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hector Lopez Portafolio</title>
        <meta name="description" content="hector lopez 3d.js portafolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <About />
        <Experience />
        <Techs />
        <Works />
      </main>
    </>
  );
}
