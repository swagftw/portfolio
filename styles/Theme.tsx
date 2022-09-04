import styled from "styled-components";

export interface TextProps {
    color?: string;
    size?: string;
    weight?: string;
    family?: string;
    letterSpacing?: string;
}

export const Theme = {
    colors: {
        black: "#000000",
        white: "#FFFFFF",
        gray100: "#F8F8F8",
        gray200: "#EDEDED",
        gray300: "#D8D8D8",
        gray400: "#C4C4C4",
        gray500: "#A3A3A3",
        gray600: "#7E7E7E",
        gray700: "#5A5A5A",
        gray800: "#3D3D3D",
        gray900: "#262626",

    },
    fontSizes: {
        xs: "0.8rem",
        sm: "1rem",
        base: "1.2rem",
        lg: "1.5rem",
        xl: "2rem",
        xxl: "2.5rem",
    },
    fontWeights: {
        thin: "100",
        extraLight: "200",
        light: "300",
        regular: "400",
        medium: "500",
        semiBold: "600",
        bold: "700",
        extraBold: "800",
    }
}

export const Heading = styled.h1<TextProps>`
  color: ${props => props.color || "black"};
  font-size: ${props => props.size || "2rem"};
  font-weight: ${props => props.weight || "400"};
  font-family: ${props => props.family || "IBM Plex Mono, monospace"};
  letter-spacing: ${props => props.letterSpacing || "0"};
`;

export const SubHeading = styled.h2<TextProps>`
  color: ${props => props.color || "black"};
  font-size: ${props => props.size || "1.5rem"};
  font-weight: ${props => props.weight || "400"};
  font-family: ${props => props.family || "IBM Plex Mono, monospace"};
  letter-spacing: ${props => props.letterSpacing || "0"};
`;

export const Body = styled.div<TextProps>`
  color: ${props => props.color || "black"};
  font-size: ${props => props.size || "1.2rem"};
  font-weight: ${props => props.weight || "400"};
  font-family: ${props => props.family || "IBM Plex Mono, monospace"};
  letter-spacing: ${props => props.letterSpacing || "0"};
`;

export const Small = styled.p<TextProps>`
  color: ${props => props.color || "black"};
  font-size: ${props => props.size || "0.75rem"};
  font-weight: ${props => props.weight || "400"};
  font-family: ${props => props.family || "IBM Plex Mono, monospace"};
  letter-spacing: ${props => props.letterSpacing || "0"};
`;