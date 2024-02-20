import { useMediaQuery } from "react-responsive";
import { stagger, motion } from "framer-motion";

import "./TechStack.scss";

import VerticalText from "../../components/ui/VerticalText";
import CARD_DATA from "./TechStackData";

const TechStack = () => {
  const mouseHandler = (e) => {
    for (const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  const isPhone = useMediaQuery({
    query: "(min-width: 1260px)",
  });

  return (
      <div className="outerContainer relative">
        {isPhone ? (
          <VerticalText heading="Tech Stack" className="absolute hidden"/> 
          ) : (
          <div className="">
            <h1 className="absolute text-2xl sm:text-4xl lg:text-5xl top-28 lg:top-24 left-1/2 translate-x-[-50%] font-accent tracking-widest opacity-70 ">Tech Stack</h1>
          </div>
        )}
        {/* lantern */}
        <div className="hidden xl:block fixed top-8 right-12">
          <img src="./assets/lantern.png" alt="" className="h-72"/>
        </div>
        <div className="cards" onMouseMove={mouseHandler}>
          {CARD_DATA.map((data,i) => {
            return <Card data={data} key={data.heading} num={i}/>;
          })}
        </div>
        {/* dividing line */}
        <div className='w-4/5 h-[1px] absolute bottom-5 translate-x-[-50%] left-1/2 bg-gradient-to-r from-transparent via-blue-400 opacity-60' />
      </div>
  );
}

const Card = (props) => (
  <motion.div className="card"
            initial={{opacity:0, translateY:-200}}
            animate={{opacity:1, translateY:0}}
            transition={{duration:1.5, delay: 0.1*props.num}}>
    <div className="cardContent">
      <div className="cardImage">
        <img src={props.data.image} alt={props.data.heading} className="scale-50"/>
      </div>
      <div className="cardInfoWrapper">
        <div className="cardInfo">
          <i className={props.data.image}></i>
          <div className="cardInfoTitle">
            {/* <h3>{props.data.heading}</h3> */}
            <h4>{props.data.description}</h4>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default TechStack;