import { NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import logo from '../../assets/logo.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const linkClasses = ({ isActive }) => 
    `relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:bg-green-400 before:transition-all before:duration-300 hover:text-green-400 ${
      isActive 
        ? 'text-green-400 before:w-full' 
        : 'before:w-0 hover:before:w-full'
    }`

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return(
    <header className="relative flex justify-between items-center px-6 py-1 rounded-4xl bg-white mb-18">
      <div>
        <img src={logo} alt="Logo" className="h-10 w-10" />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 text-xs sans">
        <NavLink className={linkClasses} to="/" end>Home</NavLink>
        <NavLink className={linkClasses} to="/About">About</NavLink>
        <NavLink className={linkClasses} to="/Service">Services</NavLink>
        <NavLink className={linkClasses} to="/Contact">Contacts</NavLink>
      </nav>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-[#153828]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="absolute top-full mt-2 left-0 right-0 bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 text-sm sans md:hidden z-50">
          <NavLink className={linkClasses} to="/" end onClick={handleLinkClick}>Home</NavLink>
          <NavLink className={linkClasses} to="/About" onClick={handleLinkClick}>About</NavLink>
          <NavLink className={linkClasses} to="/Service" onClick={handleLinkClick}>Services</NavLink>
          <NavLink className={linkClasses} to="/Contact" onClick={handleLinkClick}>Contacts</NavLink>
        </nav>
      )}
    </header>
  )
}