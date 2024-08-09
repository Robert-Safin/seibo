"use client";

import { useState, useRef } from "react";

const SmallHero = () => {
  const [loaded, setLoaded] = useState(false);
  const loadStatus = useRef([false, false, false, false]);

  const handleLoadedData = (index: number) => {
    console.log("loaded #", index);
    loadStatus.current[index] = true;
    if (loadStatus.current.every((status) => status === true)) {
      setLoaded(true);
      console.log("All videos loaded");
      document.getElementsByClassName("vid")[0].play();
      document.getElementsByClassName("vid")[1].play();
      document.getElementsByClassName("vid")[2].play();
      document.getElementsByClassName("vid")[3].play();
    }
  };

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
            className="h-[48px] object-cover vid"
            onLoadedData={() => handleLoadedData(0)}
          />

          <video
            playsInline
            autoPlay
            muted
            loop
            src={"/assets/hero/white.mp4"}
            width={1000}
            height={1000}
            className="h-[117px] object-cover vid"
            onLoadedData={() => handleLoadedData(1)}
          />
          <video
            playsInline
            autoPlay
            muted
            loop
            src={"/assets/hero/red.mp4"}
            width={1000}
            height={1000}
            className="h-[61px] object-cover vid"
            onLoadedData={() => handleLoadedData(2)}
          />
          <video
            playsInline
            autoPlay
            muted
            loop
            src={"/assets/hero/orange.mp4"}
            width={1000}
            height={1000}
            className="h-[84px] object-cover vid"
            onLoadedData={() => handleLoadedData(3)}
          />
        </div>
      </div>

      {!loaded && (
        <div className="bg-black pt-[130px] x-pad w-screen h-screen absolute top-0 border-white">
          <p className="text-white text-4xl"> LOADING ...</p>
        </div>
      )}
    </>
  );
};

export default SmallHero;
