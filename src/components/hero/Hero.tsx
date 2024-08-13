import LargeHero from "./LargeHero";
import SmallHero from "./SmallHero";

const Hero = () => {
  return (
    <>
      <div className="md:hidden">
        <SmallHero />
      </div>
      {/* <div className="hidden md:block">
        <LargeHero />
      </div> */}
    </>
  );
};

export default Hero;
