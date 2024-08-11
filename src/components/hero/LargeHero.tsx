"use client";

import { useState } from "react";

const LargeHero = () => {
  const [load1, setLoad1] = useState(false);
  const [load2, setLoad2] = useState(false);
  const [load3, setLoad3] = useState(false);
  const [load4, setLoad4] = useState(false);
  return (
    <>
      {load1 === false &&
        load2 === false &&
        load3 === false &&
        load4 === false && (
          <div className="bg-black pt-[130px] x-pad w-screen h-screen  z-50 top-0 border-white fixed">
            <p className="text-white text-4xl"> LOADING ...</p>
          </div>
        )}
      <div className="max-w-[1920px] mx-auto x-pad">
        <div className="flex flex-col space-y-3 pt-[120px]">
          <video
            autoPlay
            muted
            loop
            src={"/assets/hero/purple.mp4"}
            width={1000}
            height={1000}
            className="h-[20vh] object-cover w-full"
            onCanPlayThrough={(e) => {
              setLoad1(true);
            }}
          />
          <div className="flex space-x-3">
            <video
              autoPlay
              muted
              loop
              src={"/assets/hero/white.mp4"}
              width={1000}
              height={1000}
              className="h-[20vh] object-cover w-2/3"
              onCanPlayThrough={(e) => {
                setLoad2(true);
              }}
            />
            <video
              autoPlay
              muted
              loop
              src={"/assets/hero/green.mp4"}
              width={1000}
              height={1000}
              className="h-[20vh] object-cover w-1/3"
              onCanPlayThrough={(e) => {
                setLoad3(true);
              }}
            />
          </div>
          <video
            autoPlay
            muted
            loop
            src={"/assets/hero/red.mp4"}
            width={1000}
            height={1000}
            className="h-[20vh] object-cover w-full"
            onCanPlayThrough={(e) => {
              setLoad4(true);
            }}
          />
          <div className="flex space-x-3">
            <div className="flex flex-col justify-between">
              <h4 className="text-theme-white sh1-regular w-[395px] lg:w-[557px] xl:w-[660px]">
                We specialize in carefully handcrafted custom web services. We
                offer full-stack solutions, whether you need a site for your
                business, want a custom Shopify storefront, want to sell digital
                goods or need an internal business tool.
              </h4>
              <h5 className="text-theme-gray sh2-medium text-right">
                EST. 2024 <br /> CURRENTLY IN: BALI, IDN
              </h5>
            </div>
            <video
              autoPlay
              muted
              loop
              src={"/assets/hero/orange.mp4"}
              width={1000}
              height={1000}
              className="h-[224px] object-cover w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LargeHero;
