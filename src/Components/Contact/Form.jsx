export default function Form() {
  return(
    <div className="mt-15">
      <h1 className="text-5xl serif text-white text-center mb-15">Contact</h1>
      <div className="bg-white p-8 rounded-lg">
        <div className='flex flex-col items-center text-center'>
          <h3 className='text-3xl sans text-[#9b4819] text-center'>Get In Touch</h3>
          <p className='sans mt-2 w-130'>Ready to Reclaim Your Time? Let's discuss how I can help streamline your workflow and boost your productivity.</p>
        </div>
        <div className="text-gray-300 w-full border-b-2 mt-10"></div>
        <div className="mt-10">
          <div className="flex flex-col gap-3">
            <label>YOUR NAME:</label>
            <input 
              type="text" 
              placeholder="Full Name"
              className="border py-1.5 px-4 rounded-sm"
            />
          </div>

          <div className="flex flex-col gap-3 mt-7">
            <label>EMAIL:</label>
            <input 
              type="email" 
              placeholder="Example@gmail.com"
              className="border py-2 px-4 rounded-sm"
            />
          </div>

          <div className="flex flex-col gap-3 mt-7">
            <label>SERVICE INTERESTED IN:</label>
            <select className="border py-2 px-2 rounded-sm">
              <option value="">Please Select</option>
              <option value="Admin & Operations">Admin & Operations</option>
              <option value="Data Management">Data Management</option>
              <option value="Recruitment Support">Recruitment Support</option>
              <option value="Lead Generation">Lead Generation</option>
            </select>
          </div>

          <div className="flex flex-col gap-3 mt-7">
            <label>TELL ME ABOUT YOUR PROJECT:</label>
            <textarea
              placeholder="About your project"
              className="border py-2 px-4 rounded-sm"
            />
          </div>
        </div>
      </div>
    </div>
  )
}