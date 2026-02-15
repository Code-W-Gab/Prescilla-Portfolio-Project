export default function FormatPage() {
  return(
    <div className="bg-amber-400 p-5">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-5">New Contact Form Submission</h1>
        <p>You have received a new message from your portfolio contact form.</p>
      </div>
      <div className="mt-10 flex flex-col gap-5">
        <div>
          <label>Name:</label>
          <p>Gabriel Concepcion</p>
        </div>
        <div>
          <label>Email:</label>
          <p>Gabriel Concepcion</p>
        </div>
        <div>
          <label>Email:</label>
          <p>Gabriel Concepcion</p>
        </div>
      </div>
      <div className="mt-10">
        <label>Message:</label>
        <p>Gabriel Concepciondsadasdadasdasdasdas</p>
      </div>
    </div>
  )
}