import hiring from '../../assets/hiring.png'
import notebook from '../../assets/notebook.png'
import working from '../../assets/working.png'
import calendar from '../../assets/calendar.png'
import document from '../../assets/documentation.png'
import mail from '../../assets/email.png'

export default function Expertise() {
  const Expertises = [
    {title: "Calendar Management", text: "Scheduling appointments, managing meetings, sending reminders, and optimizing your daily schedule.", icon: calendar},
    {title: "Email Management", text: "Inbox organization, priority filtering, and professional correspondence handling.", icon: mail},
    {title: "Travel Planning", text: "Booking flights, hotels, creating itineraries, and handling all travel logistics seamlessly.", icon: notebook},
    {title: "Data Entry & Management", text: "Accurate data entry, thorough data validation, and efficient spreadsheet management.", icon: working},
    {title: "Document Preparation", text: "Professional document creation, formatting, and organization for all your needs.", icon: document},
    {title: "Recruitment Support", text: "Job posting management, candidate screening, interview scheduling, and onboarding coordination.", icon: hiring}
  ]
  return(
    <div className='max-md:text-center'>
      <h1 className="text-6xl max-md:text-5xl serif text-[#9b4819] text-center">Expertise</h1>
      <div className='mt-10'>
        <h3 className='text-3xl sans text-[#9b4819] text-center'>What I Do</h3>
        <p className='sans text-center mt-2'>Comprehensive virtual assistance tailored to your unique business needs</p>
      </div>
      <div className='mt-15 grid grid-cols-3 max-md:grid-cols-1 max-xl:grid-cols-2 gap-10'>
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