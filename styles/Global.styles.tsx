import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: IBM Plex Mono, monospace;
    font-size: 16px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: IBM Plex Mono, monospace;
  }
`;

export interface WrapperProps {
    minHeight?: string;
    minWidth?: string;
    maxWidth?: string;
    maxHeight?: string;
    height?: string;
    width?: string;
    padding?: string;
    position?: string;
    display?: string;
    flexDirection?: string;
    margin?: string;
    alignItems?: string;
    justifyContent?: string;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    filter?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  padding: ${props => props.padding || "0"};
  margin: ${props => props.margin || "0"};
  position: ${props => props.position || null};
  display: ${props => props.display || "flex"};
  flex-direction: ${props => props.flexDirection || "column"};
  align-items: ${props => props.alignItems || null};
  max-width: ${props => props.maxWidth || null};
  min-width: ${props => props.minWidth || null};
  max-height: ${props => props.maxHeight || null};
  min-height: ${props => props.minHeight || null};
  height: ${props => props.height || null};
  width: ${props => props.width || null};
  top: ${props => props.top || null};
  left: ${props => props.left || null};
  right: ${props => props.right || null};
  bottom: ${props => props.bottom || null};
  filter: ${props => props.filter || null};
`;
