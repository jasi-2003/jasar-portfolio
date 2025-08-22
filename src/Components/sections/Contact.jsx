
import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com'

export const Contact = () => {
  const [formData, setFormDate] = useState({
    name:"",
    email: "",
    message:"",
  })

   const SERVICE_ID = "service_0n4quri"
   const TEMPLATE_ID ="template_x6wjg3j"
   const PUBLIC_KEY ="ZfZRlg-KybRyQ-Ija"

   const handleSubmit = (e) =>{
     e.preventDefault()

     emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then((result) =>{
         alert("Message send!");
         setFormDate({name:"", email:"", message:"",})
     }).catch(() => alert("Oops! Something went wrong. Please try again.."))

   };


  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-pink-400 bg-clip-text text-transparent text-center">
            {" "}
            Get In Touch
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-red-500 focus:bg-red-500/5"
                placeholder="Name..."
                onChange={(e) => setFormDate({...formData, name: e.target.value})}
                />

            </div>

            <div className="relative">
              <input
                type="text"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-red-500 focus:bg-red-500/5"
                placeholder="example@gmail.com"
                onChange={(e) => setFormDate({...formData, email: e.target.value})}
                 />

            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-red-500 focus:bg-red-500/5"
                placeholder="Enter your message..."
                onChange={(e) => setFormDate({...formData, message: e.target.value})}
                 />

            </div>
            <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-500 to-pink-400 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15xp_rgba(59,130,246,0.4)]">
              Send Message
            </button>

          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
