import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar/navbar'
import Carousel from '../components/carousel/carousel';
import Cards from '../components/card/card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Titulo from '../components/titulo/titulo';
import Footer from "../components/footer/footer";
import Timeline from '../components/timeline/timeline'


function inicio(){
    return(
        <>
        <Navbar/>
                <Carousel/>
                <Container>
                    <Titulo titulo="Temos o melhor para voce!"/>
                    <Row>
                    <Timeline/>
                    </Row>
                    
                </Container>
                <Footer/>
        </>
    )  
}

export default inicio