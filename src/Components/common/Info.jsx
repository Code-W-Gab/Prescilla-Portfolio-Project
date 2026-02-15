import { Dot } from 'lucide-react'
import girl from '../../assets/cute-girl-employee.png';
import { Link } from 'react-router-dom';

export default function Info() {
  return(
    <div className='flex items-center '>
      <div className='w-200'>
        <div className='inline-block'>
          <div className='flex items-center justify-center pr-6 bg-[#c89757] rounded-4xl'>
            <Dot className='text-[#9b4819] size-8' />
            <span className='text-white text-xs serif'>Available for new projects</span>
          </div>
        </div>
        <h1 className='playfair font-bold text-6xl mt-3 mb-2 text-[#153828]'>Prescilla Samorin</h1>
        <p className='serif text-[#314028] text-2xl mb-5'>Virtual Assistant</p>
        <p className='serif text-md text-[#314028] w-80'>Helping entrepreneurs reclaim their time so they can focus on what truly matters.</p>
        <div className='mt-10 flex items-center gap-6'>
          <Link to={"/Service"} className='bg-[#c89757] text-white px-8 py-2 border rounded-4xl text-md serif hover:bg-[#314028]'>
            View Services
          </Link>
          <Link to={"/Contact"} className='text-[#c89757] cursor border px-8 py-2 rounded-4xl text-md serif hover:text-[#314028] '>
            Get in Touch
          </Link>
        </div>
      </div>

      <div>
        <img src={girl} alt="Logo" className="size-110" />
      </div>
    </div>
  )
}