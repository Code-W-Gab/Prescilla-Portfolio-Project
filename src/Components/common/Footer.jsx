import calendar from '../../assets/calendar.png'
import gmail from '../../assets/gmail.png'
import global from '../../assets/earth.png'
import rapid from '../../assets/rapid.png'
import linkedIn from '../../assets/linkedin.png'
import { Link } from 'react-router-dom'

export default function Footer() {
  return(
    <footer className='flex gap-10 max-xl:flex-col'>
      <div className='max-xl:flex max-xl:flex-col max-xl:items-center'>
        <h3 className='text-lg max-md:text-sm font-semibold'>GET STARTED</h3>
        <h1 className='text-3xl max-md:text-xl font-bold sans'>Let's Work Together</h1>
        <p className='text-md max-md:text-xs max-md:w-85 max-xl:text-center w-90'>Ready to reclaim your time and focus on what matters most? Let's chat about how I can support your business goals.</p>
      </div>
      <div className='grid grid-cols-2 max-xl:grid-cols-1 max-xl:gap-5 items-center sans'>
        <div className='flex items-center gap-3'>
          <img src={calendar} alt="Logo" className="size-10 max-md:size-8" />
          <div className='flex flex-col justify-start max-md:text-sm'>
            <p>Calendly</p>
            <Link to={"https://calendly.com/vaprescillasamorin/work-with-me"}>
              <p className='underline sans font-semibold hover:text-blue-500'>Book a call</p>
            </Link>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <img src={gmail} alt="Logo" className="size-10 max-md:size-8" />
          <div className='flex flex-col justify-start max-md:text-sm'>
            <p>Email</p>
            <Link to={"mailto:vaprescillasamorin@gmail.com"} className='underline sans font-semibold hover:text-blue-500'>
              vaprescillasamorin@gmail.com
            </Link>
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <img src={rapid} alt="Logo" className="size-10 max-md:size-8" />
          <div className='flex flex-col justify-start max-md:text-sm'>
            <p>Response Time</p>
            <p className='sans font-semibold'>Within 24 Hours</p>
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <img src={global} alt="Logo" className="size-10 max-md:size-8" />
          <div className='flex flex-col justify-start max-md:text-sm'>
            <p>Availability</p>
            <p className='sans font-semibold'>Worldwide Remote</p>
          </div>
        </div>
      </div>

      <div className="border-r-2 h-35 max-xl:hidden"></div>
      <div className="border-b-2 xl:hidden"></div>

      <div className='max-xl:flex max-xl:flex-col max-xl:items-center'>
        <h1 className='text-xs font-bold '>VISIT MY SOCIALS:</h1>
        <Link to={"http://linkedin.com/in/preism"}>
          <img src={linkedIn} alt="Logo" className="size-8 mt-2" />
        </Link>
      </div>
    </footer>
  )
}