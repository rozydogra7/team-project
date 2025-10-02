  import Button from 'react-bootstrap/Button';
  import Container from 'react-bootstrap/Container';
  import Nav from 'react-bootstrap/Nav';
  import Navbar from 'react-bootstrap/Navbar';
  import NavDropdown from 'react-bootstrap/NavDropdown';
  import Offcanvas from 'react-bootstrap/Offcanvas';

function Header(){
    return(
        <>
        
      {[false, ].map((expand) => (
            <Navbar expand={false} className="mb-3 Navbar-main-sec">
      <Container>
        {/* Toggle button on the left */}
        <Navbar.Toggle  aria-controls="offcanvasNavbar"   style={{ borderColor: 'white', color: 'white' }}  />
        <div className="img-center">
            <img src="src/assets/logo.png" alt="ok" />
        </div>

        {/* Logo/brand on the left */}
        <Navbar.Brand href="#" className="ms-2">
          <Button className='Logo-btn'>Get in Touch <span><i class="fa-solid fa-arrow-right"></i></span></Button>
        </Navbar.Brand>
        

        {/* Offcanvas menu sliding from left */}
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start" // LEFT side
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
                <div className="logo-img">
              <img src="src\assets\logo.png" alt="ok" />
              </div>
            </Offcanvas.Title>
          </Offcanvas.Header>
           
          <Offcanvas.Body>
            <div className='nav-inner'>
              <Nav.Link href="#home">Home</Nav.Link>
               <NavDropdown title="WhySchon" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action2">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action3">Something else here</NavDropdown.Item>
              </NavDropdown>
               <NavDropdown title="Product" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action2">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action3">Something else here</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Projects</Nav.Link>
               <Nav.Link href="#home">Blog</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
             
            </div>
            

            
          </Offcanvas.Body>
          <div className="main-navbarand">
           <Navbar.Brand href="#" className="ms-2">
          <Button className='Logo-btn'>Get in Touch <span><i class="fa-solid fa-arrow-right"></i></span></Button>
        </Navbar.Brand>
         <Navbar.Brand href="#" className="ms-2">
          <Button className='Logo-btn-2'>Becaome a Dealer <span><i class="fa-solid fa-arrow-right"></i></span></Button>
        </Navbar.Brand>
        </div>
        </Navbar.Offcanvas>
        
      </Container>
    </Navbar>
      ))}
        </>
    )
}
export default Header;