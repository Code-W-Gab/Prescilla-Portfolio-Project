import me from '../../assets/me.jpg';

export default function AboutMe() {
  return(
    <div className="flex items-center gap-30">
      <div className="w-120">
        <h1 className="serif text-6xl mb-8 text-[#9b4819]">About Me</h1>
        <p>I'm a dedicated virtual assistant with over 10 years of corporate experience in the insurance industry. My passion lies in creating efficient systems that free up your valuable time, allowing you to focus on growing your business and enjoying life.</p>
      </div>
      <img src={me} alt="me" className="w-80 h-110 rounded-xl" />
    </div>  
  )
}