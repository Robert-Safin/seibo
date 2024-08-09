import Image from "next/image";

const Contact = () => {
  return (
    <div
      className="px-[8px]
      pt-[128px] md:pt-[200px] lg:pt-[250px] xl:pt-[440px]
      pb-[64px] md:pb-[105px] lg:pb-[51px] xl:pb-[96px]"
    >
      <p className="p-medium text-theme-gray pl-[25vw] md:pl-[45vw] xl:pl-[50vw] uppercase">
        Ready to start a project?
      </p>

      <div className="md:hidden">
        <h2 className="D1-M text-theme-white my-[26px]">
          Get in
          <span className="D1-Fashion-M text-theme-white">touch</span>
        </h2>
      </div>

      <div className="hidden md:block text-center xl:hidden">
        <h2 className="D0-M  text-theme-white my-[8px]">
          Get in
          <span className="D0-Fashion-M  text-theme-white">touch</span>
        </h2>
      </div>

      <div className="hidden xl:block text-center">
        <h2 className="DO-L text-theme-white my-[8px]">
          Get in
          <span className="DO-fashion  text-theme-white">touch</span>
        </h2>
      </div>

      <div className="flex flex-col pl-[25vw] md:pl-[45vw] xl:pl-[50vw] md:flex-row md:space-x-[82px] lg:space-x-[109px] xl:space-x-[178px]">
        <div className="flex flex-col space-y-[2px]">
          <div className="flex items-center space-x-1">
            <p className="p-regular text-theme-gray">DRIBBLE</p>
            <Image
              src="/assets/contact/arrow.svg"
              width={50}
              height={50}
              alt="arrow"
              className="object-cover w-[22.8px] h-[22.8px]"
            />
          </div>
          <div className="flex items-center space-x-1">
            <p className="p-regular text-theme-gray">BEHANCE</p>
            <Image
              src="/assets/contact/arrow.svg"
              width={50}
              height={50}
              alt="arrow"
              className="object-cover w-[22.8px] h-[22.8px]"
            />
          </div>
          <div className="flex items-center space-x-1">
            <p className="p-regular text-theme-gray">INSTAGRAM</p>
            <Image
              src="/assets/contact/arrow.svg"
              width={50}
              height={50}
              alt="arrow"
              className="object-cover w-[22.8px] h-[22.8px]"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-[8px] pt-[32px] pb-[64px] md:pt-[0px] md:pb-[0px]">
          <div className="flex space-x-1">
            <p className="p-regular text-theme-gray">EMAIL:</p>
            <p className="p-regular text-theme-white">HELLO@SEIBO.COM</p>
          </div>
          <div className="flex space-x-1">
            <p className="p-regular text-theme-gray">WHATSAPP:</p>
            <p className="p-regular text-theme-white">+62 82147492501</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
