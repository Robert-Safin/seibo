import type { Metadata } from "next";
import { EB_Garamond, Space_Grotesk } from "next/font/google";
import "./globals.css";
import './typography.css';
import { FC } from "react";
import { GeistSans } from "geist/font/sans";
import Nav from "@/components/nav/Nav";
import { SpeedInsights } from "@vercel/speed-insights/next"

const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--eb-garamond",
  style: "italic"
});
const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--space-grotesk",
});


type Props = {
  children: React.ReactNode;
};

const RootLayout: FC<Props> = (props) => {
  return (
    <html lang="en" className="bg-theme-black">
      <body
        className={`
        ${eb_garamond.variable}
        ${space_grotesk.variable}
        ${GeistSans.variable}
        `}
      >
        <Nav/>
        {props.children}
        <SpeedInsights/>
      </body>
    </html>
  );
};

export default RootLayout;
