import React from 'react'
import { FaBars } from 'react-icons/fa'
import { SideBarProps } from './types';
import {Nav,
        NavBarContainer,
        NavLogo,
        MobileIcon,
        NavMenu,
        NavItem,
        NavLinks,
        NavBtn,
        NavBtnLink
        } from './Nav.styles'

const Navigation = () => {
  return (
    <>
        <Nav>
            <NavBarContainer>
                <NavLogo>Navigation</NavLogo>
                <MobileIcon>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks>One</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks>Two</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks>Three</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks>For</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink>Five</NavBtnLink>
                </NavBtn>
            </NavBarContainer>
        </Nav>
    </>
)
}

export default Navigation