
const Footer = () => {
  return (
    <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-background-color dark:text-neutral-200 lg:text-left z-20 overflow-hidden absolute w-full">
      
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* <!-- Tailwind Elements section --> */}
          <div className="">
            <h1 className='font-accent text-3xl text-header-primary'>AKSHUN</h1>
            <p>
                Unveiling the Art of Digital Alchemy <br/> Where Ideas Transform into Reality
            </p>
          </div>
          {/* <!-- Products section --> */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Navigation
            </h6>
            <p className="mb-4">
              <a href="/" className="text-neutral-600 dark:text-neutral-200 hover:text-header-primary">
                Home
              </a>
            </p>
            <p className="mb-4">
              <a href="/techstack" className="text-neutral-600 dark:text-neutral-200 hover:text-header-primary">
                TechStack
              </a>
            </p>
            <p className="mb-4">
              <a href="/projects" className="text-neutral-600 dark:text-neutral-200 hover:text-header-primary">
                Projects
              </a>
            </p>
            <p className="mb-4">
              <a href="/contact" className="text-neutral-600 dark:text-neutral-200 hover:text-header-primary">
                Contact Me
              </a>
            </p>
          </div>
          {/* <!-- Useful links section --> */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Socials
            </h6>
            <p className="mb-4">
              <a href="https://github.com/Akshun-01" target="_blank" className="text-neutral-600 dark:text-neutral-200 hover:text-header-primary">
                Github
              </a>
            </p>
            <p className="mb-4">
              <a href="https://www.linkedin.com/in/akshun-kuthiala-194672223/" target="_blank"className="text-neutral-600 dark:text-neutral-200 hover:text-header-primary">
                LinkedIn
              </a>
            </p>
          </div>
          {/* <!-- Contact section --> */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              kuthialaakshun@gmail.com
            </p>
            {/* <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              +91 88943 43352
            </p> */}
          </div>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-900">
        <span>© 2023 Copyright:</span>
        <a
          className="font-semibold text-neutral-600 dark:text-neutral-400"
          href="https://tailwind-elements.com/"
        >
        Akshun Kuthiala
        </a>
      </div>
    </footer>
  );
};

export default Footer;
