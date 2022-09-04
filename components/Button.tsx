import styled from "styled-components";
import {Theme} from "../styles/Theme";
import {motion} from "framer-motion";

export const Button = styled(motion.div)`
  border: 1px solid #000;
  padding: 1rem 2rem;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 1);
  background-color: ${Theme.colors.white};
  width: max-content;
`;