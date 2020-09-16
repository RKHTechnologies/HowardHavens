import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderNav from '../Components/HeaderNav';
import { colours, Section } from '../Shared/SharedStyles';
import Contact from '../Components/Contact';
import FullScreenHero from '../Components/FullScreenHero';
import About from '../Components/About';


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
            
      <Section id="about" topSpace>
        <div className="wrapper">
          <About />
        </div>
      </Section>

      {/*<Section dark>
          <SectionHeader>What we do</SectionHeader>
          Lorem ipsum jfkldsjfklds fklds fjklsdfj kldsfj sdlfjsdk lfds jaghsjk ghdfjkgl shjgk;dsh jggkldfsh jgahfjdk important words ghjfdklg hdisg fdsjkgLorem ipsum jfkldsjfklds fklds fjklsdfj kldsfj sdlfjsdk lfds jaghsjk ghdfjkgl shjgk;dsh jggkldfsh jgahfjdk ghjfdklg hdisg fdsjkgLorem ipsum jfkldsjfklds fklds fjklsdfj kldsfj sdlfjsdk lfds jaghsjk ghdfjkgl shjgk;dsh jggkldfsh jgahfjdk important words ghjfdklg hdisg fdsjkgLorem ipsum jfkldsjfklds fklds fjklsdfj kldsfj sdlfjsdk lfds jaghsjk ghdfjkgl shjgk;dsh jggkldfsh jgahfjdk ghjfdklg hdisg fdsjkg
      </Section> */}

      <Section id="contact" fullwidth lastItem>
        <Contact  />
      </Section>
    </>
    );
};

export default Home;