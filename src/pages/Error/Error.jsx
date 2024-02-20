import React from 'react'

const Error = () => {
  return (
    <div className='h-screen w-screen flex items-center justify-center overflow-hidden'>
        <h1 className='z-10 text-header-primary font-accent text-[6vw] '>Page Not Found!</h1>
        <p className='text-zinc-300 font-mono text-2xl absolute bottom-20 tracking-wider animate-pulse'>How did you end up here ヅ</p>
        <img src="./assets/redDot.png" alt="" className='absolute scale-[0.3] opacity-40 animate-pulse'/>
        <img src="./assets/paperTexture.jpg" alt="" className='absolute top-0 left-0 mix-blend-multiply h-screen w-screen' />
    </div>
  )
}

export default Error