import Header from "../Components/common/Header";
import Expertise from "../Components/Services/Expertise";
import TechStack from "../Components/Services/TechStack";
import Footer from "../Components/common/Footer";

export default function ServicePage() {
  return(
    <div>
      <div className="min-h-screen pt-6 pb-30 px-50 bg-gradient-custom ">
        <Header/>
        <div className="mt-15">
          <Expertise/>
          <div className="text-[#bd8f53] w-full border-b-2 my-20"></div>
          <TechStack/>
        </div>
      </div>
      <div className="py-6 px-20 m">
        <Footer/>
      </div>
    </div>
  )
}