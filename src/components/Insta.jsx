import { Card } from "react-bootstrap";
import '../App.css';
import logo from "../img/instagram-2-1-logo-svgrepo-com.svg";
function Basicinsta() {
  return (

    <a href="//instagram.com" target="_blank" rel="noreferrer" style={{textDecoration:'none'}}>
      <Card id="insta" >
            <img src={logo} alt="Instagram" style={{height:'25px', width:'25px'}}/>
            <Card.Text style={{display:"inline-block", padding:'5px 5px'}}>Instagram</Card.Text>
      </Card>
    </a>
 
  );
}

export default Basicinsta;