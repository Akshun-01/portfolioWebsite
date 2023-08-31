import { BeakerIcon, HomeIcon, CommandLineIcon, ChatBubbleLeftEllipsisIcon} from '@heroicons/react/24/solid'

const Icon = ({name, icon}) => (
    <div className="hover:text-red-600 hover:cursor-pointer flex ">
        {icon}
        {/* {name} */}
    </div>

)

export default function FloatingNav(){
    return(
        <div className=" w-[20vw] fixed bottom-6 left-1/2 translate-x-[-50%] flex flex-row justify-around items-center bg-gray-600 p-3 rounded-xl z-10">
            <Icon name='Home' icon={<HomeIcon className="h-6 w-6 text-teal-300 mr-2 hover:text-teal-50"/>}/>
            <Icon name='TechStack' icon={<CommandLineIcon className="h-6 w-6 text-teal-300 mr-2  hover:text-teal-50" />}/>
            <Icon name='Projects' icon={<BeakerIcon className="h-6 w-6 text-teal-300 mr-2  hover:text-teal-50" />}/>
            <Icon name='Contact Me' icon={<ChatBubbleLeftEllipsisIcon className="h-6 w-6 text-teal-300 mr-2  hover:text-teal-50" />}/>
        </div>
    )
}
