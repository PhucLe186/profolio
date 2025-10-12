import About from './Component/About'
import Contact from './Component/Contact'
import NavBar from './Component/NavBar'
import Project from './Component/Project'
import Skill from './Component/Skill'
import Stars from './Component/stars'
import Testimonials from './Component/Testimonials/Testimonials'
import '@/App.css'
import Home from '@component/home'
import "devicon/devicon.min.css";  

function App() {
  return (
    
      <div className='relative z-0' >
        <NavBar/>
        <Home />
        <About/>
        <Stars/>
        <Project/>
        <Skill/>
        <Testimonials/>
        <Contact/>
      </div>
    
      
  )
}
export default App
