import "./TechStack.css";
import VerticalText from "../../components/ui/VerticalText";
import CARD_DATA from "./TechStackData";

const Card = (props) => {
  console.log(props);
  return(
  <div className="card">
    <div className="cardContent">
      <div className="cardImage">
        <img src={props.data.image} alt={props.data.heading} className="scale-50"/>
      </div>
      <div className="cardInfoWrapper">
        <div className="cardInfo">
          <i className={props.data.image}></i>
          <div className="cardInfoTitle">
            <h3>{props.data.heading}</h3>
            <h4>{props.data.description}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
)};

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

  return (
      <div className="outerContainer relative">
        <VerticalText heading="Tech Stack" className="absolute"/>
        <div className="cards" onMouseMove={mouseHandler}>
          {CARD_DATA.map((data) => {
            return <Card data={data} key={data.heading} />;
          })}
        </div>
        {/* dividing line */}
        <div className='w-4/5 h-[1px] absolute bottom-1 translate-x-[-50%] left-1/2 bg-gradient-to-r from-transparent via-blue-400 opacity-60' />
      </div>
  );
}

export default TechStack;