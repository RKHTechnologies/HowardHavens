import styled from "styled-components";

export type Colour = 'light' | 'dark' | 'primary' | 'darkGrey' | 'lightGrey' | 'green' | 'purple';

interface ColoursProps {
    light: string,
    dark: string,
    primary: string,
    darkGrey: string,
    lightGrey: string,

    green: string,
    purple: string,
}

export const colours: ColoursProps = {
    light: "#FFFFFF",
    dark: "#000000",
    primary: "#E78200",
    darkGrey: "#707070",
    lightGrey: "#D2D2D2",

    green: "#06D6A0",
    purple: "#a09be7",
}


interface SettingsProps {
    maxWidth: string;
    maxWidthHalf: string;
    mobile: string;
}

export const SharedSettings: SettingsProps = {
    maxWidth: "1800px",
    maxWidthHalf: "900px",
    mobile: "1100px",
}

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const PageBodyContainer = styled.div`
  position: absolute;
  top: 100px;
  bottom: 0;
  left: 0;
  right: 0;
`;


interface SectionProps {
  fullwidth?: boolean;
  lastItem?: boolean;
  topSpace?: boolean;
}

export const Section = styled.div`
  width: 100%;
  min-height: 200px;
  padding: ${(p: SectionProps) => p.fullwidth ? "20px 0 100px" : "20px 30px 100px"};
  padding-bottom: ${(p: SectionProps) => p.lastItem ? "0 !important" : null};
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  padding-top: ${(p: SectionProps) => p.topSpace ? "100px" : null};

  div.wrapper {
    width: 96%;
    max-width: ${SharedSettings.maxWidth};
    display: flex;
    flex-wrap: wrap;
  }

  @media(max-width: ${SharedSettings.mobile}) {
    padding: 60px 0 50px;
  }
`;