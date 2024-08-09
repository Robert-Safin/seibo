"use client";

import { useState } from "react";

const SmallHero = () => {
  const [loaded1, setLoaded1] = useState(false);
  const [loaded2, setLoaded2] = useState(false);
  const [loaded3, setLoaded3] = useState(false);
  const [loaded4, setLoaded4] = useState(false);
  console.log("loaded1", loaded1);
  console.log("loaded2", loaded2);
  console.log("loaded3", loaded3);
  console.log("loaded4", loaded4);

  return (
    <>
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
            onLoadedData={() => {
              setLoaded1(true);
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
            onLoadedData={() => {
              setLoaded2(true);
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
            onLoadedData={() => {
              setLoaded3(true);
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
            onLoadedData={() => {
              setLoaded4(true);
            }}
          />
        </div>
      </div>

      {loaded1 !== true &&
        loaded2 !== true &&
        loaded3 !== true &&
        loaded4 !== true && (
          <div className="bg-black pt-[130px] x-pad w-screen h-screen absolute top-0 border-white">
            <p className="text-white text-4xl"> LOADING ...</p>
          </div>
        )}
    </>
  );
};

export default SmallHero;
