const VerticalText = (props) => {
    return (
        <h1 className="text-gray-400 text-7xl font-accent tracking-widest rotate-[270deg] fixed top-[50vh] left-0 translate-x-[-30%] z-0 ">
            {props.heading}
        </h1>
    )
}

export default VerticalText;