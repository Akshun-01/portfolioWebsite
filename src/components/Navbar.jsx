import { useState } from 'react';
import {motion, AnimatePresence} from "framer-motion";
import './Navbar.scss';

export default function Navbar(){
    const [isDropped, setIsDropped] = useState(false);
    const handleChange = () => {
      setIsDropped(!isDropped);
    };
  
    const [isChecked, setisChecked] = useState(false);
    const handleCheck = () => {
      setisChecked(!isChecked);
    };
    const handleInput = () => {
      handleChange();
      handleCheck();
    }

    return(
        <div className="z-30 fixed w-full h-12 bg-neutral-700 text-white flex flex-row items-center justify-between px-6 py-9">
            <h1 className='font-accent text-header-primary lg:text-3xl text-2xl '>AKSHUN</h1>
            <div className="flex flex-row opacity-0 sm:opacity-100">
                <a className='mr-6' href="https://www.linkedin.com/in/akshun-kuthiala-194672223/" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin hover:fill-header-primary hover:stroke-none"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a className='mr-4' href="https://github.com/Akshun-01" target='_blank'>           
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github hover:fill-header-primary hover:stroke-none"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
            </div>
            <div className="nav-menu-btn z-20">
                <label htmlFor="check" onChange={handleInput} checked={isChecked}>
                    <input type="checkbox" id="check"/> 
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
            <AnimatePresence>
                {isDropped ? <Dropdown/>: null}
            </AnimatePresence>
        </div>
    )
}
const Dropdown = ()=>{
    const item={
        exit:{
          opacity:0,
          height:0,
          transition:{
            ease:"easeInOut",
            duration:0.3,
            delay:1.2
          }
        }
    }

    return(
    <motion.div className="bg-neutral-900 flex flex-col items-center justify-evenly w-full h-screen absolute left-0 top-0 duration-100 z-10 font-accent"
        variants={item}
        initial={{height:0,opacity:0}}
        animate={{height:"100vh",width:"100%", opacity:1}}
        transition={{duration:.5}}
        exit="exit"
    >
        <div className="w-full text-center relative">
            <motion.a href="/portfolioWebsite/" className='text-3xl sm:text-6xl cursor-pointer relative mr-6 mb-12 text-stone-500  hover:text-header-primary'
              initial={{y:80,opacity:0}}
              animate={{y:0, opacity:1}}
              transition={{delay:.8}}
              exit={{
               opacity:0,
               y:90,
                 transition:{
                   ease:"easeInOut",
                   delay:1
                 }
              }}
            >Home</motion.a>
            {/* dividing line */}
            <div className='h-[1px] w-[100%] absolute left-0 translate-y-6 bg-gradient-to-r from-transparent via-blue-400 opacity-60' />
            {/* element */}
            <motion.div className='absolute right-[65%] -top-5'
            initial={{x:-80,opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{delay:.8}}
            exit={{
             opacity:0,
             x:-90,
               transition:{
                 ease:"easeInOut",
                 delay:1
               }
            }}
            ><img src="./navbar/homeGate.png" alt="" className='h-[12vh] sm:h-[20vh] aspect-auto'/></motion.div>
        </div>
        <div className="w-full text-center relative">
            <motion.a href="/portfolioWebsite/techstack" className='text-3xl sm:text-6xl cursor-pointer relative mr-6 mb-12 text-stone-500  hover:text-header-primary'
              initial={{y:80,opacity:0}}
              animate={{y:0, opacity:1}}
              transition={{delay:.6}}
              exit={{
               opacity:0,
               y:90,
                 transition:{
                   ease:"easeInOut",
                   delay:0.7
                 }
              }}
            >Expertise</motion.a>
            {/* dividing line */}
            <div className='h-[1px] w-[100%] absolute left-0 translate-y-6 bg-gradient-to-r from-transparent via-blue-400 opacity-60' />
            {/* element */}
            <motion.div className='absolute left-3/4 -top-5'
            initial={{x:80,opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{delay:.8}}
            exit={{
             opacity:0,
             x:90,
               transition:{
                 ease:"easeInOut",
                 delay:.7
               }
            }}
            ><img src="./navbar/lanternjp.png" alt="" className='h-[12vh] sm:h-[20vh] aspect-auto'/></motion.div>
        </div>
        <div className="w-full text-center relative">
            <motion.a href="/portfolioWebsite/projects" className='text-3xl sm:text-6xl cursor-pointer relative mr-6 mb-12 text-stone-500  hover:text-header-primary'
            initial={{y:100,opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{delay:.4}}
            exit={{
             opacity:0,
             y:90,
               transition:{
                 ease:"easeInOut",
                 delay:0.4
               }
            }}
            >Projects</motion.a>
            {/* dividing line */}
            <div className='h-[1px] w-[100%] absolute left-0 translate-y-6 bg-gradient-to-r from-transparent via-blue-400 opacity-60' />
            {/* element */}
            <motion.div className='absolute right-3/4 -top-9'
            initial={{x:-100,opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{delay:.8}}
            exit={{
             opacity:0,
             x:-130,
               transition:{
                 ease:"easeInOut",
                 delay:.4
               }
            }}
            ><img src="./navbar/amulet.png" alt="" className='h-[12vh] sm:h-[20vh] aspect-auto'/></motion.div>
        </div>
        <div className="w-full text-center relative">
            <motion.a href="/portfolioWebsite/contact" className='text-3xl sm:text-6xl cursor-pointer relative mr-6 mb-12 text-stone-500  hover:text-header-primary'
            initial={{y:80,opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{delay:.2}}
            exit={{
             opacity:0,
             y:90,
               transition:{
                 ease:"easeInOut",
                 delay:.1
               }
            }}
            >Contact</motion.a>
            {/* dividing line */}
            <div className='h-[1px] w-[100%] absolute left-0 translate-y-6 bg-gradient-to-r from-transparent via-blue-400 opacity-60' />
            {/* element */}
            <motion.div className='absolute left-3/4 -top-5'
            initial={{x:70,opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{delay:.8}}
            exit={{
             opacity:0,
             x:150,
               transition:{
                 ease:"easeInOut",
                 delay:.1
               }
            }}
            ><img src="./navbar/daruma.png" alt="" className='h-[12vh] sm:h-[20vh] aspect-auto'/></motion.div>
        </div>
    </motion.div>
)}

// tailwind code for underline on hover effect
// after:content-[""] after:h-[1.5px] after:w-0 after:absolute after:left-0 after:bottom-[-2px] after:rounded-full after:bg-header-primary after:duration-300 hover:after:w-full