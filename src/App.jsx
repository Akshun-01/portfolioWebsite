import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from './components/Navbar';
import { HeroPage, TechStack, Projects, ContactForm, Footer, ComingSoon, Error} from './pages/index';
import Loading from './components/Loading';
import FooterNinja from './components/ui/FooterNinja';
import FloatingNav from "./components/FloatingNav";

function App() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className='bg-background-color'>
      {/* <ComingSoon /> */}
      <Navbar />
      <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/portfolioWebsite/"
          element={
            <React.Suspense fallback={<Loading />}>
              <HeroPage />
            </React.Suspense>
          }
        />
        <Route
          path="/portfolioWebsite/techstack"
          element={
            <React.Suspense fallback={<Loading />}>
              <TechStack />
            </React.Suspense>
          }
        />
        <Route
          path="/portfolioWebsite/projects"
          element={
            <React.Suspense fallback={<Loading />}>
              <Projects />
            </React.Suspense>
          }
        />
        <Route
          path="/portfolioWebsite/contact"
          element={
            <React.Suspense fallback={<Loading />}>
              <ContactForm />
            </React.Suspense>
          }
        />
        <Route path="/portfolioWebsite/*" element={<Error/>} />
      </Routes>
      </AnimatePresence>
      {location.pathname=="/portfolioWebsite/" ? <p/> : <Footer />}
      {/* <FooterNinja /> */}
      {/* <FloatingNav /> */}
    </div>
  )
} 

export default App
