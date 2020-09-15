import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderNav from '../Components/HeaderNav';
import { colours } from '../Shared/SharedStyles';
import Contact from '../Components/Contact';
import FullScreenHero from '../Components/FullScreenHero';

interface sectionProps {
    dark?: boolean;
    background?: string;
}

export const Section = styled.div`
    background: ${(p: sectionProps) => p.dark ? "#000" : "inherit"};
    background: ${(p: sectionProps) => p.background};
    color: ${(p: sectionProps) => p.dark ? colours.light : "inherit"};
    padding: 50px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    overflow: hidden;
    
    &#about {
        padding-top: 130px;
    }

    @media(max-width: 1100px) {
        padding: 20px;
    }
`;

const SectionHeader = styled.h1`
    color: ${colours.light};
    border-bottom: 1px solid ${colours.primary};
    letter-spacing: 5px;
    font-weight: 300;
    font-size: 1.7em;
    text-transform: uppercase;
`;

const Home: React.FC = () => {
    const [stickyHeader, setStickyHeader] = useState(false);
    
    window.addEventListener("scroll", () => {
        window.pageYOffset > window.innerHeight ? setStickyHeader(true) : setStickyHeader(false);
    });

    return (
    <>
        <HeaderNav stickyHeader={stickyHeader} />
        <FullScreenHero />
        <Section dark id="about">
            <SectionHeader>Who we are</SectionHeader>
            Lorem ipsum jfkldsjfklds fklds fjklsdfj kldsfj sdlfjsdk lfds jaghsjk ghdfjkgl shjgk;dsh jggkldfsh jgahfjdk important words ghjfdklg hdisg fdsjkgLorem ipsum jfkldsjfklds fklds fjklsdfj kldsfj sdlfjsdk lfds jaghsjk ghdfjkgl shjgk;dsh jggkldfsh jgahfjdk ghjfdklg hdisg fdsjkg
        </Section>
        <Section dark>
            <SectionHeader>What we do</SectionHeader>
            Lorem ipsum jfkldsjfklds fklds fjklsdfj kldsfj sdlfjsdk lfds jaghsjk ghdfjkgl shjgk;dsh jggkldfsh jgahfjdk important words ghjfdklg hdisg fdsjkgLorem ipsum jfkldsjfklds fklds fjklsdfj kldsfj sdlfjsdk lfds jaghsjk ghdfjkgl shjgk;dsh jggkldfsh jgahfjdk ghjfdklg hdisg fdsjkgLorem ipsum jfkldsjfklds fklds fjklsdfj kldsfj sdlfjsdk lfds jaghsjk ghdfjkgl shjgk;dsh jggkldfsh jgahfjdk important words ghjfdklg hdisg fdsjkgLorem ipsum jfkldsjfklds fklds fjklsdfj kldsfj sdlfjsdk lfds jaghsjk ghdfjkgl shjgk;dsh jggkldfsh jgahfjdk ghjfdklg hdisg fdsjkg
        </Section>
        <Contact  />
    </>
    );
};

export default Home;