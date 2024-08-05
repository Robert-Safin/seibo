import LargeServices from "./LargeServices";
import SmallServices from "./SmallServices";


const Services = () => {
  return (
    <>
    <div className="lg:hidden">
      <SmallServices/>
    </div>
    <div className="hidden lg:block">
      <LargeServices/>
    </div>
    </>
  )
}

export default Services;
