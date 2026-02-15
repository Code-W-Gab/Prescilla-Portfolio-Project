import Footer from "../Components/common/Footer";
import Header from "../Components/common/Header";
import Form from "../Components/Contact/Form";

export default function ContactPage() {
  return(
    <div>
      <div className="bg-[#153828] py-6 pb-30">
        <div className="px-50">
          <Header/>
        </div>
        <div className="px-110">
          <Form/>
        </div>
      </div>
      <div className="py-6 px-20 m">
        <Footer/>
      </div>
    </div>
  )
}