import skillData from "@/Data/SkillData";
import { useState } from "react";
import Swal from "sweetalert2";


function Skill() {
    //--xử lý sự dữ liệu--//
    const API_URL = import.meta.env.VITE_API_URL;
    const [isActive, setIsActive]= useState('Frontend')
    const [data, setData]= useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const skillsPerPage = 6;

    
    const fillterCategories = skillData.categories.find(item=> item.title.toLowerCase()===isActive.toLowerCase())
    const fillterSkill= fillterCategories ? fillterCategories.skills : [];

    const totalSkills= fillterSkill.length;
    const totalPages= Math.ceil(totalSkills/skillsPerPage);
    const startIndex=(currentPage-1)* skillsPerPage;
    const endIndex = startIndex + skillsPerPage;
    const currentSkills= fillterSkill.slice(startIndex, endIndex);

    const goToPage= (page)=> {
        if(page >=1 && page <= totalPages) {
            setCurrentPage(page)
        }
    }
    //--xử lý event--//
    const handleClick =(value)=>{
        setCurrentPage(1)
        setIsActive(value)
    }
    
    const Clickitem= ()=> {
        Swal.fire({
            icon: 'error',
            title: 'Function Not Ready Yet!',
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
        <section id="skills" className="min-h-screen pt-12" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
                <header className="text-center text-gray-800 dark:text-white mb-12">
                    <h2 className="text-3xl md:text-4xl mb-1 font-bold text-center section-title ">{skillData.title}</h2>
                    <p className="text-lg text-gray-800 dark:text-white">{skillData.subTitle}</p>
                </header>
            </div>
            <div className="flex justify-center items-center mb-8 gap-4 flex-wrap ">
                {skillData.categories.map((item,idx)=> (
                    <button key={idx+1} onClick={()=> handleClick(item.title)}
                        className={`flex items-center gap-2 px-5 py-3 rounded-lg shadow-lg text-sm font-medium transition-all ${
                        isActive === item.title
                        ? "bg-gray-800 text-white dark:bg-white dark:text-gray-800"
                        : "bg-transparent text-gray-800 dark:text-white border border-white"
                        }`} >
                        {item.title}
                    </button>
                    ))}
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4 gap-6">
                {currentSkills.map((skill,idx)=>(

                    <div 
                        onClick={()=>Clickitem()}
                        key={idx}
                        className="bg-black/40 border border-white/20 rounded-2xl shadow-lg p-6 hover:shadow-cyan-400/50 hover:-translate-y-1 transition-all flex flex-col items-center min-h-[201px]"
                    >
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 mb-4">
                            {skill.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">{skill.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center">
                            <span className="inline-block">{skill.level}</span>
                        </p>
                    </div>
                ))}
            </div>
                {/* ///button/// */}
            {totalPages > 1 && (
                <div className="flex justify-center mt-8 gap-2 z-10">
                    <button
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded-lg font-medium transition-all backdrop-blur-sm shadow-lg border border-gray-500 ${
                        currentPage === 1 ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                        : "bg-white text-black hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]"
                        }`}
                    >
                        ⬅ Prev
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => goToPage(page)}
                            className={`px-4 py-2 rounded-full font-medium transition-all backdrop-blur-sm shadow-md border border-gray-500 ${
                            currentPage === page
                            ? "bg-white text-black scale-110 shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                            : "bg-black text-white hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                            }`}
                        >
                            {page}
                        </button>
                    ))}
                        <button
                            onClick={() => goToPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`px-4 py-2 rounded-lg font-medium transition-all backdrop-blur-sm shadow-lg border border-gray-500 
                            ${currentPage === totalPages? "bg-gray-800 text-gray-500 cursor-not-allowed"
                            : "bg-white text-black hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]"
                            }`}
                            >
                            Next ➡
                        </button>
                </div>
                )}
        </section>
    );
}

export default Skill;