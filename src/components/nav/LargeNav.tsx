import Image from "next/image";
import Link from "next/link";

const LargeNav = () => {
  return (
    <>
      <div className="w-screen flex justify-between items-center x-pad pt-[24px]">
        <div className="flex space-x-[24px] min-w-[300px]">
          <Link href="" className="navbar text-theme-gray">
            SERVICES
          </Link>
          <Link href="" className="navbar text-theme-gray">
            PROJECTS
          </Link>
          <Link href="" className="navbar text-theme-gray">
            ABOUT
          </Link>
        </div>
        <Image
          src={"/assets/logo/logo.svg"}
          width={500}
          height={500}
          alt="Seibo Logo"
          className="w-[136px] h-[41.5px]"
        />
        <div className=" min-w-[300px] flex justify-end">
          <button className="bg-theme-white p-1">
            <p className="navbar">CONTACT US</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default LargeNav;
