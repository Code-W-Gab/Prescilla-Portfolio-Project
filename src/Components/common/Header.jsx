import { NavLink } from "react-router-dom"
import logo from '../../assets/logo.png'

export default function Header() {
  const linkClasses = ({ isActive }) => 
    `relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:bg-green-400 before:transition-all before:duration-300 hover:text-green-400 ${
      isActive 
        ? 'text-green-400 before:w-full' 
        : 'before:w-0 hover:before:w-full'
    }`

  return(
    <header className="flex justify-between items-center px-6 py-1 rounded-4xl bg-white mb-18">
      <div>
        <img src={logo} alt="Logo" className="h-10 w-10" />
      </div>
      <div className="flex gap-6 text-xs sans">
        <NavLink className={linkClasses} to="/" end>Home</NavLink>
        <NavLink className={linkClasses} to="/About">About</NavLink>
        <NavLink className={linkClasses} to="/Service">Services</NavLink>
        <NavLink className={linkClasses} to="/Contact">Contacts</NavLink>
      </div>
    </header>
  )
}