import NavBarData from "@/Data/NavbarData";
import { useEffect, useState } from "react";
function NavBar() {
    const [activeId, setActiveId] = useState(null);
    useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
          });
        },
            { threshold: 0.6 }
        );

        NavBarData.forEach((item) => {
            const section = document.getElementById(item.id);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);
    const handleClick = (id)=> {
        setActiveId(id)
    }
    return ( 
    <div className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-filter backdrop-blur-lg border-b border-gray-800" style={{ fontFamily: "'Space Mono', monospace" }}>
        <div className="container">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="px-4 py-3 flex justify-between items-center h-20">
                    <a href="#" className="text-2xl font-bold flex items-center">
                        <i className="fas fa-meteor mr-2 text-white"></i>
                        <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">PROFILE</span>
                    </a>
                    <div className="hidden md:flex space-x-8">
                        {NavBarData.map((item,idx)=>(
                            <a key={idx+1} href={`#${item.id}`} onClick={()=>handleClick(item.id)} className="text-white hover:text-gray-300 transition duration-300 text-xl">
                                {item.label}
                            </a>
                        ))}
                    </div>
                     <button id="mobile-menu-button" className="md:hidden text-white focus:outline-none">
                        <i className="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>

    );
}

export default NavBar;