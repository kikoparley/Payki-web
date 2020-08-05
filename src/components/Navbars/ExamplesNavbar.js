import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} color-on-scroll='300' expand='lg'>
      <Container>
        <div className='navbar-translate'>
          <NavbarBrand data-placement='bottom' to='/index' target='_blank' title='Hecho con amor' tag={Link}>
            Payki.co
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}>
            <span className='navbar-toggler-bar bar1' />
            <span className='navbar-toggler-bar bar2' />
            <span className='navbar-toggler-bar bar3' />
          </button>
        </div>
        <Collapse className='justify-content-end' navbar isOpen={navbarCollapse}>
          <Nav navbar>
            {/* <NavItem>
              <NavLink href='https://payki.co/app' target='_blank'>
                <i className='fa fa-sign-in' /> Iniciar Sesión
              </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink href='https://play.google.com/store/apps/details?id=io.ionic.PaykiApp&hl=es_419' target='_blank'>
                <i></i>
                <i className='fa fa-android' /> Descarga para Android
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement='bottom'
                href='https://twitter.com/Alexfrnndz'
                target='_blank'
                title='Sigueme Twitter'>
                <i className='fa fa-twitter' />
                <p className='d-lg-none'>Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement='bottom'
                href='https://www.facebook.com/Cambiospayki-2548982702006115/'
                target='_blank'
                title='Me gusta Facebook'>
                <i className='fa fa-facebook-square' />
                <p className='d-lg-none'>Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              {/* <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/Paykico"
                target="_blank"
                title="Siguenos Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink> */}
            </NavItem>
            <NavItem>
              <NavLink
                data-placement='bottom'
                href='https://wa.me/573014267451'
                target='_blank'
                title='Escribenos un whatsapp'>
                <i className='fa fa-whatsapp' />
                <p className='d-lg-none'>Whatsapp</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default ExamplesNavbar;
