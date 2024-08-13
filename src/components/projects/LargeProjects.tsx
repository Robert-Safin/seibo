import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const LargeProjects = () => {
  return (
    <div className="x-pad max-w-[1920px] mx-auto pt-[192px]">
      <p className="pb-[146px]">
        <span className="D1-Fashion-L text-theme-white">Featured </span>
        <span className="D1-L text-theme-white">Projects </span>
        <span className="text-theme-gray sh2-medium">[FP_04]</span>
      </p>
      <div className="grid grid-cols-2 gap-[6px]">
        <Card
          imagePath="/assets/project-cards/quantico.png"
          year="2024"
          title="Quantico"
          bgHex="#CEB267"
          iframeSrc="https://quanticotc.com"
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
      <div className="flex justify-between pt-[36px] lg:pt-[64px]">
        <p className="text-theme-gray sh2-medium">© 2023-2024</p>
        <p className="text-theme-gray sh2-medium">VIEW MORE</p>
      </div>
    </div>
  );
};

export default LargeProjects;

type Props = {
  imagePath: string;
  videoPath: string;
  year: string;
  title: string;
  bgHex: string;
  iframeSrc: string;
};

const Card: FC<Props> = (props) => {
  return (
    <div className="relative w-full h-[50vw] z-0 group max-h-[921px]">
      <Image
        priority
        src={props.imagePath}
        width={1000}
        height={1000}
        alt={props.title}
        className="absolute -z-10 h-full object-cover"
      />
      <div
        className={`absolute z-10 w-[50%] h-[50%] m-auto left-0 right-0 top-0 bottom-0`}
        style={{ backgroundColor: props.bgHex }}
      >
        <Link
          className="flex h-full justify-center items-center"
          href={props.iframeSrc}
          target="_blank"
        >
          <video
            playsInline
            //autoPlay
            loop
            src={props.videoPath}
            muted
            className="object-cover w-[90%] opacity-0 group-hover:opacity-100 transition-all duration-700"
          >
            <source src={props.videoPath} type="video/mp4" />
          </video>
        </Link>
      </div>

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
