"use client";
import Image from "next/image";

const LargeHero = () => {
  return (
    <>
      <div className="max-w-[1920px] mx-auto x-pad pb-[40px]">
        <div className="flex flex-col space-y-3 pt-[120px]">
          <div className="h-[20vh] w-full relative z-0">
            <Image
              priority
              src="/assets/hero/purple-f.png"
              width={1000}
              height={300}
              alt="fallback"
              className="w-full h-full absolute top-0 -z-10 object-cover"
            />
            <video
              playsInline
              autoPlay
              muted
              loop
              width={1000}
              height={300}
              className="h-[20vh] object-cover w-full z-10"
            >
              <source src="/assets/hero/purple-fmt.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="flex space-x-3">
            <div className="h-[20vh] w-2/3 relative z-0">
              <Image
                priority
                src="/assets/hero/white-f.png"
                width={1000}
                height={300}
                alt="fallback"
                className="w-full h-full absolute top-0 -z-10 object-cover"
              />
              <video
                playsInline
                autoPlay
                muted
                loop
                width={1000}
                height={300}
                className="h-[20vh] object-cover w-full z-10"
              >
                <source src="/assets/hero/white-fmt.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="h-[20vh] w-1/3 relative z-0">
              <Image
                priority
                src="/assets/hero/green-f.png"
                width={1000}
                height={300}
                alt="fallback"
                className="w-full h-full absolute top-0 -z-10 object-cover"
              />
              <video
                playsInline
                autoPlay
                muted
                loop
                width={1000}
                height={300}
                className="h-[20vh] object-cover w-full z-10"
              >
                <source src="/assets/hero/green-fmt.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="h-[20vh] w-full relative z-0">
            <Image
              priority
              src="/assets/hero/red-f.png"
              width={1000}
              height={300}
              alt="fallback"
              className="w-full h-full absolute top-0 -z-10 object-cover"
            />
            <video
              playsInline
              autoPlay
              muted
              loop
              width={1000}
              height={300}
              className="h-[20vh] object-cover w-full z-10"
            >
              <source src="/assets/hero/red-fmt.mp4" type="video/mp4" />
            </video>
          </div>
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
            <div className="h-[224px] w-full relative z-0">
              <Image
                priority
                src="/assets/hero/orange-f.png"
                width={1000}
                height={300}
                alt="fallback"
                className="w-full h-full absolute top-0 -z-10 object-cover"
              />
              <video
                playsInline
                autoPlay
                muted
                loop
                width={1000}
                height={300}
                className="h-[224px] object-cover w-full z-10"
              >
                <source src="/assets/hero/orange-fmt.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LargeHero;
