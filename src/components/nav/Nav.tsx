import Image from "next/image";
import SmallNav from "./SmallNav";
import LargeNav from "./LargeNav";

const Nav = () => {
  return (
    <div className="absolute top-0 z-50">
    <div className="lg:hidden fixed top-0">
      <SmallNav/>
    </div>
    <div className="hidden lg:block fixed top-0">
      <LargeNav/>
    </div>
    </div>
  );
};

export default Nav;
