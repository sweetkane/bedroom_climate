import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Footer = () => {
    return (

        <Navbar 
            fixed="bottom"
            bg="dark" 
            variant="dark" 
            expand="lg"
        >
            <Navbar.Brand>
                A full stack web + IoT project by Kane Sweet
            </Navbar.Brand>

            <Nav className="mr-auto">
                <Nav.Link target="_blank" href="https://github.com/sweetkane/bedroom_climate">GitHub</Nav.Link>
                <Nav.Link target="_blank" href="https://www.linkedin.com/in/kane-sweet/">LinkedIn</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Footer;