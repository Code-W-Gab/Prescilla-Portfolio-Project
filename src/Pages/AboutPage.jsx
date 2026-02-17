import AboutMe from "../Components/about/Aboutme"
import Header from "../Components/common/Header"
import Footer from "../Components/common/Footer"

export default function AboutPage() {
  return(
    <div>
      <div className="bg-gradient-custom px-40 max-lg:px-10 pt-6 pb-40 max-lg:pb-20 max-xl:px-20">
        <Header/>
        <div className="flex items-center justify-center">
          <AboutMe/>
        </div>
      </div>
      <div className="py-6 px-10 lg:px-20 xl:flex xl:justify-center bg-white">
        <Footer/>
      </div>
    </div>
  )
}