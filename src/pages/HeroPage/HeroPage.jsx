import './HeroPage.scss';

export default function HeroPage(){
    return(
        <div className="flex items-center justify-center text-white pl-12 relative h-screen">
            <div className="w-full text-left sm:w-4/5 sm:text-center z-10">
                <h1 className="text-2xl font-bold my-5 sm:text-5xl">Unveiling the Art of Digital Alchemy <br/> Where Ideas Transform into Reality</h1>
                <p className="text-sm opacity-60 w-4/5 sm:text-base sm:w-full">With my expertise as a web developer and UI/UX designer. By blending cutting-edge technologies with captivating design, I can help you create an impactful online presence that resonates with your audience and stands the test of time.</p>
                <div className="my-10">
                    <button className="p-3 mr-5 border-red-800 border-solid border-2 rounded-md">Download Resume ⬇️</button>
                    <button className="p-3 border-red-800 border-solid border-2 rounded-md">Contact me ↪</button>
                </div>
            </div>

            <div className="images">
                <img className="grid" src="/homepage/grid.webp" alt="" />
                <div className="left">
                    <img className="left-bg" src="/homepage/left_bg.webp" alt="" />
                    <img className="fish1" src="/homepage/fish1.webp" alt="" />
                    <img className="fish2" src="/homepage/fish2.webp" alt="" />
                </div>
                <div className="right">
                    <img className="right-bg" src="/homepage/right_bg.webp" alt="" />
                    <img className="right-bg2" src="/homepage/right_bg2.webp" alt="" />
                    <img className="clouds" src="/homepage/right_clouds.webp" alt="" />
                    <img className="tree" src="/homepage/right_tree.webp" alt="" />
                </div>
            </div>
        </div>
    )
}
