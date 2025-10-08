import projactData from "@/Data/ProjectData";
import { useState } from "react";
import Swal from 'sweetalert2';
function Project() {
    const [isActive,SetisActive ]= useState('all')
    const filteredProjects= isActive==='all'? projactData.projects: projactData.projects.filter(item =>item.type.toLowerCase()===isActive.toLowerCase())
    const tabData=[
            { value: "all", label: "All Projects", icon: "bx bx-grid-alt" },
            { value: "frontend", label: "Frontend", icon: "bx bx-desktop" },
            { value: "backend", label: "Backend", icon: "bx bx-server" },
            { value: "fullstack", label: "Fullstack", icon: "bx bx-code-alt" },
        ]
        ///////////////////////////////////////////
    const handleClick =(value)=> {
        SetisActive(value)
    }
    const ProjectClick =() => {
        Swal.fire({
              icon: 'success',
              title: 'Mission Complete!',
              text: "I’m Very Sorry!This feature is still under construction. Please return later!",
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
    return (
        <section id="projects" className="min-h-screen pt-12">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
                <header className="text-center text-gray-800 dark:text-white mb-12">
                    <h2 className="text-3xl md:text-4xl mb-1 font-bold text-center section-title ">{projactData.title}</h2>
                    <p className="text-lg text-gray-800 dark:text-white">{projactData.subTitle}</p>
                </header>
                <div className="flex justify-center items-center mb-8 gap-4 flex-wrap ">
                    {tabData.map((item,idx)=> (
                        <button key={idx+1} onClick={()=> handleClick(item.value)}
                        className={`flex items-center gap-2 px-5 py-3 rounded-lg shadow-lg text-sm font-medium transition-all ${
                        isActive === item.value
                        ? "bg-gray-800 text-white dark:bg-white dark:text-gray-800"
                        : "bg-transparent text-gray-800 dark:text-white border border-white"
                        }`} >
                            {item.value}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {filteredProjects.map((project, idx)=>(
                        <div key={idx+1} className="project-card rounded-lg overflow-hidden border border-gray-800 bg-black shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition duration-300">
                            <div className="h-32 bg-gray-800 relative overflow-hidden border-b border-gray-700">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover"/>
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                                    <a onClick={ProjectClick} className="px-4 py-2 bg-white text-black rounded-full font-bold mr-3">Demo</a>
                                    <a href={project.github} className="px-4 py-2 border-2 border-white text-white rounded-full font-bold">Code</a>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="">
                                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-left">{project.title}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-left">{project.type} • {project.year} • {project.status}</p>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2 text-left">Features:</h4>
                                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                                    {project.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2">
                                        <i className="bx bx-check text-lg"></i>
                                        {feature}
                                        </li>
                                    ))}
                                    </ul>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                {project.tech.map((techItem,idx)=>(
                                    <span key={idx+1} className="px-3 py-1 bg-gray-800 text-white text-sm rounded-full">{techItem}</span>
                                ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section> )
}

export default Project;