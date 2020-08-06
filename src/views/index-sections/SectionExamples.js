
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function SectionExamples() {
  return (
    <>
      <div className='section section-dark'>
        <Container>
          <Row className='example-page'>
            <Col className='text-center' md='12'>
              {/* <a href="examples/landing.html" target="_blank">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/examples/landing-page.png")}
                  style={{ width: "100%" }}
                />
              </a> */}
              <Button
                className='btn-outline-neutral btn-round'
                color='default'
                href='https://localbitcoins.com/accounts/profile/Kik0/feedback/positive/'
                target='_blank'>
                más de 200 comentarios positivos
              </Button>
            </Col>
            <Col className='text-center' md='6'>
              {/* <a href="examples/profile.html" target="_blank">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/examples/profile-page.png")}
                  style={{ width: "100%" }}
                />
              </a> */}
              {/* <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="/profile-page"
                target="_blank"
              >
                Profile Page
              </Button> */}
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionExamples;
