import React, { useState } from 'react';
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
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${colours.dark}b0;
    z-index: 2;

    @media(max-width: ${SharedSettings.mobile}) {
      background: ${colours.dark};
    }
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
    color: ${colours.light};
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
        /* margin-top: 70px; */
        height: ${(p:menuProps) => p.menuOpen ? "80vh" : "0"};
        position: fixed;
        top: 0;
        left: 20px;
        right: 20px;
        background: ${colours.dark};
        z-index: 3;

        ${HeaderButton} {
            text-align: center;
            border-radius: 0;
            color: ${colours.light};
            padding: 0 14px;
            display: flex;
            align-items: center;
            justify-content: center;

            &:last-child {
                margin-right: 0;
            }
            /* display: initial;
            margin-right: 20px;
            text-align: right;
            border-radius: 0;
            background: #1f1f1f;
            padding: 0 25px; */
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
    background: ${(p: menuProps) => p.menuOpen ? colours.primary : colours.light};
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
    height: 70px;
    width: 100px;
    background: ${(p: menuProps) => p.menuOpen ? "#1f1f1f" : "transparent"};
    position: relative;
    align-self: flex-end;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 20px;
    display: none;

    &:hover > ${Burger} {
        background: ${colours.primary};
    }

    @media( max-width: 1100px ) {
        display: initial;

    }
`;

interface IProps {
    stickyHeader?: boolean;
}

const HeaderNav: React.FC<IProps> = ({ stickyHeader }: IProps) => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const history = useHistory();

    const handleNav = (link: string): void => {
        console.log("clicked nav", link);
        history.push(`${process.env.PUBLIC_URL}${link}`);
    }

    return (
      <HeaderBar stickyHeader={stickyHeader}>
        <HeaderNavContainer>
          <Logo src={ImagesDesktop['logoWhite']} alt="Howard Havens Logo" onClick={() => handleNav("")} />
          <BurgerContainer menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Burger menuOpen={menuOpen} /></BurgerContainer>

          <NavItemsRightContainer menuOpen={menuOpen}>  
            <HeaderButton href="#about">ABOUT US</HeaderButton>
            <HeaderButton href="#lettings">LETTINGS</HeaderButton>
            <HeaderButton href="#dealsourcing">DEAL SOURCING</HeaderButton>
            <HeaderButton href="#projects">PROJECTS</HeaderButton>
            <HeaderButton href="#contact">CONTACT</HeaderButton>
            {/* <HeaderButton  href="#about" onClick={() => handleNav("#about")}>ABOUT US</HeaderButton> */}
            {/* <HeaderButton onClick={() => handleNav("lettings")}>LETTINGS</HeaderButton> */}
            {/* <HeaderButton onClick={() => handleNav("dealsourcing")}>DEAL SOURCING</HeaderButton> */}
            {/* <HeaderButton onClick={() => handleNav("projects")}>PROJECTS</HeaderButton> */}
            {/* <HeaderButton onClick={() => handleNav("contact")}>CONTACT</HeaderButton> */}
          </NavItemsRightContainer>
        </HeaderNavContainer>
      </HeaderBar>
    );
}

export default HeaderNav;