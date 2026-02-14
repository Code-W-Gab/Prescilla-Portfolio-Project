import hiring from '../../assets/hiring.png'
import notebook from '../../assets/notebook.png'
import working from '../../assets/working.png'
import calendar from '../../assets/calendar.png'
import document from '../../assets/documentation.png'
import mail from '../../assets/email.png'

export default function TechStack() {
  const Expertises = [
    {title: "Gmail & Outlook", text: "Email management & automation", icon: },
    {title: "Google & Outlook Calendar", text: "Calendar scheduling & coordination", icon: },
    {title: "Excel & Google Sheets", text: "Data analysis & reporting", icon: },
    {title: "Click Up & Asana", text: "Project management platforms", icon: },
    {title: "Zoom & Google Meet", text: "Video conferencing solutions", icon: },
    {title: "", text: "", icon: },

  ]
  return(
    <div>
      <h1 className="text-5xl serif text-[#9b4819] text-center">Tech Stack</h1>
      <div className='mt-10'>
        <h3 className='text-3xl sans text-[#9b4819] text-center'>Tools & Software I Use</h3>
        <p className='sans text-center mt-2'>Proficient in industry-leading platforms to deliver exceptional results</p>
      </div>
      <div className='mt-15 grid grid-cols-3 gap-10'>
        {Expertises.map((expertise) => {
          const image = expertise.icon
          return(
            <div key={expertise.title} className='bg-[#d6b6a3] p-4 rounded-md flex flex-col items-center'>
              <img src={image} alt={expertise.title} className="h-10 w-10" />
              <h1 className='font-bold serif text-xl mt-2 mb-3 text-[#314028]'>{expertise.title}</h1>
              <p className='text-sm text-center text-[#314028]'>{expertise.text}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}