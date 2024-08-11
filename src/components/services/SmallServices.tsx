const SmallServices = () => {
  return (
    <div className="x-pad pt-[92px] pb-[72px]">
      <div className="md:flex md:items-end mb-[96px] md:space-x-4">
        <h1 className="D1-Fashion-M text-theme-white">Our{" "}</h1>
        <div className="flex items-end space-x-4">
          <h1 className="D1-M text-theme-white">Services</h1>
          <p className="text-theme-gray sh2-medium">[OS_04]</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div
          className="border border-white h-[456px] w-full flex flex-col justify-between
        py-[28px] px-[18px]"
        >
          <h6 className="text-theme-white H0-S">WEBSITE / MOBILE DESIGN</h6>
          <p className="text-theme-white SH0-S">
            UI Design / UX Design / Interaction Design / Motion Graphics /
            Responsive Design
          </p>
        </div>
        <div
          className="border border-white h-[456px] w-full flex flex-col justify-between
        py-[28px] px-[18px]"
        >
          <h6 className="text-theme-white H0-S">FRONT-END DEVELOPMENT</h6>
          <p className="text-theme-white SH0-S">
            Custom / Animations / Transitions / Responsiveness / SEO / Caching /
            Analytics
          </p>
        </div>
        <div
          className="border border-white h-[456px] w-full flex flex-col justify-between
        py-[28px] px-[18px]"
        >
          <h6 className="text-theme-white H0-S">BACK-END DEVELOPMENT</h6>
          <p className="text-theme-white SH0-S">
            API integration / API Development / Database Integrations /
            Authentication / Authorization / CMS / Storage Systems
          </p>
        </div>
        <div
          className="border border-white h-[456px] w-full flex flex-col justify-between
        py-[28px] px-[18px]"
        >
          <h6 className="text-theme-white H0-S">MACHINE LEARNING</h6>
          <p className="text-theme-white SH0-S">
            Recommendation Systems / Image & Video Recognition / Predictive
            Analytics / NLP /Anomaly Detection
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmallServices;
