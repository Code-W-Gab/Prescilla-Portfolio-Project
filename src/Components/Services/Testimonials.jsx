export default function Testimonials() {
  const testimonials = [
    {title: '"Vibrant and encouraging enthusiasm"', text: "Absolutely fulfilling project collaboration. Rio turned all of our ideas into beautiful visual tools -- all while maintaining a vibrant and encouraging enthusiasm.", text1: "Crowd Zero, Shopping Platform"},
    {title: '"A truly inspiring designer"', text: "Rio's grasp of digital art is truly inspiring. You'll surely learn a lot of amazing stuff during the project process with Rio.", text1: "Sari Purdue, Social Media Influencer"},
    {title: '"Add a one-liner testimonial"', text: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.", text1: "Viggo Cimmaron, Online Store Owner"}
  ]

  return(
    <div className="text-white">
      <h1 className="text-white text-4xl text-center mb-30">Client Testimonials</h1>
      <div className="grid text-center grid-cols-3 gap-10 ">
        {testimonials.map((t) => {
          return(
            <div key={t.title} className="flex flex-col">
              <h1 className="font-bold text-xl min-h-[80px] flex items-center justify-center">{t.title}</h1>
              <div className="text-[#bd8f53] w-full border-b-2 my-10"></div>
              <div className="serif flex flex-col gap-10">
                <p>{t.text}</p>
                <p>{t.text1}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}