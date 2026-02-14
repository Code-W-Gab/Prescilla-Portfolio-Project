import AboutMe from "../Components/about/Aboutme";
import Header from "../Components/common/Header";
import Info from "../Components/common/Info";
import Expertise from "../Components/Services/Expertise";

export default function HomePage() {
  return(
    <div className="py-6 px-50 bg-gradient-custom ">
      <div className="min-h-screen">
        <Header/>
        <Info/>
      </div>
      <div className="min-h-screen flex items-center justify-center">
        <AboutMe/>
      </div>
      <div className="min-h-screen mt-15">
        <Expertise/>
        <div className="text-[#bd8f53] w-full border-b-2 my-20"></div>
      </div>
    </div>
  )
}