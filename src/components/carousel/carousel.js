import Carousel from 'react-bootstrap/Carousel';
import Carousel1 from '../../images/carousel1.png'
import Carousel2 from '../../images/carousel2.png'
import Carousel3 from '../../images/carousel3.png'
import '../carousel/carousel.css'
import React  from 'react';

function CarouselFade() {
  return (
    <Carousel fade interval={2000} className='carousel-layout'>
      <Carousel.Item>
        <img
            id='carousel-img'
          className="carousel-img d-block w-100"
          src={Carousel1}
          alt="First slide"
        />
        <Carousel.Caption className='titulo-carousel'>
          <h1 id='main-title'>Quase 10 anos realizando sonhos.</h1>
          <p id='main-p'>Possuimos os melhores profissionais para trazer o melhor aos nossos clientes.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
            id='carousel-img'
          className=" d-block w-100"
          src={Carousel2}
          alt="Second slide"
        />

        <Carousel.Caption className='titulo-carousel'>
          <h1 id='main-title'>Ganhe mais produtividade.</h1>
          <p id='main-p'>Reconstruimos se necessario todo o processo da sua empresa.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
            id='carousel-img'
          className=" d-block w-100"
          src={Carousel3}
          alt="Third slide"
        />

        <Carousel.Caption className='titulo-carousel'>
          <h1 id='main-title'>Comprometimento e Responsabilidade.</h1>
          <p id='main-p'>
            Deixe sua empresa nas maos de quem entende.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;