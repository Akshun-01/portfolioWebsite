import { useMediaQuery } from "react-responsive";

import PROJECT_DATA from "./ProjectData";
import VerticalText from "../../components/ui/VerticalText";

const Projects = () => {
  const isPhone = useMediaQuery({
    query: "(min-width: 1400px)",
  });

  return (
    <div className="bg-background-color bg-[url('./assets/projectbg.png')] bg-cover text-white flex items-center justify-center relative py-12 pt-40">
      {isPhone ? 
        <VerticalText heading="Projects" className="absolute hidden"/> : (
        <div className="">
          <h1 className="absolute text-4xl top-28 sm:top-24 md:text-5xl lg:top-24 left-1/2 translate-x-[-50%] font-accent tracking-widest opacity-70 ">Project</h1>
        </div>
        )
      }
      <div className="hidden xl:block absolute top-1/4 right-12 rotate-6">
        <img src="./navbar/amulet.png" alt="" className="h-72" />
      </div>
      <div className=" w-screen xl:w-[80%] flex flex-wrap items-center justify-center xl:mt-0">
        {PROJECT_DATA.map(data => {
              return <ProjectCard data={data} key={data.title}/>
        })}
      </div>
      {/* dividing line */}
      <div className='w-4/5 h-[1px] absolute bottom-4 translate-x-[-50%] left-1/2 bg-gradient-to-r from-transparent via-blue-400 opacity-60' />
    </div>
  )
}

const ProjectCard = (props) => {
  return (
    <div className='sm:mx-6 sm:mb-12 mb-[-40px] sm:scale-100 scale-75'>
      <div className="overflow-hidden relative cursor-pointer border-[1px] border-neutral-400 rounded-md">
        <img src={props.data.image} alt={props.data.title} className="w-full h-full" />
        <div className="">
          <a href={props.data.links.github} target="_blank" className='absolute top-4 right-1 text-white bg-[#171717] p-2 rounded-full hover:text-lime-300 hover:bg-gray-900 mr-4'>
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-up-right"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </a>
          <a href={props.data.links.website} target="_blank" className='absolute bottom-2 left-2 text-white bg-[#171717] p-2 rounded-full hover:text-blue-400 hover:bg-gray-900 mr-5'>
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
        </div>
      </div>

      <div className="flex flex-row">
         {props.data.tags.map(tag => {
           return <Tag data={tag} key={tag} />
         })}
      </div>

      <h1 className='font-light tracking-wide text-2xl md:text-5xl font-mono mt-4'>{props.data.title}</h1>
    </div>
)};

const Tag = (props) => (
  <p className="border-2 border-slate-500 mr-2 mt-2 p-2 rounded-md text-sm">
    {props.data}
  </p>
)  

export default Projects;