import Header from "../Components/common/Header";
import Info from "../Components/common/Info";

export default function HomePage() {
  return(
    <div className="py-6 px-30 bg-gradient-custom min-h-screen h-full">
      <Header/>
      <Info/>
    </div>
  )
}