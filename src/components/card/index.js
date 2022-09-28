
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cards(props) {
  return (
    <Col md className='text-center'>
        <h3>{props.h3}</h3>
    </Col>
    
    
  );
}

export default Cards;