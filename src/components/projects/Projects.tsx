import LargeProjects from "./LargeProjects"
import SmallProjects from "./SmallProjects"


const Projects = () => {
  return (
    <>
    <div className="lg:hidden">
      <SmallProjects/>
    </div>
    <div className="hidden lg:block">
      {/* <LargeProjects/> */}
    </div>
    </>
  )
}

export default Projects
