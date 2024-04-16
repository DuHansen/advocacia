import Wave from 'react-wavify';
import Timelinecontatos from "../components/TimelineContatos.jsx";
export default function Contato() {
    return (
      <div style={{height: "100vh"}}>
       <Timelinecontatos></Timelinecontatos>
       <Wave fill="url(#gradient)">
    <defs>
        <linearGradient id="gradient" gradientTransform="rotate(90)">
        <stop offset="5%"  stopColor="#B18A2E" />
        <stop offset="95%" stopColor="#102E4A" />
        </linearGradient>
    </defs>
    </Wave>
      </div>
    );
  }