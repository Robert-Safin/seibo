import Image from "next/image";
import { FC } from "react";

const LargeProjects = () => {
  return (
    <div className="x-pad max-w-[1920px] mx-auto pt-[192px]">
      <p className="space-x-[20px] pb-[146px]">
        <span className="D1-Fashion-L text-theme-white">Featured</span>
        <span className="D1-L text-theme-white">Projects</span>
        <span className="text-theme-gray sh2-medium">[FP_04]</span>
      </p>
      <div className="grid grid-cols-2 gap-[6px]">
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

export default LargeProjects;

type Props = {
  imagePath: string;
  year: string;
  title: string;
  bgHex: string;
  iframeSrc: string;
};

const Card: FC<Props> = (props) => {
  return (
    <div className="relative  z-0 w-full h-[473px] xl:h-[651px]">
      <Image
        src={props.imagePath}
        alt={props.title}
        width={1000}
        height={1000}
        className="absolute top-0 -z-10 object-cover  w-full h-[473px] xl:h-[651px]"
      />
      <div className="flex w-full justify-between py-[24px] px-[18px]">
        <p className="IT-Medium-S-M text-theme-white uppercase">{props.year}</p>
        <p className="IT-Medium-S-M text-theme-white uppercase">
          {props.title}
        </p>
      </div>
    </div>
  );
};
