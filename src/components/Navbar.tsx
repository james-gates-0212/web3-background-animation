import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  const [expand, updateExpanded] = useState<boolean | string>(false);
  const [navColor, updateNavbar] = useState(false);

  const { pathname } = useLocation();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener('scroll', scrollHandler);

  return (
    <Navbar
      expanded={Boolean(expand)}
      expand="md"
      variant="dark"
      className={[navColor ? 'sticky' : false].filter(Boolean).join('')}
      fixed="top"
    >
      <Container>
        <Navbar.Brand as={Link} to={'/'} className="d-flex white">
          Web3 Background Animation
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : 'expanded');
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" defaultActiveKey="#home">
            <Nav.Item className={pathname == '/' ? 'active' : undefined}>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={pathname == '/about' ? 'active' : undefined}>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
