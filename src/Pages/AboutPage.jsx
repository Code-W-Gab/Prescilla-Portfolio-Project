import AboutMe from "../Components/about/Aboutme"
import Header from "../Components/common/Header"
import Footer from "../Components/common/Footer"

export default function AboutPage() {
  return(
    <div>
      <div className="bg-gradient-custom pt-6 pb-20 px-6">
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