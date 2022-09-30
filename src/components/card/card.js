
import Col from 'react-bootstrap/Col';
import '../card/card.css'

function Cards(props) {
  return (
    <Col md className='text-center fig'>
        <h3>{props.h3}</h3>
    </Col>
    
    
  );
}

export default Cards;