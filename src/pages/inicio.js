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
import img1 from '../images/1.png'
import img2 from '../images/2.png'
import img3 from '../images/3.png'


function inicio(){
    return(
        <>
        <Navbar/>
                <Carousel/>
                <Container>
                    <Titulo titulo="Nossos Servicos"/>
                    <Row className="justify-content-center">
                        <Cards img={img1} h3='Sistema de controle PLC, DCS e SCADA'/>
                        <Cards img={img2} h3='Parametrizacao de Dispositivos Inteligentes'/>
                        <Cards img={img3} h3='Dutos de Bombeio e Lubrificantes'/>
                    </Row>
                    <Titulo titulo="Temos o melhor para voce!"/>
                    <Timeline/>
                    
                    
                </Container>
                <Footer/>
        </>
    )  
}

export default inicio