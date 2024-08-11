"use client";

import { useState } from "react";

const SmallHero = () => {
  const [load1, setLoad1] = useState(false);
  const [load2, setLoad2] = useState(false);
  const [load3, setLoad3] = useState(false);
  const [load4, setLoad4] = useState(false);

  // console.log("load1", load1);
  // console.log("load2", load2);
  // console.log("load3", load3);
  // console.log("load4", load4);

  return (
    <>
      {load1 === true && load2 === true && load3 === true && load4 === true && (
        <div className="bg-black pt-[130px] x-pad w-screen h-screen fixed z-50 top-0 border-white">
          <p className="text-white text-4xl"> LOADING ...</p>
        </div>
      )}
      <div className="pt-[130px] x-pad">
        <h3
          className="text-theme-white text-center
        font-geist text-[16px] leading-[24px] tracking-[-1.2px]
        w-[286px] mx-auto
        "
        >
          We specialize in carefully handcrafted custom web services.{" "}
        </h3>
        <h4 className="text-theme-gray text-center sh2-medium mt-[48px] mb-[46px]">
          EST. 2024
          <br />
          CURRENTLY IN: BALI, IDN
        </h4>
        <div className="flex flex-col space-y-3">
          <video
            playsInline
            autoPlay
            muted
            loop
            src={"/assets/hero/purple.mp4"}
            width={1000}
            height={1000}
            className="h-[48px] object-cover"
            onLoadedData={(e) => {
              setLoad1(true);
            }}
          />

          <video
            playsInline
            autoPlay
            muted
            loop
            src={"/assets/hero/white.mp4"}
            width={1000}
            height={1000}
            className="h-[117px] object-cover"
            onLoadedData={(e) => {
              setLoad2(true);
            }}
          />
          <video
            playsInline
            autoPlay
            muted
            loop
            src={"/assets/hero/red.mp4"}
            width={1000}
            height={1000}
            className="h-[61px] object-cover"
            onLoadedData={(e) => {
              setLoad3(true);
            }}
          />
          <video
            playsInline
            autoPlay
            muted
            loop
            src={"/assets/hero/orange.mp4"}
            width={1000}
            height={1000}
            className="h-[84px] object-cover"
            onLoadedData={(e) => {
              setLoad4(true);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SmallHero;
