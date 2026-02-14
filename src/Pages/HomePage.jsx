import AboutMe from "../Components/about/Aboutme";
import Footer from "../Components/common/Footer";
import Header from "../Components/common/Header";
import Info from "../Components/common/Info";
import Form from "../Components/Contact/Form";
import Expertise from "../Components/Services/Expertise";
import TechStack from "../Components/Services/TechStack";
import Testimonials from "../Components/Services/Testimonials";

export default function HomePage() {
  return(
    <div>
      <div className="pt-6 pb-30 px-50 bg-gradient-custom ">
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
          <TechStack/>
        </div>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-[#314028]">
        <div className="py-6 px-60">
          <Testimonials/>
        </div>
      </div>
      <div className="bg-[#153828] pt-6 pb-20 px-110">
        <Form/>
      </div>
      <div className="py-6 px-20 m">
        <Footer/>
      </div>
    </div>
  )
}