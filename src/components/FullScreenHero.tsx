import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { ImagesDesktop } from '../Shared/ImageLib';


const LandingSection = styled.div`
    height: 100vh;
    background-image: url(${ImagesDesktop["house1"]});
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


const MainText = styled.div`
    color: white;
    font-family: 'Montserrat';  
    font-weight: 200 !important;
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
    background-image: url(${ImagesDesktop['logoWhite']});
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
    background-image: url(${ImagesDesktop['scroll']});
    background-size: 100%;
    background-position-y: center;
    background-repeat: no-repeat;
    width: 80px;
    height: 100px;
    position: absolute;
    bottom: 10px;
    left: calc(50% - 40px);
    animation: ${bounce} 1s infinite;
    cursor: pointer;
`;

const FullScreenHero: FC = () => {
  const handleNav = (link: string): void => {
    let scrollPosition = document.getElementById(`${link}`)?.offsetTop ?? 0;

    if (link !== "about")
        scrollPosition = scrollPosition - 100;
    
    window.scrollTo({
        left: 0,
        top: scrollPosition,
        behavior: 'smooth',
    });
  };

  return (
    <>
       <LandingSection>
            <filter />
            <MainLogo />
            <MainText>
                <div>HOWARD</div>
                <div>HAVENS</div>
            </MainText>
            <ScrollArrow onClick={() => handleNav("about")} />
        </LandingSection>
    </>
  );
}

export default FullScreenHero;