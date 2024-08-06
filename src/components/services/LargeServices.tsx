const LargeServices = () => {
  return (
    <div className="pt-[192px] pb-[216px] x-pad max-w-[1920px] mx-auto">
      <p className="space-x-[20px]">
        <span className="D1-Fashion-L text-theme-white">Our</span>
        <span className="D1-L text-theme-white">Services</span>
        <span className="text-theme-gray sh2-medium">[OS_04]</span>
      </p>

      <div className="flex w-full justify-start">
        <div className="border-t border-l relative border-white flex flex-col justify-between w-1/3 aspect-height max-h-[907px] group hover:bg-theme-white transition-all duration-700 py-[24px] px-[12px]">
          <h6 className="text-theme-white H0-M group-hover:text-theme-black transition-all duration-700">
            WEBSITE / MOBILE DESIGN
          </h6>
          <p className="absolute top-32 xl:top-40 sh2-regular text-theme-black opacity-0 group-hover:opacity-100 transition-all duration-700">
            READ MORE
          </p>
          <p className="text-theme-white SH0-M group-hover:text-theme-black transition-all duration-700">
            UI Design / UX Design / Interaction Design / Motion Graphics /
            Responsive Design
          </p>
        </div>

        <div className="border relative border-white  flex flex-col justify-between w-1/3 aspect-height max-h-[907px] group hover:bg-theme-white transition-all duration-700 py-[24px] px-[12px]">
          <h6 className="text-theme-white H0-M group-hover:text-theme-black transition-all duration-700">
            FRONT-END DEVELOPMENT
          </h6>
          <p className="absolute top-32 xl:top-40 sh2-regular text-theme-black opacity-0 group-hover:opacity-100 transition-all duration-700">
            READ MORE
          </p>
          <p className="text-theme-white SH0-M group-hover:text-theme-black transition-all duration-700">
            Custom / Animations / Transitions / Responsiveness / SEO / Caching /
            Analytics
          </p>
        </div>
      </div>

      <div className="flex w-full justify-between">
        <div className="border relative border-white  flex flex-col justify-between w-1/3 aspect-height max-h-[907px] group hover:bg-theme-white transition-all duration-700 py-[24px] px-[12px]">
          <h6 className="text-theme-white H0-M group-hover:text-theme-black transition-all duration-700">
            BACK-END DEVELOPMENT
          </h6>
          <p className="absolute top-32 xl:top-40 sh2-regular text-theme-black opacity-0 group-hover:opacity-100 transition-all duration-700">
            READ MORE
          </p>
          <p className="text-theme-white SH0-M group-hover:text-theme-black transition-all duration-700">
            API integration / API Development / Database Integrations /
            Authentication / Authorization / CMS / Storage Systems
          </p>
        </div>

        <div
          className="border relative border-white flex flex-col justify-between w-1/3 aspect-height max-h-[907px] group hover:bg-theme-white transition-all duration-700 py-[24px] px-[12px]
  "
        >
          <h6 className="text-theme-white H0-M group-hover:text-theme-black transition-all duration-700">
            MACHINE LEARNING
          </h6>
          <p className="absolute top-32 xl:top-40 sh2-regular text-theme-black opacity-0 group-hover:opacity-100 transition-all duration-700">
            READ MORE
          </p>
          <p className="text-theme-white SH0-M group-hover:text-theme-black transition-all duration-700">
            Recommendation Systems / Image & Video Recognition / Predictive
            Analytics / NLP /Anomaly Detection
          </p>
        </div>
      </div>
    </div>
  );
};

export default LargeServices;
