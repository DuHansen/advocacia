import { Card } from "react-bootstrap";
import '../App.css';
import BasicExample from "../components/Acordeão";
import Flip from "../components/CardFlip";
export default function Sobre(props) {
  
  return (
    
    <Card style={{background: '#ffffff', marginTop: '15vh', border:'none'}}>
        {
            props?.img && (
              <>
                <Card.Img variant="top" src={props.img} style={{position: "relative", backgroundColor:'#102E4A'}}/>
              </>

                )
        }

  
    <Card.Title style={{color:"Black", textAlign: 'center', justifyContent: 'center'}}>{props.title}</Card.Title>
    
    <Card.Body className="card-body-sobre">
      
        <Card style= {{ backgroundColor:'#ffffff', border:'none'}}>
        <Card.Text  style={{  backgroundColor:"#ffffff",  color:"black", padding:"10px 10px 10px 10px"}}>{props.text}</Card.Text>
        <Card.Text  style={{  backgroundColor:"#ffffff",  color:"black", padding:"10px 10px 10px 10px"}}>{props.text}</Card.Text>
        <Card.Text  style={{  backgroundColor:"#ffffff",  color:"black", padding:"10px 10px 10px 10px"}}>{props.text}</Card.Text>
        </Card>
        <Card style= {{ backgroundColor:'#ffffff', border:'none'}}>
        
        <Flip></Flip>
        
        <Card.Title>{props.name1}</Card.Title>
        <Card.Text>{props.oab1}</Card.Text>
        <Card.Title>{props.name2}</Card.Title>
        <Card.Text>{props.oab2}</Card.Text>
        </Card>
        
    </Card.Body>
        <BasicExample></BasicExample>
    </Card>
    );
}