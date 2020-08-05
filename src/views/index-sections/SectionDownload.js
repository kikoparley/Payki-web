import React from "react";

// reactstrap components
import { Button, Container, Row, Col, } from "reactstrap";

// core components

function SectionDownload() {
  return (
    <>
      <div className='section'>
        <Container className='text-center'>
          {/* <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Do you like what you see?</h2>
              <p className="description">
                Cause if you do, it can be yours for Free. Hit the button below
                and download it. Start a new project or give an old Bootstrap 4
                project a new look.
              </p>
            </Col>
            <Col className="ml-auto mr-auto download-area" md="5">
              <Button
                className="btn-round"
                color="danger"
                href="http://www.creative-tim.com/product/paper-kit-react?ref=pkr-index-page"
                target="_blank"
              >
                Download free React
              </Button>
            </Col>
          </Row> */}
          {/* <Row className="text-center upgrade-pro">
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="title">Want more?</h2>
              <p className="description">
                We're going to launch{" "}
                <a className="text-danger" href="#pablo" disabled>
                  Paper Kit PRO React in a few weeks
                </a>
                . It will have a huge number of components, sections and example
                pages.
              </p>
            </Col>
            <Col className="ml-auto mr-auto" sm="5">
              <Button className="btn-round" color="info" href="#pablo" disabled>
                <i aria-hidden={true} className="nc-icon nc-spaceship" />{" "}
                Upgrade to PRO
              </Button>
            </Col>
          </Row> */}
          <Row className='justify-content-md-center sharing-area text-center'>
            <Col className='text-center' lg='8' md='12'>
              <Button
                href='https://play.google.com/store/apps/details?id=io.ionic.PaykiApp&hl=es_419'
                className='btn-round mr-1'
                color='success'
                target='_blank'
                inline>
                <i className='fa fa-android' />
                Descargar para Android
              </Button>
              {/* <Button
                href='https://payki.co/app/'
                className='btn-round mr-1'
                color='success'
                target='_blank'
                inline>
                <i className='fa fa-sign-in' />
                Iniciar sesión
              </Button> */}
              <h3>Gracias por visitarnos!</h3>
            </Col>
            <Col className='text-center' lg='8' md='12'>
              <Button
                className='twitter-sharrre btn-round'
                color='twitter-bg'
                href='https://twitter.com/Alexfrnndz'
                id='tooltip3373767'>
                <i className='fa fa-twitter' /> Twitter
              </Button>
              <Button
                className='facebook-sharrre btn-round ml-2'
                color='facebook-bg'
                href='https://www.facebook.com/Cambiospayki-2548982702006115/'
                id='tooltip68961360'>
                <i className='fa fa-facebook-square' /> Facebook
              </Button>
              <Button
                className='sharrre btn-round ml-2'
                color='primary'
                href='https://wa.me/573014267451'
                target='_blank'
                id='tooltip864353654'>
                <i className='fa fa-whatsapp'/> WhatsApp
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionDownload;
