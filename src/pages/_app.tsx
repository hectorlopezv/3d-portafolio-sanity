import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
const poppinns = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps:{ session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <NavBar />
      </div>     
        <Component className={poppinns.className} {...pageProps} />
    </div>
    </SessionProvider>
  );
}

