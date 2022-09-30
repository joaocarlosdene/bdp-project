
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {faBuilding} from '@fortawesome/free-regular-svg-icons'
import '../card/card.css'

function Cards(props) {
  return (
    <Col md className='text-center fig'>
        <FontAwesomeIcon icon={faBuilding} />
        <h3>{props.h3}</h3>
    </Col>
    
    
  );
}

export default Cards;