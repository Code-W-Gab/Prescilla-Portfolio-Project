import Footer from "../Components/common/Footer";
import Header from "../Components/common/Header";
import Form from "../Components/Contact/Form";

export default function ContactPage() {
  return(
    <div className="bg-[#153828]">
      <div className="px-40 max-lg:px-10 pt-6  max-xl:px-20">
        <Header/>
      </div>
      <div className="py-10 max-lg:px-10 max-xl:px-20 flex items-center justify-center">
        <Form/>
      </div>
      <div className="py-6 px-10 lg:px-20 xl:flex xl:justify-center bg-white">
        <Footer/>
      </div>
    </div>
  )
}