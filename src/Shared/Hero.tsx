import React, { FC } from 'react';
import styled from 'styled-components';
import { imageLib, ImagesDesktop, ImagesMobile } from './ImageLib';
import { useMediaQuery } from 'react-responsive';

interface HeroProps {
    imageUrl: string;
    small?: boolean;
    imageHeight?: string
}

const HeroBanner = styled.div`
    width: 100%;
    height: ${(p: HeroProps):string => p.small ? "65%" : "80%"};
    text-align: center;
    background: #eee;
    background-image: url(${(p: HeroProps):string => p.imageUrl});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: ${(p: HeroProps):string => p.imageHeight ?? "center"};
    background-position-x: center;

    @media(max-width: 700px) {
        height: 300px;
    }
`;


interface IProps {
    image: imageLib;
    small?: boolean;
    imageHeight?: string;
}

const Hero: FC<IProps> = ({image, small, imageHeight}: IProps) => {
    const mobile = useMediaQuery({query: '(max-width: 700px)'});
    
    return (
        <HeroBanner imageUrl={mobile ? ImagesMobile[image] : ImagesDesktop[image]} small={small} imageHeight={imageHeight} />
    );
}

export default Hero;