import TestimonialsData from "@/Data/TestimonialsData";
import { useState } from "react";
import { FaUserAstronaut } from "react-icons/fa";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Swal from "sweetalert2";
import axios from "axios";
function FormModel( {onclose, upload} ) {
    const API_URL = import.meta.env.VITE_API_URL;
    const [isSubmitting, setIsSubmitting]= useState(false)
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        avata: TestimonialsData.avatars[Math.floor(Math.random()*10)+1],
        content: '',
        rating:5,
        position: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };
    const validate= () => {
        const newErrors={}
        if(!formData.name.trim()) {
            newErrors.name='Name is required'
        }
        if(!formData.email.trim()) {
            newErrors.email='Email is required'
        }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.content.trim()) {
            newErrors.content = 'Testimonial is required';
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0;
    }
    const handleSubmit= async()=> {
        if(!validate()) {
            return ;
        }
        setIsSubmitting(true)
        const res= await axios.post(`${API_URL}feedback/send`,formData)
        if(res.data.success){
            upload(formData)
            setFormData({ name: '', email: '', content: '', position: '' });
            setIsSubmitting(false);
            onclose();
            Swal.fire({
                icon: 'success',
                title: 'Mission Complete!',
                text: 'Your feedback has been successfully transmitted to us',
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
    return ( 
        <div className="p-6 sm:p-8 bg-gradient-to-b from-black via-gray-900 to-black rounded-3xl shadow-[0_0_20px_#fff3]">
            <div className="text-center mb-8">
                <div className="w-12 h-12 bg-gray-800/40 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_10px_#fff5]">
                    {/* <i className="text-xl text-white animate-pulse" /> */}
                    <FaUserAstronaut className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Share Your Cosmic Testimonial</h3>
                <p className="text-sm text-gray-300">
                Tell us about your journey through the universe of our services
                </p>
            </div>
            <div className=" grid gap-4 ">
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1 text-left">Full Name</label>
                    <div className="relative">
                        <i className="bx bx-id-card absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                        type="text"
                        name="name"
                        onChange={handleInputChange}
                        value={formData.name}
                        className={
                            `w-full pl-10 pr-4 py-2 rounded-lg border ${
                            errors.name
                            ? 'border-red-500 focus:border-red-400 focus:ring-red-300'
                            : 'border-gray-700 focus:border-purple-400 focus:ring-purple-400'}
                            bg-gray-900 text-white text-sm focus:outline-none focus:ring-1 transition-colors`
                        }
                        placeholder="Enter your cosmic name"
                        />
                    </div>
                    {errors.name && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                            <i className="bx bx-error-circle" />
                                {errors.name}
                        </p>
                    )}
                    </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1 text-left">Email</label>
                    <div className="relative">
                        <i className="bx bx-id-card absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                        type="email"
                        name="email"
                        onChange={handleInputChange}
                        value={formData.email}
                        className={
                            `w-full pl-10 pr-4 py-2 rounded-lg border ${
                            errors.email
                            ? 'border-red-500 focus:border-red-400 focus:ring-red-300'
                            : 'border-gray-700 focus:border-purple-400 focus:ring-purple-400'}
                            bg-gray-900 text-white text-sm focus:outline-none focus:ring-1 transition-colors`
                        }
                        placeholder="galaxy@universe.com"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1 text-left">position</label>
                    <div className="relative">
                    <i className="bx bx-planet absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <select
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-10 py-2 rounded-lg border border-gray-700 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 bg-gray-900 text-white text-sm focus:outline-none appearance-none transition-colors"
                        >
                        <option value="">Select your role in the universe...</option>
                        <option value="Commander">Commander</option>
                        <option value="Pilot">Pilot</option>
                        <option value="Engineer">Flight Engineer</option>
                        <option value="Scientist">Mission Specialist</option>
                        <option value="Explorer">Space Explorer</option>
                        <option value="Alien">Alien Visitor</option>
                    </select>
                    <i className="bx bx-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1 text-left">Testimonial</label>
                    <div className="relative">
                        <i className="bx bx-message-detail absolute left-3 top-4 transform -translate-y-1/2 text-gray-400" />
                        <textarea
                        name="content"
                        onChange={handleInputChange}
                        value={formData.content}                      
                        rows={4}
                        className={
                            `w-full pl-10 pr-4 py-2 rounded-lg border ${
                            errors.content
                            ? 'border-red-500 focus:border-red-400 focus:ring-red-300'
                            : 'border-gray-700 focus:border-purple-400 focus:ring-purple-400'}
                            bg-gray-900 text-white text-sm focus:outline-none focus:ring-1 transition-colors`
                        }
                        placeholder="Share your experience across the cosmic journey..."
                        />
                    </div>
                </div>
                <div className="flex gap-3 pt-4">
                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="flex-1 px-6 py-2 border border-gray-700 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="flex-1 px-6 py-2 bg-purple-700 hover:bg-purple-600 text-white rounded-lg text-sm font-medium transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                        <span className="flex items-center justify-center gap-2">
                            <i className="bx bx-send" />
                            Submit
                        </span>
                    </button>
                </div>                                                                                              
            </div>
            {isSubmitting && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
                    <DotLottieReact
                        src="https://lottie.host/b8d0aec0-c933-4377-be04-293f91938543/X8uNgJzF8a.json"
                        autoplay
                        style={{
                            width: "30vw",
                            height: "100vh",
                        }}
                    />
                </div>
            )}
        </div>
    );
}

export default FormModel;