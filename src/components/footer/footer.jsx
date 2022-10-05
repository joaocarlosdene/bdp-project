import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Style from './footer.module.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React  from 'react';

function Footer() {
    return (
      <div className={Style.background}>
        
        <Row className="justify-content-center">
        <Col md={3} className={Style.col}>
        <h3 className={Style.h3}>Sobre a Empresa</h3>
        <hr/>
        <h5>Projetos de engenharia de controle e automação de variados tipos.</h5>
        <Link className={Style.link} to="/quem_somos">Clique Aqui e Conheca</Link>
        </Col>
        <Col md={2} className={Style.col}>
          <h3 className={Style.h3}>Links</h3>
          <hr/>
          <Link className={Style.link} to="/">Inicio</Link>
          <Link className={Style.link} to="/quem_somos">Quem Somos</Link>
          <Link className={Style.link} to="/atuacao">Atuação</Link>
          <Link className={Style.link} to="/contato">Contato</Link>
        </Col>
        <Col md={3} className={Style.col}>
        <h3 className={Style.h3}>Newsletter</h3>
        <hr/>
        <p>Subscreva a nossa newsletter. <br/>Fique a par das novidades</p>
        <InputGroup className={Style.input}>  
        <Form.Control
          placeholder="Digite seu e-mail:"
          aria-label="Digite seu e-mail:"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          <span className={Style.span} >Enviar</span>
        </Button>
      </InputGroup>
        </Col>
        <Col md={4} className={Style.col}>
        
        <h3 className={Style.h3}>Lideranca no Mercado</h3>
        <hr/>
        <p>Somos uma equipe jovem e altamente qualificada. Contamos com suporte e comprometimento para entregar sempre o melhor para nossos clientes.</p>
        <Link className={Style.link} to="/contato">Entre em Contato Conosco</Link>
        </Col>
        </Row>
        <hr/>
        <p className="text-center">Copyright © 2022 Techat Engenharia | Todos Direitos Reservados</p>
        
      </div>
    );
  }
  
  export default Footer;