import React from "react";
//import PostList from "./postList";
// reactstrap components
import { Button, Container } from "reactstrap";
import PostList from "../postList";
// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform = "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + require("assets/img/banner-ppal-index.png") + ")",
        }}
        className='page-header'
        data-parallax={true}
        ref={pageHeader}>
        <div className='filter' />
        <Container>
          <div className='motto text-center'>
            {/* <h1>Bienvenido a </h1> */}
            <h1>PAYKI</h1>
            <h2 className='title'>
              {" "}
              TASA PAYKI <PostList />
            </h2>
            <h3 className='presentation-subtitle text-center'>Giros disponibles en 1 hora o menos.</h3>
            <p className='presentation-subtitle text-center'>Más de 3000 transacciones exitosas</p>
            <br />
            <Button
              href='https://play.google.com/store/apps/details?id=io.ionic.PaykiApp&hl=es_419'
              className='btn-round mr-1'
              color='neutral'
              target='_blank'
              outline>
              <i className='fa fa-android' />
              Descargar para Android
            </Button>

            {/* <Button
              className='btn-round'
              color='neutral'
              type='button'
              outline
              data-placement='bottom'
              href='https://wa.me/573014267451'
              target='_blank'
              title='Escribenos un whatsapp'>
              <i className='fa fa-whatsapp' />
              <p className='d-lg-none'></p> Whatsapp
            </Button> */}
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
