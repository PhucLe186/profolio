import TestimonialsData from "@/Data/TestimonialsData";
import { useEffect, useState } from "react";
import CustomModal from "./CustomModal";
import FormModel from "./FormModel";
import axios from 'axios';

function Testimonials() {
    const API_URL = import.meta.env.VITE_API_URL;
    const [isOpen, setIsOpen]= useState(false);
    const [data, setData]= useState([]);
    useEffect( ()=> {
        const fetchdata= async () => {
            const res=await axios.get(`${API_URL}feedback`)
            const Item=res.data.message
            if(res.data.success) {
                const itemdata=Object.keys(Item).map(key=> {return{
                ID_feedback:key,
                ...Item[key],
        }})
        setData(itemdata)
            }
        }
        fetchdata()
    },[])

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <i
                key={index}
                className={`bx bxs-star text-sm ${index < rating ?  'text-yellow-400': 'text-gray-300' }`}
            />
        ));
    };
    const handleClick =() => {
        setIsOpen(false)
    }
    const uploadData=(newdata) => {
        const items = Array.isArray(newdata) ? newdata : [newdata];
        setData(prev=>[...prev,...items])
    }
    return (
        <section id="feedbacks" className="min-h-screen pt-20">
            <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="text-center text-gray-800 dark:text-white mb-12">
                    <h2 className="text-3xl md:text-4xl mb-2 font-bold text-center section-title ">{TestimonialsData.title}</h2>
                    <p className="text-lg text-gray-800 dark:text-white">{TestimonialsData.subTitle}</p>
                </header>
                <div className="bg-black/60 backdrop-blur-xl mb-10 shadow-[0_0_25px_rgba(255,255,255,0.1)] border border-gray-700 max-w-4xl mx-auto ">
                    <div className="flex justify-between p-6 items-center max-w-4xl border border-white dark:border-gray-700">
                         <h3 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                            <i className="bx bx-comment-detail text-2xl" />
                            FeedBack for me
                        </h3>
                         <button
                            onClick={() => setIsOpen(true)}
                            className="px-6 py-2 bg-gray-800 ml-3 text-white dark:bg-white dark:text-gray-800 rounded-lg font-medium  flex items-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
                            aria-label="Add a new testimonial"
                        >
                            <i className="bx bx-plus text-lg" />
                            Add feedback
                        </button>
                    </div>
                    {data.length>0? (
                        <div className="max-h-[500px] overflow-y-auto scrollbar-hide p-6">
                            <div className="space-y-6">
                                {data.map((item, idx)=>(
                                    <div key={idx} className="group bg-gray-900/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 shadow-[0_0_10px_#fff3] hover:shadow-[0_0_20px_#fff5] transition-shadow duration-300">                                        
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={item.avata}
                                                alt={`Avatar of ${item.name}`}
                                                className="w-12 h-12 rounded-full shadow-[0_0_20px_#fff5] object-cover ring-3 ring-white/30 transform transition-transform duration-500 group-hover:rotate-12 mb-2"
                                                onError={(e) => {
                                                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=1f2937&color=fff&size=48`;
                                                }}
                                            />
                                            <div>
                                                <div className="flex items-center gap-1">
                                                    <h4 className="font-semibold text-gray-800 dark:text-white text-sm text-left">
                                                        {item.name}
                                                    </h4>
                                                    <h4 className="text-gray-400">
                                                        {item.position}
                                                    </h4>
                                                </div>
                                                <p className="text-left text-xs text-gray-800 dark:text-white max-h-12 overflow-y-auto scrollbar-hide  ">
                                                    {item.content}
                                                </p>
                                            </div>
                                            <div className="absolute bottom-2 right-2 flex gap-0.5 ">
                                                {renderStars(item.rating)}
                                            </div>                                            
                                        </div>
                                    </div>                                    
                                ))}
                            </div>                            
                        </div>
                    ):(
                        <div className="text-center py-12">
                            <i className="fas fa-meteor text-6xl text-gray-300 dark:text-gray-600 mb-4 animate-pulse" />
                            <p className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                                No feedback Yet
                            </p>
                            <p className="text-sm text-gray-800 dark:text-white max-w-sm mx-auto">
                                Be the first to share your experience and inspire others with your story!
                            </p>
                        </div>
                    )
                    }
                </div>
                {isOpen &&
                <CustomModal isOpen={isOpen} onclose={handleClick}>
                    <FormModel onclose={handleClick} upload={uploadData} />
                </CustomModal>}
            </div>
        </section>
    );
}

export default Testimonials;