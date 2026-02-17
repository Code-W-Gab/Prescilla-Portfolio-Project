import Header from "../Components/common/Header";
import Expertise from "../Components/Services/Expertise";
import TechStack from "../Components/Services/TechStack";
import Footer from "../Components/common/Footer";

export default function ServicePage() {
  return(
    <div>
      <div className="pt-6 pb-20 px-6 bg-gradient-custom ">
        <div className="">
          <Header/>
        </div>
        <div className="bg-gradient-custom px-40 max-lg:px-10 max-xl:px-20 py-50 max-xl:py-20">
          <Expertise/>
          <div className="text-[#bd8f53] w-full border-b-2 my-20"></div>
          <TechStack/>
        </div>
      </div>
      <div className="py-6 px-10 lg:px-20 xl:flex xl:justify-center bg-white">
        <Footer/>
      </div>
    </div>
  )
}