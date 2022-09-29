import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../titulo/style.css'

function Titulo(props) {
  return (
    <Container className='text-center'>
      <Row>
        <Col>
        <h1 className='titulo'>{props.titulo}</h1>
        </Col>
        <hr/>
      </Row>
    </Container>
  );
}

export default Titulo;