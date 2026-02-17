import AboutMe from "../Components/about/AboutMe";
import Footer from "../Components/common/Footer";
import Header from "../Components/common/Header";
import Info from "../Components/common/Info";
import Form from "../Components/Contact/Form";
import Expertise from "../Components/Services/Expertise";
import TechStack from "../Components/Services/TechStack";

export default function HomePage() {
  return(
    <div>
      <div className="bg-gradient-custom px-40 max-lg:px-10 pt-6 pb-40 max-lg:pb-20 max-xl:px-20">
        <Header/>
        <Info/>
      </div>
      <div className="flex items-center justify-center bg-gradient-custom py-40 max-lg:py-20">
        <AboutMe/>
      </div>
      <div className="bg-gradient-custom px-40 max-lg:px-10 max-xl:px-20 py-50 max-xl:py-20">
        <Expertise/>
        <div className="text-[#bd8f53] w-full border-b-2 my-20"></div>
        <TechStack/>
      </div>
      <div className="bg-[#153828] py-20 max-lg:px-10 max-xl:px-20 flex items-center justify-center">
        <Form/>
      </div>
      <div className="py-6 px-10 lg:px-20 xl:flex xl:justify-center bg-white">
        <Footer/>
      </div>
    </div>
  )
}