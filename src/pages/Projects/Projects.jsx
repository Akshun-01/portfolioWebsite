// import './Projects.css';

const PROJECT_DATA = [
  {
    image : "/projects/dummy.png",
    links : {github:"github.com", website: "website.com"},
    tags : ["frontend", "ui/ux", "react"],
    title : "Amber"
  },
  {
    image : "/projects/dummy2.png",
    links : {github:"github2.com", website: "website2.com"},
    tags : ["ui/ux", "figma"],
    title : "NINJA"
  },
]

// const ProjectCard = (props) => (
//   <div className='h-6 bg-white rounded-md overflow-hidden'>
//     <div className="h-max object-cover">
//       <img src={props.data.image} alt={props.data.title} />
//       <div className="absolute right-2 flex flex-col">
//         <span className='bg-blue-600 text-white'>{props.data.links.github}</span>
//         <span className='bg-blue-600 text-white'>{props.data.links.website}</span>
//       </div>
//     </div>

//     <div className="flex flex-row justify-between">
//       {props.data.tags.map((tag) =>{
//         <Tag data={tag} key={tag} />
//       })}
//     </div>

//     <h1 className='font-bold tracking-wider'>{props.data.title}</h1>
//   </div>
// );

// const Tag = (props) => (
// <p className='bg-black text-white text-center '>
//   {props.data}
// </p>
// )

const Projects = () => {
  return (
    <div className="bg-slate-500 text-white h-[100vh] flex items-center justify-center">
      {/* {PROJECT_DATA.map(data => {
             <ProjectCard data={data} key={data.title}/>
      })} */}
    <div className='m-2'>
     <div className="h-100 w-80 bg-white hover:bg-red-400 rounded-md overflow-hidden relative p-6">
       <img src="projects/dummy.png" alt="image" className="object-cover" />
       <div className="w-full absolute bottom-0  flex flex-col translate-x-40">
         <span className=' text-black'>Github</span>
         <span className='text-black'>Website URL</span>
       </div>
     </div>

     <div className="flex flex-row">
       <p className="bg-slate-900 mr-2 mt-2 p-2 rounded-md">Web Development</p>
       <p className="bg-slate-900 mr-2 mt-2 p-2 rounded-md">ui/ux</p>
     </div>

     <h1 className='font-bold tracking-wider text-black text-5xl font-mono'>AMBER</h1>
   </div>
   </div>
  )
}

export default Projects;