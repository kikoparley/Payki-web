//import React from "react";
import React from "react";
// import PostList from "./postList";
// reactstrap components
import {
  Button,
  Card,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function SectionLogin() {
  return (
    <>
      <div
        className='section section-image section-login'
        style={{
          backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")"
        }}>
        <Container>
          <Row>
            <Col className='mx-auto' lg='4' md='6'>
              <Card className='card-register'>
                <h1 className='title mx-auto'>Calculadora</h1>
                <h2 className='title mx-auto'>Tasa actual</h2>
                <h2 className='title mx-auto'>
                  {/* <PostList /> */}
                </h2>
                <div className='social-line text-center'>
                </div>
                <Form className='register-form'>
                  <label>Dinero a envíar</label>
                  <InputGroup className='form-group-no-border'>
                    <InputGroupAddon addonType='prepend'>
                      <InputGroupText>
                        <i className='nc-icon nc-money-coins' />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder='ingresa el monto' type='text' />
                  </InputGroup>
                  <label>Tasa actual 0.05</label>
                  <InputGroup className='form-group-no-border'>
                    <InputGroupAddon addonType='prepend'>
                      <InputGroupText>
                        <i className='nc-icon nc-bank' />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder='tasa actual 0.05' type='text' />
                  </InputGroup>
                  <Button block className='btn-round' color='danger' type='button'>
                    Descargar app
                  </Button>
                </Form>
                <div className='forgot'>
                  <Button
                    className='btn-link'
                    color='danger'
                    href='https://wa.me/573014267451'
                    onClick={(e) => e.preventDefault()}>
                    Necesitas ayuda?
                  </Button>
                </div>
              </Card>
              {/* <div className='col text-center'>
                <Button className='btn-round' outline color='neutral' href='/register-page' size='lg' target='_blank'>
                  Descargar app
                </Button>
              </div> */}
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionLogin;
