import Image from "next/image";
import SmallNav from "./SmallNav";
import LargeNav from "./LargeNav";

const Nav = () => {
  return (
    <>
    <div className="lg:hidden fixed top-0">
      <SmallNav/>
    </div>
    <div className="hidden lg:block fixed top-0">
      <LargeNav/>
    </div>
    </>
  );
};

export default Nav;
