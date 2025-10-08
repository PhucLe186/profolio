import { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Tippy from '@tippyjs/react';

import homeData from '@data/HomeData'
function Home() {
    const [astronauts, setAstronauts]= useState([])
    useEffect(() => {
    const timeout = setTimeout(() => {
        const time = Date.now();
        setAstronauts([time]); // thêm astronaut duy nhất
    }, 10000); // 10000ms = 10s

    return () => clearTimeout(timeout);
    }, []);
   
    return (   
        <section id='home' className="pt-20 min-h-screen relative overflow-hidden">
            <div className=" absolute inset-0 -z-10">
                <div className=" absolute w-80 h-80 top-[25%] left-[400px] bg-opacity-50 ">
                    <img src={homeData.star} alt='start'/>
                </div>
                {astronauts.map(id=>(
                    <div key={id} className=" fixed inset-0 z-0 w-48 h-48 top-[20%] left-[-50px] floatf-astronaut bg-opacity-50 " >
                        <img src={homeData.astro} alt="Transparent"/>
                </div>
                ))}
                {homeData.loadingIcon.map((tech,idx)=>{
                    const position=[
                    "w-20 h-20 top-[15%] right-[15%] opacity-25",
                    "w-16 h-16 top-[40%] left-[10%] opacity-25 ",
                    "w-12 h-12 top-[19%] right-[25%] opacity-25",
                    "w-14 h-14 bottom-[35%] right-[30%] opacity-25",
                    "w-12 h-12 top-[60%] left-[30%] opacity-25"
                    ]
                    
                    return(
                        <div key={idx} className={`absolute rounded-full ${position[idx]} flex justify-center items-center animate-float `} style={{ backgroundColor: tech.color, animationDelay: `${idx * 0.5}s` }}>
                            <i className={`${tech.icon}`}></i>
                        </div>
                    )
                    })}
            </div>
            {/* information */}
            <div className=" relative z-0 max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)] py-12">
                    <div className=" space-y-8">
                        <div className=" md:text-left" >
                            <h1 className="text-4xl md:text-6xl font-bold mb-4 relative z-10">
                                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Hi, I'm </span>
                                <br/>
                                <span className="bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">{homeData.title}</span>
                            </h1>
                                <p className="text-xl md:text-2xl text-gray-300 mb-8">{homeData.description}</p>
                
                            <div className="flex flex-col sm:flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start">
                                <a href="#projects" className="px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition duration-300">
                                    View My Work
                                </a>
                                <a href="#contact" className="px-6 py-3 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-black transition duration-300">
                                    Download My CV
                                </a>
                            </div>
                        </div>
                        <div className='flex  items-center space-x-4'>
                            <span className="text-gray-800 dark:text-white font-medium">
                                Follow me on:
                            </span>
                            <div className="flex space-x-3">
                                {homeData.socialMedia.map((social, index) => (
                                <Tippy content={social.platform} key={index} placement="top">
                                    <a
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 mx-3 h-10 bg-gray-800 text-white dark:bg-white rounded-full flex items-center shadow-2xl justify-center dark:text-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                                    aria-label={`Visit ${social.platform}`}
                                    >
                                    <i className={`${social.icon} text-lg`}></i>
                                    </a>
                                </Tippy>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/*avatar*/}
                    <div className="relative flex justify-center items-center">
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            <div className="absolute inset-0 rounded-full border-4 border-white opacity-20 animate-spin-slow"></div>
                            <div className="absolute inset-4 rounded-full border-4 border-white opacity-30 animate-spin-slow-reverse"></div>
                            <div className="absolute inset-8 rounded-full border-4 border-white opacity-40 animate-spin-slow"></div>
                            <img src={homeData.avatar} alt="Profile" className="w-full h-full rounded-full object-cover relative z-10 border-4 border-white"/>
                        </div>
                    </div>
                    <div className="absolute bottom-[0] left-0 right-0 flex justify-center">
                        <a href="#about" className="text-white animate-bounce">
                            <i className="fas fa-chevron-down text-2xl"></i>
                        </a>
                    </div>
                
                </div>
                <style>{`
                        @keyframes float {
                            0%,
                            100% {
                            transform: translateY(0px);
                            }
                            50% {
                            transform: translateY(-10px);
                            }
                        }
                        .animate-float {
                            animation: float 3s ease-in-out infinite;
                        }
                        .shadow-3xl {
                            box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
                        }
                        .dark .shadow-3xl {
                            box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.5);
                        }
                        .typing-text {
                            display: inline-block;
                        }
                        .cursor {
                            font-weight: 600;
                            color: #1f2937;
                        }
                        .dark .cursor {
                            color: #d1d5db;
                        }
                        @keyframes floatRight{
                            0%{
                                transform: translateX(0) rotate(0deg);
                                opacity: 1;

                            }
                            50%{
                                opacity: 1;
                            }
                        
                            100%{
                                transform: translateX(120vw) rotate(360deg);
                                opacity: 0;
                            }
                        }
                        .floatf-astronaut{
                            animation: floatRight 25s linear infinite;
                        }
            `}</style>
            </div>
        </section>
    );
}

export default Home;