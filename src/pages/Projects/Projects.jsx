// import './Projects.css';
import PROJECT_DATA from "./ProjectData";
import VerticalText from "../../components/ui/VerticalText";

const ProjectCard = (props) => {
  console.log(props.data);
  return (
  <div className='m-4'>
     <div className="h-72 w-80 bg-white hover:bg-red-400 rounded-md overflow-hidden relative p-6">
       <img src={props.data.image} alt={props.data.title} className="object-cover" />
       <div className="w-full absolute bottom-3 translate-x-[60%] flex">
         <a href={props.data.links.github} target="_blank" className='text-white bg-gray-500 p-2 rounded-full hover:text-lime-300 mr-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
         </a>
         <a href={props.data.links.website} target="_blank" className=' text-white bg-gray-500 p-2 rounded-full hover:text-blue-400 mr-5'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
         </a>
       </div>
     </div>

     <div className="flex flex-row">
        {props.data.tags.map(tag => {
          return <Tag data={tag} key={tag} />
        })}
     </div>

     <h1 className='font-light tracking-wide text-black text-4xl font-mono'>{props.data.title}</h1>
   </div>
)};

const Tag = (props) => (
<p className="border-2 border-slate-900 mr-2 mt-2 p-2 rounded-md text-sm">
  {props.data}
</p>
)

const Projects = () => {
  // {PROJECT_DATA.map(project => console.log(project))}
  return (
    <div className="bg-slate-500 text-white h-fit flex items-center justify-center relative">
      <VerticalText heading="Projects" className="absolute"/>
      <div className="w-[70%] flex flex-wrap items-center justify-center">
        {PROJECT_DATA.map(data => {
              return <ProjectCard data={data} key={data.title}/>
        })}
         </div>
    </div>
  )
}

export default Projects;