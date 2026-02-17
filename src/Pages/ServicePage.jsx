import Header from "../Components/common/Header";
import Expertise from "../Components/Services/Expertise";
import TechStack from "../Components/Services/TechStack";
import Footer from "../Components/common/Footer";

export default function ServicePage() {
  return(
    <div>
      <div className="bg-gradient-custom px-40 max-lg:px-10 pt-6 pb-40 max-lg:pb-20 max-xl:px-20">
        <div>
          <Header/>
        </div>
        <div className="px-40 max-lg:px-10 max-xl:px-20 py-10 max-xl:py-20">
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