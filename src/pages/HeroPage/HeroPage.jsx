import './HeroPage.scss';

export default function HeroPage(){
    return(
        <div className="flex items-center justify-between text-white pl-12  relative h-screen">
            <div className="w-1/2">
                <h1 className='text-3xl mb-2 font-mono'>Unveiling the Art of Digital Alchemy <br/> Where Ideas Transform into Reality</h1>
                <p className='w-[80%] text-lg tracking-wide opacity-70'>With my expertise as a web developer and UI/UX designer, I am dedicated to crafting digital wonders that leave a lasting legacy. By blending cutting-edge technologies with captivating design, I can help you create an impactful online presence that resonates with your audience and stands the test of time. </p>
                <div className="mt-6">
                    <button className='border-2 border-header-primary p-2 rounded-xl mr-4'>Resume →  </button>
                    <button className='border-2 border-header-primary p-2 rounded-xl'>Contact Me ↓</button>
                </div>
            </div>
            <div className="z-[2]">
                <img src="./assets/homeImg.png" alt="img" className='opacity-20'/>
            </div>
            {/* <div className="z-[1] bg-inherit mix-blend-overlay h-[50px]">
                <img src="./assets/paperTexture.jpg" alt="" className='absolute top-0 right-0'/>
            </div> */}
            {/* dividing line */}
            <div className='w-4/5 h-[1px] absolute bottom-6 translate-x-[-50%] left-1/2 bg-gradient-to-r from-transparent via-blue-400 opacity-60' /> 
        </div>
    )
}