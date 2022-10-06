import Navbar from '../components/navbar/navbar'
import Footer from "../components/footer/footer";
import React  from 'react';
import Titulo from '../components/titulo/titulo'
import Card from '../components/card/card'
import { Col, Container, Row } from 'react-bootstrap';
import Styles from './atuacao.module.css'
import img1 from '../images/1.png'
import img2 from '../images/2.png'
import img3 from '../images/3.png'
import img4 from '../images/4.png'
import img5 from '../images/5.png'
import img6 from '../images/6.png'

function atuacao(){
    return(
        <>
            <Navbar/>
            <Titulo titulo='Atuação' />
            <Container>
            <Row className={Styles.background}>
                <Card   h3='Sistema de controle PLC, DCS e SCADA'
                        p='Com décadas de experiência em automação de processos, oferecemos serviços de consultoria em automação industrial e integração de sistemas, especificando e implementando soluções que realmente trazem resultado. '
                />
                <Card   img={img1}
                />
            </Row>
            <hr/>
            <Row className={Styles.background}>
                <Card   h3='Parametrizacao de Dispositivos Inteligentes'
                        p='Com décadas de experiência em automação de processos, oferecemos serviços de consultoria em automação industrial e integração de sistemas, especificando e implementando soluções que realmente trazem resultado. '
                />
                <Card   img={img2}
                />
            </Row>
            <hr/>
            <Row className={Styles.background}>
                <Card   h3='Dutos de Bombeio e Lubrificantes'
                        p='Com décadas de experiência em automação de processos, oferecemos serviços de consultoria em automação industrial e integração de sistemas, especificando e implementando soluções que realmente trazem resultado. '
                />
                <Card   img={img3}
                />
            </Row>
            <hr/>
            <Row className={Styles.background}>
                <Card   h3='Sistemas Mecânicos de Precisão'
                        p='Com décadas de experiência em automação de processos, oferecemos serviços de consultoria em automação industrial e integração de sistemas, especificando e implementando soluções que realmente trazem resultado. '
                />
                <Card   img={img4}
                />
            </Row>
            <hr/>
            <Row className={Styles.background}>
                <Card   h3='Sistemas Pneumáticos e Manutencao'
                        p='Com décadas de experiência em automação de processos, oferecemos serviços de consultoria em automação industrial e integração de sistemas, especificando e implementando soluções que realmente trazem resultado. '
                />
                <Card   img={img5}
                />
            </Row>
            <hr/>
            <Row className={Styles.background}>
                <Card   h3='Sistemas manipulação CNC por medida'
                        p='Com décadas de experiência em automação de processos, oferecemos serviços de consultoria em automação industrial e integração de sistemas, especificando e implementando soluções que realmente trazem resultado. '
                />
                <Card   img={img6}
                />
            </Row>
            </Container>
            <Footer/>
        </>
        
    )
    
}

export default atuacao