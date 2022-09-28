import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../images/carousel1.png'
import img2 from '../../images/carousel2.png'
import img3 from '../../images/carousel3.png'
import '../carousel/style.css'

function CarouselFade() {
  return (
    <Carousel fade interval={1000} className='carousel-layout'>
      <Carousel.Item>
        <img
            id='carousel-img'
          className="carousel-img d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption className='titulo'>
          <h3 id='main-title'>Quase 10 anos realizando sonhos.</h3>
          <p id='main-p'>Possuimos os melhores profissionais para trazer o melhor aos nossos clientes.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
            id='carousel-img'
          className=" d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption className='titulo'>
          <h3 id='main-title'>Ganhe mais produtividade.</h3>
          <p id='main-p'>Reconstruimos se necessario todo o processo da sua empresa.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
            id='carousel-img'
          className=" d-block w-100"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption className='titulo'>
          <h3 id='main-title'>Comprometimento e Responsabilidade</h3>
          <p id='main-p'>
            Deixe sua empresa nas maos de quem entende.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;