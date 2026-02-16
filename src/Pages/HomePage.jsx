import AboutMe from "../Components/about/Aboutme";
import Footer from "../Components/common/Footer";
import Header from "../Components/common/Header";
import Info from "../Components/common/Info";
import Form from "../Components/Contact/Form";
import Expertise from "../Components/Services/Expertise";
import TechStack from "../Components/Services/TechStack";

export default function HomePage() {
  return(
    <div>
      <div className="min-h-screen bg-gradient-custom px-40 py-6 ">
        <Header/>
        <Info/>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-custom">
        <AboutMe/>
      </div>
      <div className="min-h-screen bg-gradient-custom px-40 py-6">
        <Expertise/>
        <div className="text-[#bd8f53] w-full border-b-2 my-20"></div>
        <TechStack/>
      </div>
      <div className="bg-[#153828] pt-6 pb-20 flex items-center justify-center">
        <Form/>
      </div>
      <div className="py-6 flex items-center justify-center ">
        <Footer/>
      </div>
    </div>
  )
}