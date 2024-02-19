import { useMediaQuery } from 'react-responsive';
import VerticalText from '../../components/ui/VerticalText'

const ContactForm = () => {
  const isPhone = useMediaQuery({
    query: "(min-width: 1260px)",
  });

  return (
    <div className="bg-[url('./assets/contactbg.png')] bg-no-repeat bg-cover text-white flex items-center justify-center relative py-12">
        {isPhone ? 
          <VerticalText heading="Contact Me" className="absolute hidden"/> : (
          <div className="">
            <h1 className="absolute text-2xl top-28 sm:top-24 lg:text-5xl lg:top-24 left-1/2 translate-x-[-50%] font-accent tracking-widest opacity-70 ">Contact Me</h1>
          </div>
          )
        }
        <section className="lg:-translate-y-16 ">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              {/* <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2> */}
              <p className="mb-8 lg:mb-16 font-normal text-center text-red-200 text-2xl opacity-0">Got some ideas for a project? Let's bring it to life!Let's bring it to life!</p>
              <form action="#" className="space-y-8">
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium dark:text-gray-300">Your email</label>
                      <input type="email" id="email" className="shadow-sm text-sm rounded-lg block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-zinc-400 dark:text-white dark:shadow-sm-light" placeholder="mail@gmail.com" required />
                  </div>
                  <div>
                      <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                      <input type="text" id="subject" className="shadow-sm text-sm rounded-lg block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-zinc-400 dark:text-white dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                  </div>
                  <div className="sm:col-span-2">
                      <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                      <textarea id="message" rows="6" className="shadow-sm text-sm rounded-lg block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-zinc-400 dark:text-white dark:shadow-sm-light" placeholder="Leave a comment..."></textarea>
                  </div>
                  <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-header-primary sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
              </form>
          </div>
        </section>
        {/* dividing line */}
        <div className='w-4/5 h-[1px] absolute bottom-4 translate-x-[-50%] left-1/2 bg-gradient-to-r from-transparent via-blue-400 opacity-60' />
        {/* right daruma */}
        <div className="hidden lg:block absolute right-12 bottom-24">
          <img src="./navbar/daruma.png" alt="" className='h-[12vw] opacity-70 ' />
        </div>
    </div>
  )
}

export default ContactForm