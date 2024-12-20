import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'

const Header = () => {
    return (
        <>
        <Container fluid className='header-top'>
            <Container className='header-topcontainer'>
            <p>Phone:66566465</p>
            <p>Email:66566465@gmail.co</p>
            </Container>
         </Container>
      
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="navbar-second">
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="#action2">Services</Nav.Link>
            <Nav.Link href="#action2">Contact Us</Nav.Link>
          </Nav>
            {/* <Button variant="outline-success">Search</Button> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  
        </>
      );
    }
    

export default Header





