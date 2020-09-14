import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import house1 from '../house1.jpeg';
import logoWhite from '../logoWhite.svg';
import scrollComponent from '../scrollComponent.png';
import HeaderNav from '../Components/HeaderNav';
import { colours } from '../Shared/SharedStyles';
import Contact from '../components/Contact';

interface sectionProps {
    dark?: boolean;
    background?: string;
}

export const Section = styled.div`
    background: ${(p: sectionProps) => p.dark ? "#000" : "inherit"};
    background: ${(p: sectionProps) => p.background};
    color: ${(p: sectionProps) => p.dark ? colours.light : "inherit"};
    padding: 50px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    
    &#about {
        padding-top: 130px;
    }

    @media(min-width: 1800px) {
        width: 1700px;
        margin: auto;
    }
    @media(max-width: 1100px) {
        padding: 20px;
    }
`;

const LandingSection = styled.div`
    height: 100vh;
    background-image: url(${house1});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: calc(100% + 42px);
    background-position-x: center;

    @media(max-width: 1200px) {
        background-position-y: initial;
    }

    & filter {
        content: '';
        position: absolute;
        background: #6A6A6A;
        opacity: 0.45;
        top: 0;
        right: 0;
        left: 0;
        height: 100vh;
    }
`;

const SectionHeader = styled.h1`
    color: ${colours.white};
    border-bottom: 1px solid ${colours.orange};
    letter-spacing: 5px;
    font-weight: 300;
    font-size: 1.7em;
    text-transform: uppercase;
`;


const MainText = styled.div`
    color: white;
    font-family: 'Montserrat';  
    font-weight: 200;
    position: absolute;
    font-size: 8vw;
    letter-spacing: 20px;
    text-indent: 20px;
    text-align: center;
    top: 10%;
    width: 100%;
    line-height: 110px;
    display: flex;
    justify-content: space-around;


    @media(max-width: 1060px) {
        font-weight: 300;
        font-size: 11vw;
        line-height: 120px;
        flex-direction: column;
    }
`;


const MainLogo = styled.div`
    background-image: url(${logoWhite});
    background-size: 100%;
    background-position-y: center;
    background-repeat: no-repeat;
    width: 30%;
    height: 50%;
    position: absolute;
    top: 34%;
    left: 37.8%;

    @media(max-width: 1060px) {
        width: 50%;
        height:50%;
        top: 36%;
        left: 30%;
    }
`;

const bounce = keyframes`
    0% { transform: translate(0,0); }
    25% { transform: translate(0, -25px); }
    50% { transform: translate(0,0); }
`;

const ScrollArrow = styled.a`
    background-image: url(${scrollComponent});
    background-size: 100%;
    background-position-y: center;
    background-repeat: no-repeat;
    width: 80px;
    height: 100px;
    position: absolute;
    bottom: 10px;
    left: calc(50% - 40px);
    animation: ${bounce} 1s infinite;
`;

const Home: React.FC = () => {
    const [stickyHeader, setStickyHeader] = useState(false);
    
    window.addEventListener("scroll", () => {
        window.pageYOffset > window.innerHeight ? setStickyHeader(true) : setStickyHeader(false);
    });

    return (
    <>
        <HeaderNav stickyHeader={stickyHeader} />
        <LandingSection>
            <filter />
            <MainLogo />
            <MainText>
                <div>HOWARD</div>
                <div>HAVENS</div>
            </MainText>
            <ScrollArrow href="#about"/>
        </LandingSection>
        <Section dark id="about">
            <SectionHeader>Who we are</SectionHeader>
            Lorem ipsum jfkldsjfklds fklds fjklsdfj kldsfj sdlfjsdk lfds jaghsjk ghdfjkgl shjgk;dsh jggkldfsh jgahfjdk important words ghjfdklg hdisg fdsjkgLorem ipsum jfkldsjfklds fklds fjklsdfj kldsfj sdlfjsdk lfds jaghsjk ghdfjkgl shjgk;dsh jggkldfsh jgahfjdk ghjfdklg hdisg fdsjkg
        </Section>
        <Section dark>
            <SectionHeader>What we do</SectionHeader>
            Lorem ipsum jfkldsjfklds fklds fjklsdfj kldsfj sdlfjsdk lfds jaghsjk ghdfjkgl shjgk;dsh jggkldfsh jgahfjdk important words ghjfdklg hdisg fdsjkgLorem ipsum jfkldsjfklds fklds fjklsdfj kldsfj sdlfjsdk lfds jaghsjk ghdfjkgl shjgk;dsh jggkldfsh jgahfjdk ghjfdklg hdisg fdsjkgLorem ipsum jfkldsjfklds fklds fjklsdfj kldsfj sdlfjsdk lfds jaghsjk ghdfjkgl shjgk;dsh jggkldfsh jgahfjdk important words ghjfdklg hdisg fdsjkgLorem ipsum jfkldsjfklds fklds fjklsdfj kldsfj sdlfjsdk lfds jaghsjk ghdfjkgl shjgk;dsh jggkldfsh jgahfjdk ghjfdklg hdisg fdsjkg
        </Section>
        <Contact />
    </>
    );
};

export default Home;