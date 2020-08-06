import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";
// reactstrap components

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar";
// import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections
// import SectionButtons from "views/index-sections/SectionButtons.js";
// import SectionNavbars from "views/index-sections/SectionNavbars.js";
// import SectionNavigation from "views/index-sections/SectionNavigation.js";
// import SectionProgress from "views/index-sections/SectionProgress.js";
// import SectionNotifications from "views/index-sections/SectionNotifications.js";
// import SectionTypography from "views/index-sections/SectionTypography.js";
// import SectionJavaScript from "views/index-sections/SectionJavaScript.js";
// import SectionCarousel from "views/index-sections/SectionCarousel.js";
// import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons.js";
import SectionDark from "views/index-sections/SectionDark.js";
// //import SectionLogin from "views/index-sections/SectionLogin.js";
import SectionExamples from "views/index-sections/SectionExamples.js";
import SectionDownload from "views/index-sections/SectionDownload.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className='main'>
        <SectionDark />
        {/*<SectionLogin />
         <SectionButtons />
        <SectionNavbars />
        <SectionNavigation />
        <SectionProgress />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavaScript />
        <SectionCarousel />
        <SectionNucleoIcons />*/}
        <div className='section section-dark text-center'>
          <Container>
            <h2 className='title'>Que dicen nuestros clientes?</h2>
            <Row>
              <Col md='4'>
                <Card className='card-profile card-plain'>
                  <div className='card-avatar'>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      <img alt='...' src={require("assets/img/faces/Andrea2.jpeg")} />
                    </a>
                  </div>
                  <CardBody>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      <div className='author'>
                        <CardTitle tag='h4'>Andrea Villarreal</CardTitle>
                        <h6 className='card-category'>Vendedora</h6>
                      </div>
                    </a>
                    <p className='card-description text-center'>
                      Siempre hago mis giros con Payki. Tengo más de 1 año enviando el dinero para mi familia en
                      Venezuela. Siempre llega rápido y con la mejor tasa.
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md='4'>
                <Card className='card-profile card-plain'>
                  <div className='card-avatar'>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      <img alt='...' src={require("assets/img/faces/Daniela.jpeg")} />
                    </a>
                  </div>
                  <CardBody>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      <div className='author'>
                        <CardTitle tag='h4'>Daniela Padrón</CardTitle>
                        <h6 className='card-category'>Agente Call Center</h6>
                      </div>
                    </a>
                    <p className='card-description text-center'>
                      Encantada con Payki. Siempre la recomiendo a mis amigas, ellos mantienen la mejor tasa y la
                      atención es excelente, LOS AMO.
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md='4'>
                <Card className='card-profile card-plain'>
                  <div className='card-avatar'>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      <img alt='...' src={require("assets/img/faces/emily.jpeg")} />
                    </a>
                  </div>
                  <CardBody>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      <div className='author'>
                        <CardTitle tag='h4'>Emily Fernández</CardTitle>
                        <h6 className='card-category'>Agente Call Center Bilingüe</h6>
                      </div>
                    </a>
                    <p className='card-description text-center'>
                      Puedo decir que me siento más tranquila desde que envió el dinero a mi familia usando Payki. Ellos
                      me dan esa tranquilidad que otras empresas o plataformas no consiguen darme.
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <SectionExamples />
        <SectionDownload />
        <DemoFooter />
      </div>
    </>
  );
}

export default Index;
