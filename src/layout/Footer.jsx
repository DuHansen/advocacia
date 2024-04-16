import { Col, Container, Row } from "react-bootstrap";
import Mapa from "../components/App.jsx";
import Basicface from "../components/Facebook.jsx";
import Basicinsta from "../components/Insta.jsx";

export default function Footer() {
  return (
    <Container style={{ padding:"10px 10px 10px 10px", justifyContent: 'center', alignItems: 'center', borderColor: 'black'}}>
      <Row>
        <Col lg={4} sm={12}>
          <div>
            <h4>Sobre a empresa</h4>
            <p>Av Visconde de Taunay 666666</p>
          </div>
        </Col>
        <Col lg={4} sm={12} style={{textDecoration: 'none'}}>

            <h4>Redes sociais</h4>
          
            <Row>
              <Basicface></Basicface>
            </Row>

            <Row>
               <Basicinsta></Basicinsta>
            </Row>
        </Col>
        <Col lg={4} sm={12}>
          <Mapa />
        </Col>
      </Row>
    </Container>
  );
}