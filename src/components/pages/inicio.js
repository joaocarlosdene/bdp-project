import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../navbar/navbar'
import Carousel from '../carousel/carousel';
import Cards from '../card/card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Titulo from '../titulo/titulo';

function inicio(){
    return(
        <>
        <Navbar/>
                <Carousel/>
                <Container>
                    <Titulo titulo="Temos o melhor para voce!"/>
                    <Row>
                    <Cards h3="titulo1"/>
                    <Cards h3="titulo2"/>
                    <Cards h3="titulo3"/>
                    </Row>
                    
                </Container>
        </>
    )  
}

export default inicio