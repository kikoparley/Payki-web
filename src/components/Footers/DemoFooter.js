/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className='footer footer-black footer-white'>
      <Container>
        {/* <Row>
          <nav className='footer-nav'>
            <ul>
              <li>
                <a href='https://www.payki.co' target='_blank'>
                  Payki.co
                </a>
              </li>

            </ul>
          </nav>
          </Row> */}
          <div>
          <div className='footer-nav'>
            <a>
              © {new Date().getFullYear()}, Diseñado con <i className='fa fa-heart heart' /> En Maracaibo. Desarrollado
              en Bogotá
            </a>
          </div>
          </div>
      </Container>
    </footer>
  );
}

export default DemoFooter;
