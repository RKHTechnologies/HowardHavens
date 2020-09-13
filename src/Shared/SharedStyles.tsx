import styled from "styled-components";

export type Colour = 'light' | 'dark' | 'primary' | 'darkGrey' | 'lightGrey';

interface ColoursProps {
    light: string,
    dark: string,
    primary: string,
    darkGrey: string,
    lightGrey: string,
}

export const colours: ColoursProps = {
    light: "#FFF",
    dark: "#000",
    primary: "#7414DC",
    darkGrey: "#707070",
    lightGrey: "#D2D2D2",
}


interface SettingsProps {
    maxWidth: string;
    maxWidthHalf: string;
    mobile: string;
}

export const SharedSettings: SettingsProps = {
    maxWidth: "1400px",
    maxWidthHalf: "700px",
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
    dark?: boolean;
  }

export const SectionContainer = styled.div`
  min-height: 200px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  background: ${(p: SectionProps) => p.dark ? colours.dark : colours.light};
  color: ${(p: SectionProps) => p.dark ? colours.light : colours.dark};

  h1 {
    font-size: 3em;
    font-weight: 200;
    margin-top: 100px;
  }

  p {
      font-size: 1.8em;
  }
`;