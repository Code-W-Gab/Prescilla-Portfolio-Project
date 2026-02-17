import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      service_interested: formData.service,
      message: formData.message,
      to_email: 'vaprescillasamorin@gmail.com'
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', service: '', message: '' });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setSubmitStatus('error');
        setIsSubmitting(false);
      });
  };

  return(
    <div className='w-150 max-md:w-90'>
      <h1 className="text-6xl max-md:text-5xl serif text-white text-center mb-15">Contact</h1>
      <div className="bg-white p-8 rounded-lg">
        <div className='flex flex-col items-center text-center'>
          <h3 className='text-3xl max-md:text-2xl sans text-[#9b4819] text-center'>Get In Touch</h3>
          <p className='sans mt-2 max-md:text-sm'>Ready to Reclaim Your Time? Let's discuss how I can help streamline your workflow and boost your productivity.</p>
        </div>
        <div className="text-gray-300 w-full border-b-2 mt-10"></div>
        
        <form onSubmit={handleSubmit} className="mt-10 text-sm max-md:text-xs sans">
          <div className="flex flex-col gap-3">
            <label className="text-gray-600">YOUR NAME:</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="border py-1.5 px-4 rounded-sm"
              required
            />
          </div>

          <div className="flex flex-col gap-3 mt-7">
            <label className="text-gray-600">EMAIL:</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Example@gmail.com"
              className="border py-2 px-4 rounded-sm"
              required
            />
          </div>

          <div className="flex flex-col gap-3 mt-7">
            <label className="text-gray-600">SERVICE INTERESTED IN:</label>
            <select 
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="border py-2 px-2 rounded-sm"
              required
            >
              <option value="">Please Select</option>
              <option value="Admin & Operations">Admin & Operations</option>
              <option value="Data Management">Data Management</option>
              <option value="Recruitment Support">Recruitment Support</option>
              <option value="Lead Generation">Lead Generation</option>
            </select>
          </div>

          <div className="flex flex-col gap-3 mt-7">
            <label className="text-gray-600">TELL ME ABOUT YOUR PROJECT:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="About your project"
              className="border py-2 px-4 rounded-sm h-30"
              required
            />
          </div>

          <div className='flex justify-end'>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="mt-7 bg-[#9b4819] text-white py-3 px-8 max-md:px-4 max-md:py-2 rounded-sm hover:bg-[#7a3614] disabled:bg-gray-400"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>

          {submitStatus === 'success' && (
            <p className="mt-4 text-green-600">Message sent successfully! I'll get back to you soon.</p>
          )}
          {submitStatus === 'error' && (
            <p className="mt-4 text-red-600">Failed to send message. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  )
}