import '../App.css';
import CardCostumizado from '../components/cardCostumizado';
import imagemprin from "../img/Rectangle.png";

export default function Inicial() {
  return (
    <div style={{height:'100%'}}>
       
      <CardCostumizado
        title="Seja bem vindo!"
        text="Escritório MG advogados"
        img= {imagemprin}
        
      />
    </div>
  );
}
