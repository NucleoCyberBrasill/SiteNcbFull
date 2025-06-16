import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles.module.css";
import {
  BookIcon,
  CalendarCheckIcon,
  HeadphonesIcon,
  HouseIcon,
  InfoIcon,
  PhoneCallIcon,
  SquarePenIcon,
  TvMinimalPlayIcon,
} from "lucide-react";

export function Menu() {
  return (
    <Navbar collapseOnSelect expand="lg" className={styles.menu} variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="./imgs/logo-ncb.png"
            alt="logo do NCB"
            className={styles.logo}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">
              <HouseIcon /> Home
            </Nav.Link>
            <Nav.Link href="#pricing">
              <InfoIcon /> Sobre
            </Nav.Link>
            <Nav.Link href="#pricing">
              <SquarePenIcon /> Blog
            </Nav.Link>
            <NavDropdown
              title="Projetos"
              id="collapsible-nav-dropdown"
              className={styles.customDropdown}
            >
              <NavDropdown.Item href="#action/3.1">
                <BookIcon /> E-book
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <HeadphonesIcon /> Podcast
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <TvMinimalPlayIcon /> Lives
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                <CalendarCheckIcon /> Eventos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <PhoneCallIcon /> Contatos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
