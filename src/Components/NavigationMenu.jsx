import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import { Cart3 } from "react-bootstrap-icons";
import { Badge } from "react-bootstrap";
import { useCart } from "react-use-cart";

const NavMenu = () => {
  const { totalUniqueItems } = useCart();
  return (
    <Navbar bg="light" expand="md" className="mb-3 shadow">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/Amabele/">
          <img
            src={"https://asandahdevs.github.io/Amabele/Images/Beer_mugs.webp"}
            alt="Beer_mugs"
            height={30}
            style={{ borderRadius: "50%", width: "auto" }}
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
              <Nav.Link as={NavLink} to="shoppingcart" className="ms-auto">
                <Cart3
                  style={{
                    height: "2rem",
                    width: "1.5rem",
                    color: "black",
                  }}
                />
                <Badge bg="secondary">{totalUniqueItems}</Badge>
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavMenu;
