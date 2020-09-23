import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { colours, SharedSettings } from '../Shared/SharedStyles';
import { useHistory } from 'react-router-dom';
import { ImagesDesktop } from '../Shared/ImageLib';

interface IProps {
    stickyHeader?: boolean;
}

interface menuProps {
    menuOpen? : boolean;
}

const HeaderBar = styled.div`
    position: ${(p: IProps) => p.stickyHeader ? "fixed" : "absolute"};
    top: ${(p: IProps) => p.stickyHeader ? "0" : "100vh"};
    box-shadow: ${(p: IProps) => p.stickyHeader ? "0 0.25rem 0.125rem 0 rgba(0,0,0,0.025)" : null};
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${colours.light};
    z-index: 2;
    transition: box-shadow 0.6s ease;
`;

const HeaderNavContainer = styled.div`
    width: 100%;
    max-width: ${SharedSettings.maxWidth};
    margin: auto;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    transition: height 0.3s ease;

    & > img {
        height: 50px;
        margin-left: 50px;

        @media(max-width: 350px) {
            margin-left: 10px;
        }
    }

    @media(min-width: ${SharedSettings.maxWidth}) {
        left: calc(50% - ${SharedSettings.maxWidthHalf});    
    }
`;

const Logo = styled.img`
    cursor: pointer;
`;


const HeaderButton = styled.a`
    height: 100%;
    background: transparent;
    color: ${colours.dark};
    border: none;
    letter-spacing: 5px;
    text-indent: 5px;
    padding: 27px 25px;
    cursor: pointer;
    text-decoration: none;
    
    &:hover {
        color: ${colours.primary};
    }

    &:last-child {
        margin-right: 20px;
    }
`;

const NavItemsRightContainer = styled.div`
    display: flex;
    justify-content: center;
    overflow: hidden;
    transition: all 0.3s ease;

    @media( max-width: 1100px ) {
        flex-direction: column;
        align-self: flex-start;
        height: ${(p:menuProps) => p.menuOpen ? "80vh" : "0"};
        
        position: fixed;
        top: 80px;
        left: 20px;
        right: 20px;
        background: ${colours.lightGrey};
        z-index: 3;

        ${HeaderButton} {
            color: ${colours.light};
            text-align: center;
            font-size: 1.4em;
            padding: 0 14px;
            
            border-radius: 0;           
            display: flex;
            align-items: center;
            justify-content: center;

            &:last-child {
                margin-right: 0;
            }
        }
    }

    @media( max-width: 350px) {
        left: 5px;
        right: 5px;
    }
`;

const Burger = styled.div`
    height: 5px;
    width: 40px;
    background: ${(p: menuProps) => p.menuOpen ? colours.primary : colours.primary};
    transition: all 0.5s ease;
    transition-property: height, width, transform;
    position: absolute;
    top: calc(50% - 12.5px);
    left: calc(50% - 20px);
    transform: ${(p: menuProps) => p.menuOpen ? "translateY(10px) rotate(45deg)" : ""};
    border-radius: 4px;

    &:before, &:after {
        content: '';
        position: absolute;
        height: 5px;
        width: 40px;
        background: ${(p: menuProps) => p.menuOpen ? colours.primary : "inherit"};
        transition: transform 0.5s ease, opacity 0.5s ease;
        border-radius: 4px;
    }

    &:before {
        margin-top: 10px;
        transform: ${(p: menuProps) => p.menuOpen ? "translateY(-10px) rotate(180deg)" : ""};
        opacity: ${(p: menuProps) => p.menuOpen ? "0" : "1"};
    }

    &:after {
        margin-top: 20px;
        transform: ${(p: menuProps) => p.menuOpen ? "translateY(-20px) rotate(-90deg)" : ""};
    }
`;


const BurgerContainer = styled.div`
    height: 80px;
    width: 100px;
    background: ${(p: menuProps) => p.menuOpen ? colours.lightGrey : "transparent"};
    position: relative;
    align-self: flex-end;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 20px;
    display: none;

    @media( max-width: 1100px ) {
        display: initial;
    }

    @media( max-width: 350px ) {
        right: 5px;
    }
`;

interface IProps {
    stickyHeader?: boolean;
}

const HeaderNav: React.FC<IProps> = ({ stickyHeader }: IProps) => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const handleNav = (link: string): void => {
        setMenuOpen(false);
        let scrollPosition = document.getElementById(`${link}`)?.offsetTop ?? 0;

        if (link !== "about" && link !== "contact")
            scrollPosition = scrollPosition - 100;
        
        window.scrollTo(0, scrollPosition);
    }


    const burgerClick = (stickyHeader?: boolean) => {
        if (!stickyHeader) {
            window.scrollTo(0, window.innerHeight);
            setTimeout(() => setMenuOpen(!menuOpen), 200);
        }
        else
            setMenuOpen(!menuOpen);
    };

    return (
      <HeaderBar stickyHeader={stickyHeader}>
        <HeaderNavContainer>
          <Logo src={ImagesDesktop['logo']} alt="Howard Havens Logo" onClick={() => handleNav("")} />
          <BurgerContainer menuOpen={menuOpen} onClick={() => burgerClick(stickyHeader)}><Burger menuOpen={menuOpen} /></BurgerContainer>

          <NavItemsRightContainer menuOpen={menuOpen}>  
            <HeaderButton onClick={() => handleNav("about")}>ABOUT US</HeaderButton>
            <HeaderButton onClick={() => handleNav("sales")}>SALES</HeaderButton>
            <HeaderButton onClick={() => handleNav("discuss")}>1-2-1 DISCUSSION</HeaderButton>
            <HeaderButton onClick={() => handleNav("tenantbuyers")}>TENANT BUYERS</HeaderButton>
            <HeaderButton onClick={() => handleNav("dealsourcing")}>DEAL SOURCING</HeaderButton>
            <HeaderButton onClick={() => handleNav("contact")}>CONTACT</HeaderButton>
          </NavItemsRightContainer>
        </HeaderNavContainer>
      </HeaderBar>
    );
}

export default HeaderNav;