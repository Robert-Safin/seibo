import Image from "next/image";
import { FC } from "react";

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
          iframeSrc="https://quanticotc.com"
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
      <div
        className={`absolute z-10 w-[191px] h-[191px] m-auto left-0 right-0 top-0 bottom-0  `}
        style={{ backgroundColor: props.bgHex }}
      >
        <div className="flex h-full justify-center items-center">
          <div className="iframe-container flex">
            <iframe
              src={props.iframeSrc}
              className="object-cover w-[200px] h-[200px] scaled-iframe"
            />
          </div>
        </div>
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
