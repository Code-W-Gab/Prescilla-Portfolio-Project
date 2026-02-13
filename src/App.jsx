import { Route, Routes, Navigate } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import AboutPage from "./Pages/AboutPage"
import ServicePage from "./Pages/ServicePage"
import ContactPage from "./Pages/ContactPage"

function App() {
  return(
    <main>
      <Routes>
        <Route>
          <Route path="/" element={<Navigate to='/Home'/>}/>
          <Route path="/Home" element={<HomePage/>}/>
          <Route path="/About" element={<AboutPage/>}/>
          <Route path="/Service" element={<ServicePage/>}/>
          <Route path="/Contact" element={<ContactPage/>}/>
        </Route>
      </Routes>
    </main>
  )
}

export default App
