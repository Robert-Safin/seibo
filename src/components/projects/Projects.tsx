"use client";
import { useEffect, useState } from "react";
import SmallProjects from "./SmallProjects";
import LargeProjects from "./LargeProjects";

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return <>{isMobile ? <SmallProjects /> : <LargeProjects />}</>;
};

export default Projects;
