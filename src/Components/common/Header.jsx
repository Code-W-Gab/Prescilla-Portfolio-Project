import { Link } from "react-router-dom"
import logo from '../../assets/logo.png'

export default function Header() {
  return(
    <header className="flex justify-between items-center px-6 py-1 rounded-4xl bg-white">
      <div>
        <img src={logo} alt="Logo" className="h-10 w-10" />
      </div>
      <div className="flex gap-6 text-xs text-gray-500">
        <Link className="hover:text-green-400 cursor" to="/">Home</Link>
        <Link className="hover:text-green-400 cursor" to="/About">About</Link>
        <Link className="hover:text-green-400 cursor" to="/Service">Services</Link>
        <Link className="hover:text-green-400 cursor" to="/Contact">Contacts</Link>
      </div>
    </header>
  )
}