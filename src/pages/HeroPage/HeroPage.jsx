import './HeroPage.scss';
import VerticalText from '../../components/ui/VerticalText';

//Unveiling the Art of Digital Alchemy <br/> Where Ideas Transform into Reality
//With my expertise as a web developer and UI/UX designer. By blending cutting-edge technologies with captivating design, I can help you create an impactful online presence that resonates with your audience and stands the test of time.

export default function HeroPage(){
    return(
        <div className="flex items-center justify-center text-white relative h-screen w-full overflow-x-hidden">
            <div className="text-left z-20 lg:translate-x-[-10vw]">
                <h1 className="text-2xl font-bold opacity-60 ml-2">I'm a</h1>
                <p className="text-5xl md:text-7xl lg:text-8xl font-accent">DEVELOPER</p>
                <div className="my-10">
                    <button className="p-3 mr-5 border-red-800 border-solid border-2 rounded-md">
                        <a href="./resume/resume.pdf" download>
                            Download Resume ⬇️
                        </a>
                    </button>
                </div>
                {/* <VerticalText heading="DEVELOPER" className="absolute left-1/2"/> */}
            </div>

            <div className="images">
                <img className="grid" src="./homepage/grid.webp" alt="" />
                {/* <img className="base-bg" src="/homepage/base_bg.webp" alt="" /> */}
                <div className="left z-10">
                    <img className="left-bg" src="./homepage/left_bg.webp" alt="" />
                    <img className="fish1" src="./homepage/fish1.webp" alt="" />
                    <img className="fish2" src="./homepage/fish2.webp" alt="" />
                </div>
                <div className="right z-10">
                    <img className="right-bg2" src="./homepage/right_bg2.webp" alt="" />
                    <img className="right-bg" src="./homepage/right_bg.webp" alt="" />
                    <img className="clouds" src="./homepage/right_clouds.webp" alt="" />
                    <img className="tree" src="./homepage/right_tree.webp" alt="" />
                    <img className='mb-btm-pattern' src="./homepage/left_bg.webp" alt="" />
                </div>
            </div>
        </div>
    )
}
