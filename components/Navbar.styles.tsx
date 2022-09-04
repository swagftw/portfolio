import styled from 'styled-components';
import {Theme} from "../styles/Theme";
import {motion} from "framer-motion";

export const NavbarWrapper = styled.nav`
  padding: 2rem 3.5rem;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  position: relative;;
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
`;


interface NavbarProps {
    page: string
    path: string
}

export const NavTitle = styled(motion.div)<NavbarProps>`
  font-weight: ${props => props.page === props.path ? 600 : 400};
  margin-left: 2rem;
  cursor: pointer;
  font-size: ${Theme.fontSizes.base};

`;