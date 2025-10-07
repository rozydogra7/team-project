import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../assets/logo.png";
import side from "../assets/side.png";
import iconcircle from "../assets/chevron.png";
import "../App.css"; // Make sure CSS is imported

function Header() {
  const [bgcolor, setbgcolor] = useState({backgroundColor: "transparent", boxShadow: "none"});

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const firstSection = document.querySelector(".Banner-section"); 
      if (firstSection) {
        const rect = firstSection.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY; 
        const triggerPoint = sectionTop + rect.height * 0.15; 

if (window.scrollY > triggerPoint) {
  setIsScrolled(true);
  setbgcolor({
          backgroundColor: "black",
          boxShadow: "0 0 10px 1px #ffffff71"
        });
} else {
  setIsScrolled(false);
  setbgcolor({
          backgroundColor: "transparent",
          boxShadow: "none"
        });
}

      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand={false}
      fixed="top"
      style={{
        ...bgcolor,
      }}
      
    >
      <Container>
        {/* Toggle button */}
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          className="border-0 bg-transparent p-0"
        >
          <img
            src={side}
            alt="menu"
            style={{ width: "40px", cursor: "pointer" }}
          />
        </Navbar.Toggle>

        {/* Center Logo */}
        <div className="img-center">
          <img style={{height: isScrolled ? "60px" : "80px",transition: ".3s ease"}} src={logo} alt="ok" />
        </div>

        {/* Right Button */}
        <Navbar.Brand href="#" className="ms-2">
          <Button className="Logo-btn">
            Get in Touch{" "}
            <span>
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </Button>
        </Navbar.Brand>

        {/* Offcanvas Menu */}
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <div className="logo-img">
                <img src={logo} alt="ok" />
              </div>
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <div className="nav-inner">
              <Nav.Link href="#home">Home</Nav.Link>

              <NavDropdown title="WhySchon" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="#about">
                  <span>
                    <img src={iconcircle} alt="ok" />
                  </span>
                  About Us
                </NavDropdown.Item>
                <NavDropdown.Item href="#solution">
                  <span>
                    <img src={iconcircle} alt="ok" />
                  </span>
                  One-stop Housing Solution
                </NavDropdown.Item>
                <NavDropdown.Item href="#quality">
                  <span>
                    <img src={iconcircle} alt="ok" />
                  </span>
                  Quality Assurance
                </NavDropdown.Item>
                <NavDropdown.Item href="#sustain">
                  <span>
                    <img src={iconcircle} alt="ok" />
                  </span>
                  Sustainability
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Product" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="#action1">
                  <span>
                    <img src={iconcircle} alt="ok" />
                  </span>
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action2">
                  <span>
                    <img src={iconcircle} alt="ok" />
                  </span>
                  Another Action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action3">
                  <span>
                    <img src={iconcircle} alt="ok" />
                  </span>
                  Something else
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </div>
          </Offcanvas.Body>

          <div className="main-navbarand">
            <Navbar.Brand href="#" className="ms-2">
              <Button className="Logo-btn">
                Get in Touch{" "}
                <span>
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Button>
            </Navbar.Brand>
            <Navbar.Brand href="#" className="ms-2">
              <Button className="Logo-btn-2">
                Become a Dealer{" "}
                <span>
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Button>
            </Navbar.Brand>
          </div>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
