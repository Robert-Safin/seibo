import Image from "next/image";

const SmallNav = () => {
  return (
    <>
      <nav className="flex w-screen justify-between x-pad pt-[16px]">
        <Image
          src={"/assets/logo/logo.svg"}
          width={500}
          height={500}
          alt="Seibo Logo"
          className="w-[92px] h-[25px]
                md:w-[120px] md:h-[37px]
                lg:w-[136px] lg:h-[41.5wpx]"
        />
        <button className="bg-theme-white">
          <p className="navbar p-1">MENU</p>
        </button>
      </nav>
    </>
  );
};

export default SmallNav;
