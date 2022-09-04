import styled from "styled-components";
import {AnimatePresence, motion} from "framer-motion";

interface CommonProps {
    height?: string;
    width?: string;

}

export const SizedBox = styled.div<CommonProps>`
  height: ${props => props.height || "0"};
  width: ${props => props.width || "0"};
`;


export function PageTransition({children}: any) {
    return (<AnimatePresence>
        <motion.div
            initial={{y: 10, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            exit={{y: -10, opacity: 0}}
            transition={{duration: 0.4}}>
            {children}
        </motion.div>
    </AnimatePresence>)
}