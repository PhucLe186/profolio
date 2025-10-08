import { useState } from "react";
import contactData from "../data/contactData.jsx";
import Swal from 'sweetalert2';
import axios from "axios";

const Contact = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [formData, setFormData] = useState({
        name: '',
        email: '',
        message:''
      });
  const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };
  const hanndlesubmit= async()=> {
    const res= await axios.post(`${API_URL}feedback/contact`, formData)
     if(res.data.success){
      setFormData({ name: '', email: '', message:'' });
      Swal.fire({
      icon: 'success',
      title: 'Mission Complete!',
      text: 'Your message has been successfully transmitted to us',
      background: '#0b0b16', 
      color: '#e0e0ff', 
      confirmButtonText: 'Return to Earth',
      confirmButtonColor: '#7C3AED',
      customClass: {
        popup: 'rounded-2xl shadow-[0_0_25px_#7C3AED55]',
        title: 'text-purple-400 font-bold',
        confirmButton: 'text-white font-medium px-6 py-2 rounded-lg bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-600 hover:to-indigo-500',
      },
        });            
      }
  }
  console.log(formData)
  return (
    <section
      id="contact"
      className="min-h-screen pb-20 pt-20  relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title & Subtitle */}
        <header className="text-center text-gray-800 dark:text-white mb-12">
                <h2 className="text-3xl md:text-4xl mb-1 font-bold text-center section-title ">{contactData.title}</h2>
                <p className="text-lg text-gray-800 dark:text-white">{contactData.subtitle}</p>
        </header>
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Side: Social Links */}
              <div className="grid gap-4 max-w-xl mx-auto lg:mx-0">
                {contactData.socials.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 px-7 py-7 rounded-lg border border-gray-600 
                               transition-all duration-300 transform hover:-translate-y-1 hover:scale-105
                               hover:border-cyan-400 hover:shadow-[0_0_16px_cyan]"
                    aria-label={item.label}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-white text-black shadow-md shrink-0">
                        <i className={`${item.icon} text-xl`} />
                      </div>
                      <div className="flex flex-col overflow-hidden">
                        <span className="font-semibold text-2xl leading-tight">{item.label}</span>
                        <span className="text-gray-300 text-sm leading-snug">{item.description}</span>
                      </div>
                    </div>
                    <i className="bx bx-chevron-right text-2xl text-gray-300" />
                  </a>
                ))}
              </div>

              {/* Right Side: Contact Form */}
              <div className="rounded-2xl p-10 shadow-xl border border-gray-700 backdrop-blur-md max-w-xl mx-auto lg:mx-0">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
                <i className="bx bx-envelope text-xl" />
                Send Me a Message
              </h3>
              <form className="grid gap-4">
                <input
                  type="text"
                  name="name"
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="p-3 rounded-lg border border-gray-700 bg-gray-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="email"
                  name="email"
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="p-3 rounded-lg border border-gray-700 bg-gray-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <textarea
                  placeholder="Your Message"
                  name="message"
                  onChange={handleInputChange}
                  className="p-3 rounded-lg border border-gray-700 bg-gray-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  rows="5"
                />
                  <button
                    onClick={hanndlesubmit}
                    type="button"
                    className="px-5 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full font-medium flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(128,0,255,0.7)]"
                  >
                    Send <i className="bx bx-send text-lg" />
                  </button>
              </form>
            </div>
            </div>    
        </div>
      </div>
    </section>
  );
};

export default Contact;
