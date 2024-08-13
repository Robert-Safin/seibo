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
          <video
            playsInline
            autoPlay
            muted
            loop
            width={1000}
            height={1000}
            className="h-[48px] object-cover"
          >
            <source src="/assets/hero/purple2.mp4" type="video/mp4" />
          </video>

          <video
            playsInline
            autoPlay
            muted
            loop
            width={1000}
            height={1000}
            className="h-[117px] object-cover"
          >
            <source src="/assets/hero/white2.mp4" type="video/mp4" />
          </video>
          <video
            playsInline
            autoPlay
            muted
            loop
            width={1000}
            height={1000}
            className="h-[61px] object-cover"
          >
            <source src="/assets/hero/red2.mp4" type="video/mp4" />
          </video>
          <video
            playsInline
            autoPlay
            muted
            loop
            width={1000}
            height={1000}
            className="h-[84px] object-cover"
          >
            <source src="/assets/hero/orange2.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default SmallHero;
