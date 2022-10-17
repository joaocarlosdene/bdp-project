import Carousel from 'react-bootstrap/Carousel';
import Carousel1 from '../../images/carousel1.png'
import Carousel2 from '../../images/carousel2.png'
import Carousel3 from '../../images/carousel3.png'
import Styles from '../carousel/carousel.module.css'
import React  from 'react';

function CarouselFade() {
  return (
    <Carousel fade interval={2000} className={Styles.carousel_layout}>
      <Carousel.Item className={Styles.carousel_item}>
        <img
          className="d-block w-100"
          src={Carousel1}
          alt="First slide"
        />
        <Carousel.Caption className={Styles.titulo_carousel}>
          <h1 className={Styles.main_title}>Quase 10 anos realizando sonhos.</h1>
          <p className={Styles.main_p}>Possuimos os melhores profissionais para trazer o melhor aos nossos clientes.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={Styles.carousel_item}>
        <img
          className=" d-block w-100"
          src={Carousel2}
          alt="Second slide"
        />

        <Carousel.Caption className={Styles.titulo_carousel}>
          <h1 className={Styles.main_title}>Ganhe mais produtividade.</h1>
          <p className={Styles.main_p}>Reconstruimos se necessario todo o processo da sua empresa.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={Styles.carousel_item}>
        <img
          className=" d-block w-100"
          src={Carousel3}
          alt="Third slide"
        />

        <Carousel.Caption className={Styles.titulo_carousel}>
          <h1 className={Styles.main_title}>Comprometimento e Responsabilidade.</h1>
          <p className={Styles.main_p}>
            Deixe sua empresa nas maos de quem entende.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;