import React from 'react';
import { Link } from 'react-router-dom';
import {Nav, Ul, Li} from '../styles/StyledNavbar'
const Navbar = () => {
    return (
        <Nav>
            <Ul>
                <Link to="/" style={{textDecoration:"none"}}>
                    <Li>TUTORIAL</Li>
                </Link>
                <Link to="/games" style={{textDecoration:"none"}}>
                    <Li>GAME</Li>
                </Link>
                <a 
                href="https://github.com/JDavidcor23/words-in-english" 
                style={{textDecoration:"none"}}
                target="_black"
                >
                    <Li>GitHub</Li>
                </a>
            </Ul>
        </Nav>
    );
};

export default Navbar;