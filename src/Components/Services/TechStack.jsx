import gmail from '../../assets/gmail.png'
import calendar from '../../assets/calendar.png'
import excel from '../../assets/excel.png'
import management from '../../assets/management.png'
import call from '../../assets/video-call.png'
import conversation from '../../assets/conversation.png'
import linkedin from '../../assets/business.png'
import teamwork from '../../assets/teamwork.png'
import ai from '../../assets/microchip.png'


export default function TechStack() {
  const TechStack = [
    {title: "Gmail & Outlook", text: "Email management & automation", icon: gmail},
    {title: "Google & Outlook Calendar", text: "Calendar scheduling & coordination", icon: calendar},
    {title: "Excel & Google Sheets", text: "Data analysis & reporting", icon: excel},
    {title: "Click Up & Asana", text: "Project management platforms", icon: management},
    {title: "Zoom & Google Meet", text: "Video conferencing solutions", icon: call},
    {title: "Teams & WhatsApp", text: "Communication platforms", icon: conversation},
    {title: "LinkedIn", text: "Professional networking & outreach", icon: linkedin},
    {title: "Apollo", text: "Lead research & outreach", icon: teamwork},
    {title: "ChatGPT & Gemini", text: "AI writing & brainstorming", icon: ai}
  ]
  return(
    <div>
      <h1 className="text-6xl max-md:text-5xl serif text-[#9b4819] text-center">Tech Stack</h1>
      <div className='mt-10'>
        <h3 className='text-3xl sans text-[#9b4819] text-center'>Tools & Software I Use</h3>
        <p className='sans text-center mt-2'>Proficient in industry-leading platforms to deliver exceptional results</p>
      </div>
      <div className='mt-15 grid grid-cols-3 max-md:grid-cols-1 max-xl:grid-cols-2 gap-10'>
        {TechStack.map((stack) => {
          const image = stack.icon
          return(
            <div key={stack.title} className='bg-[#d6b6a3] p-4 rounded-md flex flex-col items-center'>
              <img src={image} alt={stack.title} className="h-10 w-10" />
              <h1 className='font-bold serif text-xl mt-2 mb-3 text-[#314028]'>{stack.title}</h1>
              <p className='text-sm text-center text-[#314028]'>{stack.text}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}