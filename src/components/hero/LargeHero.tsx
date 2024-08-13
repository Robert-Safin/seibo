const LargeHero = () => {

  return (
    <>
      <div className="max-w-[1920px] mx-auto x-pad">
        <div className="flex flex-col space-y-3 pt-[120px]">
          <video
            autoPlay
            muted
            loop
            width={1000}
            height={1000}
            className="h-[20vh] object-cover w-full"
          >
            <source src="/assets/hero/purple2.mp4" type="video/mp4" />
          </video>
          <div className="flex space-x-3">
            <video
              autoPlay
              muted
              loop
              width={1000}
              height={1000}
              className="h-[20vh] object-cover w-2/3"
            >
              <source src="/assets/hero/white2.mp4" type="video/mp4" />
            </video>
            <video
              autoPlay
              muted
              loop
              width={1000}
              height={1000}
              className="h-[20vh] object-cover w-1/3"
            >
              <source src="/assets/hero/green2.mp4" type="video/mp4" />
            </video>
          </div>
          <video
            autoPlay
            muted
            loop
            width={1000}
            height={1000}
            className="h-[20vh] object-cover w-full"
          >
            <source src="/assets/hero/red2.mp4" type="video/mp4" />
          </video>
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
              width={1000}
              height={1000}
              className="h-[224px] object-cover w-full"
            >
              <source src="/assets/hero/orange2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default LargeHero;
