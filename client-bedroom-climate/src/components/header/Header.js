import React from 'react';
import { Navbar, Row, Col } from 'react-bootstrap';

const Header = () => {
    return (

        <Navbar 
            bg="dark" 
            variant="dark" 
        >
            <Navbar.Brand>
                    <h3 style={{color: "#aaadb0"}}> 
                        Bedroom Climate Control Beta
                    </h3>
            </Navbar.Brand>
        </Navbar>
    );
}

export default Header;