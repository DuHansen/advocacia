import { Card } from "react-bootstrap";
import '../App.css';
import logo from "../img/facebook-color-svgrepo-com.svg";
function Basicface() {
  return (

    <a href="//facebook.com" target="_blank" rel="noreferrer" style={{textDecoration:'none'}}>
      <Card id="face" >
            <img src={logo} alt="Face" style={{height:'25px', width:'25px'}}/>
            <Card.Text style={{display:"inline-block", padding:'5px 5px'}}>Facebook</Card.Text>
      </Card>
    </a>
 
  );
}

export default Basicface;

