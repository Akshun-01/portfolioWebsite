
export default function Navbar(){
    return(
        <div className="fixed w-screen h-12 bg-neutral-700 text-white flex flex-row items-center justify-between p-8 z-10">
            <h1 className='font-accent text-3xl text-header-primary'>AKSHUN</h1>
            <div className="flex flex-row ">
                <a className='mr-8' href="https://www.linkedin.com/in/akshun-kuthiala-194672223/" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a className='mr-8' href="https://github.com/Akshun-01" target='_blank'>           
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
            </div>
            <div className="flex flex-row">
                {['Home', 'About', 'Skills', 'Projects'].map(el=>{
                    return <Link element={el} />;
                })}
            </div>
            {/* <div className="mix-blend-multiply absolute left-0">
                <img src="./assets/headerTexture.jpg" alt="" />
            </div> */}
        </div>
    )
}

const Link = (props) => (
    <p className='cursor-pointer relative mr-6 text-header-primary after:content-[""] after:h-[1.5px] after:w-0 after:absolute after:left-0 after:bottom-[-2px] after:rounded-full after:bg-header-primary after:duration-300 hover:after:w-full hover:text-white'>{props.element}</p>
)