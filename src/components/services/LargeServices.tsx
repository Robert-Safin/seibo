"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const LargeServices = () => {
  const [position1, setPosition1] = useState({ x: 0, y: 0 });
  const [position2, setPosition2] = useState({ x: 0, y: 0 });
  const [position3, setPosition3] = useState({ x: 0, y: 0 });
  const [position4, setPosition4] = useState({ x: 0, y: 0 });

  return (
    <div className="pt-[192px] pb-[216px] x-pad max-w-[1920px] mx-auto">
      <p>
        <span className="D1-Fashion-L text-theme-white">Our </span>
        <span className="D1-L text-theme-white">Services </span>
        <span className="text-theme-gray sh2-medium">[OS_04]</span>
      </p>

      <div className="flex w-full justify-start">
        <div
          className="relative overflow-hidden z-0 border-t border-l border-white flex flex-col justify-between w-1/3 aspect-height max-h-[907px] group hover:bg-theme-white transition-all duration-700 py-[24px] px-[12px] cursor-none"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setPosition1({
              x: e.clientX - rect.left,
              y: e.clientY - rect.top,
            });
          }}
        >
          <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-700">
            <motion.div
              className="w-20 h-20 bg-theme-blue absolute -z-10 rounded-full opacity-0 group-hover:opacity-100"
              animate={{
                left: position1.x - 40,
                top: position1.y - 40,
              }}
              transition={{ type: "spring", duration: 0 }}
            />
          </div>
          <h6 className="text-theme-white H0-M group-hover:text-theme-black transition-all duration-700">
            WEBSITE / MOBILE DESIGN
          </h6>
          <p className="absolute top-32 xl:top-40 sh2-regular text-theme-black opacity-0 group-hover:opacity-100 transition-all duration-700">
            READ MORE
          </p>
          <p className="text-theme-white SH0-M group-hover:text-theme-black transition-all duration-700">
            UI Design / UX Design / Interaction Design / Motion Graphics /
            Responsive Design
          </p>
        </div>

        <div
          className="relative overflow-hidden z-0 border border-white flex flex-col justify-between w-1/3 aspect-height max-h-[907px] group hover:bg-theme-white transition-all duration-700 py-[24px] px-[12px] cursor-none"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setPosition2({
              x: e.clientX - rect.left,
              y: e.clientY - rect.top,
            });
          }}
        >
          <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-700">
            <motion.div
              className="w-20 h-20 bg-theme-blue absolute -z-10 rounded-full opacity-0 group-hover:opacity-100"
              animate={{
                left: position2.x - 40,
                top: position2.y - 40,
              }}
              transition={{ type: "spring", duration: 0 }}
            />
          </div>

          <h6 className="text-theme-white H0-M group-hover:text-theme-black transition-all duration-700">
            FRONT-END DEVELOPMENT
          </h6>
          <p className="absolute top-32 xl:top-40 sh2-regular text-theme-black opacity-0 group-hover:opacity-100 transition-all duration-700">
            READ MORE
          </p>
          <p className="text-theme-white SH0-M group-hover:text-theme-black transition-all duration-700">
            Custom / Animations / Transitions / Responsiveness / SEO / Caching /
            Analytics
          </p>
        </div>
      </div>

      <div className="flex w-full justify-between">
        <div
          className="relative overflow-hidden z-0 border border-white flex flex-col justify-between w-1/3 aspect-height max-h-[907px] group hover:bg-theme-white transition-all duration-700 py-[24px] px-[12px] cursor-none"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setPosition3({
              x: e.clientX - rect.left,
              y: e.clientY - rect.top,
            });
          }}
        >
          <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-700">
            <motion.div
              className="w-20 h-20 bg-theme-blue absolute -z-10 rounded-full opacity-0 group-hover:opacity-100"
              animate={{
                left: position3.x - 40,
                top: position3.y - 40,
              }}
              transition={{ type: "spring", duration: 0 }}
            />
          </div>

          <h6 className="text-theme-white H0-M group-hover:text-theme-black transition-all duration-700">
            BACK-END DEVELOPMENT
          </h6>
          <p className="absolute top-32 xl:top-40 sh2-regular text-theme-black opacity-0 group-hover:opacity-100 transition-all duration-700">
            READ MORE
          </p>
          <p className="text-theme-white SH0-M group-hover:text-theme-black transition-all duration-700">
            API integration / API Development / Database Integrations /
            Authentication / Authorization / CMS / Storage Systems
          </p>
        </div>

        <div
          className="relative overflow-hidden z-0 border border-white flex flex-col justify-between w-1/3 aspect-height max-h-[907px] group hover:bg-theme-white transition-all duration-700 py-[24px] px-[12px] cursor-none"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setPosition4({
              x: e.clientX - rect.left,
              y: e.clientY - rect.top,
            });
          }}
        >
          <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-700">
            <motion.div
              className="w-20 h-20 bg-theme-blue absolute -z-10 rounded-full opacity-0 group-hover:opacity-100"
              animate={{
                left: position4.x - 40,
                top: position4.y - 40,
              }}
              transition={{ type: "spring", duration: 0 }}
            />
          </div>

          <h6 className="text-theme-white H0-M group-hover:text-theme-black transition-all duration-700">
            MACHINE LEARNING
          </h6>
          <p className="absolute top-32 xl:top-40 sh2-regular text-theme-black opacity-0 group-hover:opacity-100 transition-all duration-700">
            READ MORE
          </p>
          <p className="text-theme-white SH0-M group-hover:text-theme-black transition-all duration-700">
            Recommendation Systems / Image & Video Recognition / Predictive
            Analytics / NLP /Anomaly Detection
          </p>
        </div>
      </div>
    </div>
  );
};

export default LargeServices;
