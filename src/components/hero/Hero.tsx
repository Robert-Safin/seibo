'use client'
import { useEffect, useState } from "react";
import SmallHero from "./SmallHero";
import LargeHero from "./LargeHero";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return <>{isMobile ? <SmallHero /> : <LargeHero />}</>;
};

export default Hero;
