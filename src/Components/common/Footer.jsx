import calendar from '../../assets/calendar.png'
import gmail from '../../assets/gmail.png'
import global from '../../assets/earth.png'
import rapid from '../../assets/rapid.png'
import linkedIn from '../../assets/linkedin.png'
import { Link } from 'react-router-dom'

export default function Footer() {
  return(
    <footer className='flex gap-10 '>
      <div className='ml-10'>
        <h3 className='text-lg font-semibold'>GET STARTED</h3>
        <h1 className='text-3xl font-bold sans'>Let's Work Together</h1>
        <p className='text-md w-90'>Ready to reclaim your time and focus on what matters most? Let's chat about how I can support your business goals.</p>
      </div>
      <div className='grid grid-cols-2 items-center sans'>
        <div className='flex items-center gap-3'>
          <img src={calendar} alt="Logo" className="h-10 w-10" />
          <div>
            <p>Calendly</p>
            <Link to={"https://calendly.com/vaprescillasamorin/work-with-me"}>
              <p className='underline sans font-semibold hover:text-blue-500'>Book a call</p>
            </Link>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <img src={gmail} alt="Logo" className="h-10 w-10" />
          <div>
            <p>Email</p>
            <Link to={"mailto:vaprescillasamorin@gmail.com"} className='underline sans font-semibold hover:text-blue-500'>
              vaprescillasamorin@gmail.com
            </Link>
          </div>
        </div>

        <div className='flex items-center gap-3 mt-5'>
          <img src={rapid} alt="Logo" className="h-10 w-10" />
          <div>
            <p>Response Time</p>
            <p className='sans font-semibold'>Within 24 Hours</p>
          </div>
        </div>

        <div className='flex items-center gap-3 mt-5'>
          <img src={global} alt="Logo" className="h-10 w-10" />
          <div>
            <p>Availability</p>
            <p className='sans font-semibold'>Worldwide Remote</p>
          </div>
        </div>
      </div>

      <div className="border-r-2 h-35"></div>

      <div>
        <h1 className='text-xs font-bold '>VISIT MY SOCIALS:</h1>
        <Link to={"http://linkedin.com/in/preism"}>
          <img src={linkedIn} alt="Logo" className="size-8 mt-2" />
        </Link>
      </div>
    </footer>
  )
}