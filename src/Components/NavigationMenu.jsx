import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <Navbar bg="light" expand="md" className="mb-3 shadow">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
            src={"/Images/Beer_hop.webp"}
            alt="Beer_hop"
            height={30}
            style={{ borderRadius: "50%" }}
          />{" "}
          Amabele
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={"offcanvasNavbar-expand-md"} />
        <Navbar.Offcanvas
          id={"offcanvasNavbar-expand-md"}
          aria-labelledby={"offcanvasNavbarLabel-expand-md"}
          placement="end"
        >
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-start flex-grow-1 pe-3">
              <Nav.Link as={NavLink} to="products">
                Our Products
              </Nav.Link>
              <Nav.Link as={NavLink} to="shoppingcart">
                Shopping cart
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavMenu;
