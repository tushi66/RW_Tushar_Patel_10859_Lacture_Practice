import React from "react";
import {
  Navbar,
  Nav,
  Container
} from "react-bootstrap";


const MyNavbar = () => {

    return (
        <>

                <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Contact</Nav.Link>
                            <Nav.Link href="#pricing">AboutUS</Nav.Link>
                            <Nav.Link href="#pricing">Login</Nav.Link>
                            <Nav.Link href="#pricing">Product</Nav.Link>
                            <Nav.Link href="#pricing">Profile</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <br />
                
        </>

    )
}

export default MyNavbar;
