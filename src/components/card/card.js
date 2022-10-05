
import Col from 'react-bootstrap/Col';
import '../card/card.css'
import React  from 'react';
import { Link } from 'react-router-dom';

function Cards(props) {
  return (
    <Col md className='text-center fig'>
        <Link className='text' to='/atuacao'>
          <img className='img-col' src={props.img}></img>
          <h3>{props.h3}</h3>
          <p className='leia'>LEIA MAIS... </p>
        </Link>
        
    </Col>
    
    
  );
}

export default Cards;