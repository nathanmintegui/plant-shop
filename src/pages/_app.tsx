import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";

import { Unna } from "@next/font/google";

const unna = Unna({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-unna",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`${unna.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
