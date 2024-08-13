import Image from "next/image";

const SmallHero = () => {
  return (
    <>
      <div className="pt-[100px] x-pad">
        <h3
          className="text-theme-white text-center
        font-geist text-[16px] leading-[24px] tracking-[-1.2px]
        w-[286px] mx-auto"
        >
          We specialize in carefully handcrafted custom web services.{" "}
        </h3>
        <h4 className="text-theme-gray text-center sh2-medium mt-[48px] mb-[46px]">
          EST. 2024
          <br />
          CURRENTLY IN: BALI, IDN
        </h4>
        <div className="flex flex-col space-y-3">
          <div className="w-full h-[48px] relative">
            <Image
              priority
              src="/assets/hero/purple-f.png"
              width={500}
              height={500}
              alt="fallback"
              className="w-full h-full absolute top-0 -z-10 object-cover"
            />
            <video
              playsInline
              autoPlay
              muted
              loop
              width={500}
              height={500}
              className="h-full object-cover"
            >
              <source src="/assets/hero/purple-c.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="w-full h-[117px] relative">
            <Image
              priority
              src="/assets/hero/white-f.png"
              width={500}
              height={500}
              alt="fallback"
              className="w-full h-full absolute top-0 -z-10 object-cover"
            />
            <video
              playsInline
              autoPlay
              muted
              loop
              width={500}
              height={500}
              className="h-full object-cover"
            >
              <source src="/assets/hero/white-c.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="w-full h-[61px] relative">
            <Image
              priority
              src="/assets/hero/red-f.png"
              width={500}
              height={500}
              alt="fallback"
              className="w-full h-full absolute top-0 -z-10 object-cover"
            />
            <video
              playsInline
              autoPlay
              muted
              loop
              width={500}
              height={500}
              className="h-full object-cover"
            >
              <source src="/assets/hero/red-c.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="w-full h-[84px] relative">
            <Image
              priority
              src="/assets/hero/orange-f.png"
              width={500}
              height={500}
              alt="fallback"
              className="w-full h-full absolute top-0 -z-10 object-cover"
            />
            <video
              playsInline
              autoPlay
              muted
              loop
              width={500}
              height={500}
              className="h-[84px] object-cover"
            >
              <source src="/assets/hero/orange-c.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallHero;
