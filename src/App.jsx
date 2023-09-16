import './App.css'

import { useMediaQuery } from "react-responsive";

// import FloatingNav from './components/FloatingNav';
import Navbar from './components/Navbar';
import PhoneNav from './components/PhoneNav';
import { HeroPage, TechStack, Projects, Footer } from './pages/index';
import FooterNinja from './components/ui/FooterNinja';

function App() {
  const isPhone = useMediaQuery({
    query: "(max-width: 780px)",
  });

  return (
    <div className='bg-background-color'>
      {isPhone ? <PhoneNav/> : <Navbar/>}
      <HeroPage />
      <Projects />
      <TechStack />
      <Footer />
      {/* <FloatingNav /> */}
      <FooterNinja />
    </div>
  )
}

export default App
