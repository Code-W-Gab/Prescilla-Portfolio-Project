import { Link } from "react-router-dom"
import logo from '../../assets/logo.png'

export default function Header() {
  return(
    <header className="flex justify-between items-center px-6 py-1 rounded-4xl bg-white mb-18">
      <div>
        <img src={logo} alt="Logo" className="h-10 w-10" />
      </div>
      <div className="flex gap-6 text-xs sans">
        <Link className="hover:text-green-400 cursor relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-green-400 before:transition-all before:duration-300 hover:before:w-full" to="/">Home</Link>
        <Link className="hover:text-green-400 cursor relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-green-400 before:transition-all before:duration-300 hover:before:w-full" to="/About">About</Link>
        <Link className="hover:text-green-400 cursor relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-green-400 before:transition-all before:duration-300 hover:before:w-full" to="/Service">Services</Link>
        <Link className="hover:text-green-400 cursor relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-green-400 before:transition-all before:duration-300 hover:before:w-full" to="/Contact">Contacts</Link>
      </div>
    </header>
  )
}