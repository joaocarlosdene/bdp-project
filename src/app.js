import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/index'
import Carousel from './components/carousel';
import Cards from '../src/components/card/index';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Titulo from './components/titulo';


function App(){
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

export default App;