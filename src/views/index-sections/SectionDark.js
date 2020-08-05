//import React from "react";
import React from "react";
// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";
// core components

function SectionDark() {


  return (
    <>
      <div className='section section-dark'>
        <Container>
          <Row>
            <Col className='ml-auto mr-auto text-center' md='8'>
              <h2 className='title'>Envía dinero en tiempo record</h2>
              <p className='description'>
                Mediante la App de Payki puedes enviarles dinero a tus familiares en Venezuela desde Colombia en tiempo
                record. No te arriesgues con casas de cambio de dudosa procedencia, utiliza Payki y vive una experiencia
                de tranquilidad absoluta al saber que el dinero le llega a tu familia en menos de 1 hora.
              </p>
            </Col>
          </Row>
          <Row></Row>
          <br />
          <br />
          <Row>
            <Col md='4'>
              <div className='info'>
                <div className='icon icon-info'>
                  <i className='fa fa-android' />
                </div>
                <div className='description'>
                  <h4 className='info-title'>1.- Descarga la APP</h4>
                  <p className='description'>
                    Descarga Payki Para Android desde la Play Store de Google, selecciona el monto a enviar y completa
                    los datos de la persona que recibe el Dinero en Venezuela.
                  </p>
                  <Button className='btn-round mr-1'  color='success' href='https://play.google.com/store/apps/details?id=io.ionic.PaykiApp&hl=es_419'>
                  <i className='fa fa-android' />Descarga para android
                  </Button>
                </div>
              </div>
            </Col>
            <Col md='4'>
              <div className='info'>
                <div className='icon icon-info'>
                  <i className='fa fa-list' />
                </div>
                <div className='description'>
                  <h4 className='info-title'>2.- Sigue los pasos y selecciona el método de pago</h4>
                  <p>
                    Contamos con más de 20 medios de pago diferentes, integrados dentro de la App. Desde la pasarela
                    (EpayCo) ; Puedes pagar con Tarjeta de crédito, vía PSE (Debito de tu cuenta en COLOMBIA), Efecty,
                    Baloto.
                  </p>
                  {/* <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button> */}
                </div>
              </div>
            </Col>
            <Col md='4'>
              <div className='info'>
                <div className='icon icon-info'>
                  <i className='fa fa-money' />
                </div>
                <div className='description'>
                  <h4 className='info-title'>3.- Recibe el dinero en Venezuela</h4>
                  <p>
                    Te mantenemos actualizado del proceso de tu transferencia, en el momento que enviamos el dinero te
                    confirmamos directamente en la APP de PayKi, vía correo electrónico te llega un detalle de tu
                    transacción y en Payki puedes ver tu historial de transacciones en todo momento.
                  </p>
                  {/* <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button> */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionDark;
