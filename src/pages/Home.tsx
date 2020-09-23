import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderNav from '../Components/HeaderNav';
import { colours, Section } from '../Shared/SharedStyles';
import Contact from '../Components/Contact';
import FullScreenHero from '../Components/FullScreenHero';
import About from '../Components/About';
import WhyUs from '../Components/WhyUs';
import Services from '../Components/Services';


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
        window.pageYOffset > window.innerHeight - 5 ? setStickyHeader(true) : setStickyHeader(false);
    });

    return (
    <>
      <HeaderNav stickyHeader={stickyHeader} />
      <FullScreenHero />
            
      <Section id="about" topSpace>
        <div className="wrapper">
          <About />
          <WhyUs />
        </div>
      </Section>

      <Section id="services" fullwidth>
        <Services />
      </Section>

      <Section id="contact" fullwidth lastItem>
        <Contact  />
      </Section>
    </>
    );
};

export default Home;