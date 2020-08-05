
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className='page-header section-dark'
        style={{
          backgroundImage: "url(" + require("assets/img/banner-ppal-index.png") + ")",
        }}>
        <div className='filter' />
        <div className='content-center'>
          <Container>
            <div className='title-brand'>
              <h1 className='presentation-title'>Payki.co</h1>
              {/* <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div> */}
              <div className='fog-low right'>
                <img alt='...' src={require("assets/img/fog-low.png")} />
              </div>
            </div>
            <h2 className='presentation-subtitle text-center'>Envía dinero a Venezuela en tiempo record.</h2>
          </Container>
        </div>
        <div
          className='moving-clouds'
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
          }}
        />
        <h6 className='category category-absolute'>
          En menos de 1 hora tus familiares tendrán el dinero disponible en su banco favorito{" "}
        </h6>
      </div>
    </>
  );
}

export default IndexHeader;
