"use client";
import Image from "next/image";
import { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
const SmallProjects = () => {
  return (
    <div className="x-pad pt-[128px]">
      <div className="md:flex md:items-end pb-[72px] md:space-x-4">
        <h3 className="D1-Fashion-M text-theme-white ">Featured</h3>
        <div className="flex items-end space-x-4">
          <h3 className="D1-M text-theme-white">Projects </h3>
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
          videoPath="/assets/project-cards/quantico-c.mp4"
        />
        <Card
          imagePath="/assets/project-cards/elysium.png"
          year="2023"
          title="Elysium"
          bgHex="#4A0915"
          iframeSrc="https://elysium-beta.vercel.app/"
          videoPath="/assets/project-cards/elysium-c.mp4"
        />
        <Card
          imagePath="/assets/project-cards/symbobtic.png"
          year="2023"
          title="Symbobtic"
          bgHex="#000000"
          iframeSrc="https://symbobtic.vercel.app/"
          videoPath="/assets/project-cards/symbobtic-c.mp4"
        />
        <Card
          imagePath="/assets/project-cards/gaes.png"
          year="2023"
          title="GAES"
          bgHex="#989898"
          iframeSrc="https://gaes.ae/"
          videoPath="/assets/project-cards/gaes-c.mp4"
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
  videoPath: string;
};

const Card: FC<Props> = (props) => {
  return (
    <div className="relative w-full h-[90vw] z-0 md:w-full md:h-[50vw]">
      <Image
        src={props.imagePath}
        width={300}
        height={300}
        alt={props.title}
        className="absolute -z-10 h-full object-cover w-full"
      />
      <div className="absolute top-0 w-full h-full -z-10 bg-theme-black opacity-25"/>

      <motion.div
        className={`absolute z-10 w-[50%] h-[50%] m-auto left-0 right-0 top-0 bottom-0`}
        style={{ backgroundColor: props.bgHex }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Link
          className="flex h-full justify-center items-center"
          href={props.iframeSrc}
          target="_blank"
        >
          <video
            playsInline
            autoPlay
            loop
            muted
            className="object-cover w-[90%]"
          >
            <source src={props.videoPath} type="video/mp4" />
          </video>
        </Link>
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
