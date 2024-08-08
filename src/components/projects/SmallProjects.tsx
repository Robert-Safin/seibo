"use client";
import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";
import Iframe from "react-iframe";

const SmallProjects = () => {
  return (
    <div className="x-pad pt-[128px]">
      <div className="md:flex md:items-end pb-[72px] md:space-x-4">
        <h3 className="D1-Fashion-M text-theme-white ">Featured</h3>
        <div className=" flex items-end space-x-2">
          <h3 className="D1-M text-theme-white">Projects</h3>
          <p className="sh2-medium text-theme-gray">[FP_04]</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[6px]">
        <Card
          imagePath="/assets/project-cards/quantico.png"
          year="2024"
          title="Quantico"
          bgHex="#CEB267"
          iframeSrc="https://quanticotc.com/"
        />
        <Card
          imagePath="/assets/project-cards/elysium.png"
          year="2023"
          title="Elysium"
          bgHex="#4A0915"
          iframeSrc="https://elysium-beta.vercel.app/"
        />
        <Card
          imagePath="/assets/project-cards/symbobtic.png"
          year="2023"
          title="Symbobtic"
          bgHex="#000000"
          iframeSrc="https://symbobtic.vercel.app/"
        />
        <Card
          imagePath="/assets/project-cards/gaes.png"
          year="2023"
          title="GAES"
          bgHex="#989898"
          iframeSrc="https://gaes.ae/"
        />
      </div>
      <div className="flex justify-between pt-[36px]">
        <p className="text-theme-gray sh2-medium">© 2023-2024</p>
        <p className="text-theme-gray sh2-medium">VIEW MORE</p>
      </div>
    </div>
  );
};

export default SmallProjects;

type Props = {
  imagePath: string;
  year: string;
  title: string;
  bgHex: string;
  iframeSrc: string;
};

const Card: FC<Props> = (props) => {
  return (
    <div className="relative w-full h-[335px] z-0">
      <Image
        src={props.imagePath}
        width={1000}
        height={1000}
        alt={props.title}
        className="absolute -z-10 w-full h-[335px] object-cover"
      />
      <motion.div
        className={`absolute z-10 w-[191px] h-[191px] m-auto left-0 right-0 top-0 bottom-0`}
        style={{ backgroundColor: props.bgHex }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <div className="flex h-full justify-center items-center">
          <div className="flex w-[154px] h-[96px] relative overflow-hidden">
            <Iframe
              url={props.iframeSrc}
              width="1520px"
              height="960px"
              id=""
              className="scale-[10%] origin-top-left"
              display="block"
              position="absolute"
            />
            {/* <iframe
              src={props.iframeSrc}
              className="object-cover w-[1520px] h-[960px] absolute origin-top-left scale-[10%]"
            ></iframe> */}
          </div>
        </div>
      </motion.div>

      <div className="z-0 py-[18px] px-[12px]">
        <div className="flex w-full justify-between">
          <p className="IT-Medium-S-M text-theme-white uppercase">
            {props.year}
          </p>
          <p className="IT-Medium-S-M text-theme-white uppercase">
            {props.title}
          </p>
        </div>
      </div>
    </div>
  );
};

// .iframe-container {
//   width: 154px; /* Set the desired width */
//   height: 96px; /* Set the desired height */
//   overflow: hidden; /* Hide overflow content */
//   position: relative;
// }

// .scaled-iframe {
//   width: 1440px; /* Original width of the iframe content */
//   height: 1000px; /* Original height of the iframe content */
//   transform: scale(0.105); /* Adjust the scale as needed */
//   transform-origin: 0 0; /* Transform from the top left */
//   position: absolute;
// }
