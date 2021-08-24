import React, {useState, useEffect} from 'react'
import styled, {css} from 'styled-components/macro'
import { Link } from 'react-router-dom'
import {menuData} from '../data/MenuData'
import {Button} from './Button'
import {FaBars} from 'react-icons/fa'



const Nav = styled.nav `
background-color: ${ ({
    scrollNav}) => ( scrollNav ? '#C98932' : 'transparent')};
transition-timing-function: ease-in;
transition:0.5s;
height:57px;
display:flex;
justify-content:space-between;
padding: 1rem 2rem;
z-index: 100;
position:fixed;
width: 100%;
`;

    const NavLink = css `
color:#fff;
display: flex;
align-content: center;
padding: 0 1rem;
cursor: pointer;
text-decoration:none;
`;

    //link is essentially a link from react router
    const Logo = styled(Link)`
${NavLink}
font-style:italic;
font-size:24px;
`;

    const MenuBars = styled(FaBars)`
display:none;

@media screen and (max-width: 768px) {
    display:block;
    height:40px;
    width:40px;
    cursor:pointer;
    position: absolute;
    top:0;
    right:0;
    transform: translate(-50%,25%)
}
`;

    const NavMenu = styled.div `
display:flex;
align-items: center;
text-decoration:none;
margin-right: -48px;

@media screen and (max-width: 768px) {
    display:none;
}
`;

    const NavMenuLinks = styled(Link)`
${NavLink}`;

    const NavBtn = styled.div `
display:flex;
align-items:center;
margin-right: 24px;

@media screen and (max-width: 768px) {
    display:none;
}
`

    //we will map through the NavMenu with MenuData

    export const Navbar = () => {
        const [showNav,
            setShowNav] = useState(false);

        const changeNav = () => {
            if (window.scrollY >= 100) {
                setShowNav(true)
            } else {
                setShowNav(false)
            }
        }

        useEffect(() => {
            window.addEventListener('scroll', changeNav)
            return () => {
                window.removeEventListener('scroll', changeNav)
            }
        }, []);
        

        return (
            <Nav scrollNav={showNav}>
                <Logo to="/">House4U</Logo>
                <MenuBars/>
                <NavMenu>
                    {menuData.map((item, index) => (
                        <NavMenuLinks to={item.link} key={index}>
                            {item.title}
                        </NavMenuLinks>
                    ))}
                </NavMenu>
                <NavBtn>
                    <Button to="/contact" primary='true'>
                        Contact Us
                    </Button>
                </NavBtn>
            </Nav>
        )
    }