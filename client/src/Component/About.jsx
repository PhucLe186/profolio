import aboutData from "@/Data/AboutData";
function About() {
    return ( 
    <section id="about" className="min-h-screen pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
            <header className="text-center text-gray-800 dark:text-white mb-12">
                <h2 className="text-3xl md:text-4xl mb-1 font-bold text-center section-title ">{aboutData.title}</h2>
                <p className="text-lg text-gray-800 dark:text-white">{aboutData.subTitle}</p>
            </header>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center py-12 min-h-[calc(100vh-5rem)]">
                <div className="w-full mb-10 flex justify-center">
                    <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 aspect-square">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white to-gray-400 opacity-20 blur-lg"></div>
                        <img
                        src={`${aboutData.avatar}`}
                        alt="Profile"
                        className="w-full h-full rounded-full object-cover relative z-10 border-4 border-white"
                        />
                    </div>
                </div>
                <div className="w-full text-gray-800 dark:text-white" >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2 mb-1">
                                <i className={`fa ${aboutData.aboutme.WhoAmI.icon} text-xl `}></i>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white"> Who Am I</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">
                                {aboutData.aboutme.WhoAmI.text}
                            </p>
                        </div>  
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2 mb-1">
                                <i className={`bx ${aboutData.aboutme.IWillBecome.icon} text-xl `}></i>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white"> I Will Become</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">
                                {aboutData.aboutme.IWillBecome.text}
                            </p>
                        </div>       
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4" data-aos-delay="600" data-aos="fade-down">
                        <i className="bx bx-info-circle text-2xl text-gray-800 dark:text-white" aria-hidden="true"></i>
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Personal Info</h2>
                    </div>
                    
                    <ul className=" grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-lg mx-auto lg:mx-0">
                        {aboutData.biodata.map((item, idx)=> (
                            <li key={idx} className="flex items-center gap-4">
                                <div className="flex items-center w-12 h-12 p-4 rounded-lg bg-gray-800 dark:bg-white dark:text-gray-800 shadow-lg text-white">
                                    <i className={`${item.icon} text-xl`} aria-hidden="true"></i>
                                </div>
                                <div className="flex flex-wrap gap-1">
                                    <span className="font-semibold text-sm text-gray-800 dark:text-white">{item.label}:</span>
                                    <span className="text-sm text-gray-700 dark:text-gray-300"> {item.value}</span>
                                </div>
                            </li>
                        ))}
                    </ul>  
                </div>
            </div>

            <style>
                {`
                .section-title {
                position: relative;
                display: inline-block;
                }
        
                .section-title::after {
                content: '';
                position: absolute;
                width: 100%;
                height: 2px;
                bottom: -5px;
                left: 0;
                background: linear-gradient(90deg, transparent, #fff, transparent);
                }`}
            </style>

        </div>
    </section> );
}

export default About;