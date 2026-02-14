import AboutMe from "../Components/about/Aboutme"
import Header from "../Components/common/Header"
import Footer from "../Components/common/Footer"

export default function AboutPage() {
  return(
    <div>
      <div className="min-h-screen py-6 px-50 bg-gradient-custom ">
        <Header/>
        <div className="flex items-center justify-center">
          <AboutMe/>
        </div>
      </div>
      <div className="py-6 px-20 m">
        <Footer/>
      </div>
    </div>
  )
}