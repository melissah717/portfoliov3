import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
// import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    BarIcon,
    NavItem,
    NavLinks,
    NavMenu, 

} from './NavbarElements';

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
      if (window.scrollY >= 80) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', changeNav);
    }, []);
  
    const toggleHome = () => {
      scroll.scrollToTop();
    };
  
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        placeholder
                    </NavLogo>
                    <BarIcon onClick={toggle}>
                        <FaBars />
                    </BarIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' smooth={true} duration={400} spy={true} exact='true'>About Me</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='portfolio' smooth={true} duration={400} spy={true} exact='true'>My Work</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact' smooth={true} duration={400} spy={true} exact='true'>Contact Me</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;