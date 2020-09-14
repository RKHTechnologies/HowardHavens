import React, { useState } from 'react';
import styled from 'styled-components';
import { colours } from '../Shared/SharedStyles';
import { useHistory } from 'react-router-dom';
import { ImagesDesktop } from '../Shared/ImageLib';

interface menuProps {
    menuOpen? : boolean;
}

const HeaderNavContainer = styled.div`
    width: 100%;
    max-width: 1800px;
    margin: auto;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: ${(p: IProps) => p.stickyHeader ? "fixed" : "absolute"};
    top: ${(p: IProps) => p.stickyHeader ? "0" : "100vh"};
    background: #000;
    z-index: 1;
    transition: height 0.3s ease;

    & > img {
        height: 50px;
        margin-left: 50px;
    }

    @media(min-width: 1800px) {
        left: calc(50% - 900px);    
    }
`;

const Logo = styled.img`
    cursor: pointer;
`;


const HeaderButton = styled.button`
    height: 100%;
    background: transparent;
    color: ${colours.light};
    border: none;
    letter-spacing: 5px;
    text-indent: 5px;
    padding: 27px 25px;
    cursor: pointer;
    
    &:hover {
        color: ${colours.primary};
    }

    &:last-child {
        margin-right: 50px;
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
        margin-top: 70px;
        transition: all 0.3s ease;
        height: ${(p:menuProps) => p.menuOpen ? "400px" : "0"};

        ${HeaderButton} {
            display: initial;
            margin-right: 20px;
            text-align: right;
            border-radius: 0;
            background: #1f1f1f;
            padding: 0 25px;
        }
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
        history.push(`/howardhavens/${link}`);
    }

    return (
        <HeaderNavContainer stickyHeader={stickyHeader}>
            <Logo src={ImagesDesktop['logoWhite']} alt="Howard Havens Logo" onClick={() => handleNav("")} />
            <NavItemsRightContainer menuOpen={menuOpen}>
                <BurgerContainer menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Burger menuOpen={menuOpen} /></BurgerContainer>
                <HeaderButton onClick={() => handleNav("#about")}>ABOUT US</HeaderButton>
                <HeaderButton onClick={() => handleNav("lettings")}>LETTINGS</HeaderButton>
                <HeaderButton onClick={() => handleNav("dealsourcing")}>DEAL SOURCING</HeaderButton>
                <HeaderButton onClick={() => handleNav("projects")}>PROJECTS</HeaderButton>
                <HeaderButton onClick={() => handleNav("contact")}>CONTACT</HeaderButton>
            </NavItemsRightContainer>
        </HeaderNavContainer>
    );
}

export default HeaderNav;