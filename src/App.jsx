import './App.css'

import { useMediaQuery } from "react-responsive";

// import FloatingNav from './components/FloatingNav';
import Navbar from './components/Navbar';
import PhoneNav from './components/PhoneNav';
import { HeroPage, TechStack, Projects } from './pages/index';

function App() {
  const isPhone = useMediaQuery({
    query: "(max-width: 780px)",
  });

  return (
    <div className='bg-[#202125] h-screen'>
      {/* {isPhone ? <PhoneNav/> : <Navbar/>} */}
      <HeroPage />
      {/* <Projects /> */}
      {/* <TechStack /> */}
      {/* <FloatingNav /> */}
    </div>
  )
}

export default App
