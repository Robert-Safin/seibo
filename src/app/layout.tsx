import type { Metadata } from "next";
import { EB_Garamond, Space_Grotesk } from "next/font/google";
import "./globals.css";
import './typography.css';
import { FC } from "react";
import { GeistSans } from "geist/font/sans";
import Nav from "@/components/nav/Nav";

const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--eb-garamond",
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
    <html lang="en">
      <body
        className={`
        ${eb_garamond.variable}
        ${space_grotesk.variable}
        ${GeistSans.variable}
        `}
      >
        <Nav/>
        {props.children}
      </body>
    </html>
  );
};

export default RootLayout;
