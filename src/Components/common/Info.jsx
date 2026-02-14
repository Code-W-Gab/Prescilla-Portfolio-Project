import { Dot } from 'lucide-react'
import girl from '../../assets/cute-girl-employee.png';

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
        <div className='mt-10 flex gap-6'>
          <button className='bg-[#c89757] text-white px-8 py-1 rounded-4xl text-md serif'>
            View Services
          </button>
          <button className='text-[#c89757] border px-8 py-2 rounded-4xl text-md serif'>
            Get in Touch
          </button>
        </div>
      </div>

      <div>
        <img src={girl} alt="Logo" className="size-110" />
      </div>
    </div>
  )
}