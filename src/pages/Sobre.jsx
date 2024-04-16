import '../App.css';
import Sobre from "../components/Sobre";
import imagem from "../img/lawyer 1.png";

export default function Inicial() {
  return (
    <div >
       
      <Sobre
      
        title="Quem somos"
        text="O escritório Mg Advogados Associados, presta serviços jurídicos de maneira segmentada, visando a pessoalidade no atendimento e foco no objetivo do cliente.   "
        img= {imagem}
        name1= "Raquel Fernandes Magalhães Graeff"
        oab1 = "ADVOGADA | OAB-RO 12.830"
        name2= "Valdemar Amaral Mendes"
        oab2 = "ADVOGADO | OAB-RO 12.930"
     />

    </div>
  );
}
