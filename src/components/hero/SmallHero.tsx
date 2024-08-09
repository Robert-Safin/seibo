"use client";

import { useState } from "react";

const SmallHero = () => {
  const [loaded, setLoaded] = useState([false, false, false, false]);
  console.log(loaded);

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
              setLoaded([true, loaded[1], loaded[2], loaded[3]]);
              console.log("loaded 1");
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
              setLoaded([loaded[0], true, loaded[2], loaded[3]]);
              console.log("loaded 2");
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
              setLoaded([loaded[0], loaded[1], true, loaded[3]]);
              console.log("loaded 3");
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
              setLoaded([loaded[0], loaded[1], loaded[2], true]);
              console.log("loaded 4");
            }}
          />
        </div>
      </div>

      {loaded.some((load) => load == false) && (
        <div className="bg-black pt-[130px] x-pad w-screen h-screen absolute top-0 border-white">
          <p className="text-white text-4xl"> LOADING ...</p>
        </div>
      )}
    </>
  );
};

export default SmallHero;
