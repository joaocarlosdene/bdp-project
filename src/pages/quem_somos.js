import Navbar from '../components/navbar/navbar'
import Footer from "../components/footer/footer";
import React, { Component }  from 'react';
import Titulo from '../components/titulo/titulo'
import Card from '../components/card/card'
import Styles from './quem_somos.module.css'
import { Container, Row } from 'react-bootstrap';
 
 function quem_somos(){
    return(
        <>
            <Navbar/>
            <Titulo titulo='Quem Somos'/>
            <Container>
            <Card className={Styles.card} h3='Automação Industrial, Automação de Processos, Manutenção e Resultado Garantido.' p='A necessidade de automação na indústria e nos mais diversos segmentos está associada, entre diversos aspectos, às possibilidades de aumentar a velocidade de processamento das informações, uma vez que as operações estão cada vez mais complexas e variáveis, necessitando de um grande número de controles e mecanismos de regulação para permitir decisões mais ágeis e, portanto, aumentar os níveis de produtividade e eficiência do processo produtivo dentro das premissas da excelência operacional.
                        A automação permite economias de energia, força de trabalho e matérias-primas, um melhor controle de qualidade do produto, maior utilização da planta, aumenta a produtividade e a segurança operacional. Em essência, a automação nas indústrias permite elevar os níveis de continuidade e de controle global do processo com maior eficiência, aproximar ao máximo a produção real à capacidade nominal da planta, ao reduzir ao mínimo possível as horas paradas, de manutenção corretiva e a falta de matéria-prima.
                        Além disso, com o advento dos sistemas de automação baseado em redes de campo e tecnologia digital, pode-se ter vários benefícios em termos de manutenção e aumentar a disponibilidade e segurança operacional. 
                        E ainda, a  automação extrapola os limites de chão de fábrica, ela continua após o produto acabado,  atingindo fronteiras mais abrangentes; a  automação do negócio.'/>

            </Container>
            <Footer/>
        </>
        
    )
    
}

export default quem_somos
