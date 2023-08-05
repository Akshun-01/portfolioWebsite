const VerticalText = (props) => {
    return (
        <h1 className="text-gray-400 text-7xl tracking-widest rotate-[270deg] absolute top-1/2 left-0 translate-x-[-20%] translate-y-[-50%] ">
            {props.heading}
        </h1>
    )
}

export default VerticalText;