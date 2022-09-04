import Navbar from "./Navbar";
import {Wrapper} from "../styles/Global.styles";
import Image from "next/image";
import Bg from "../public/images/bg.png";

export default function Layout({children}: any) {
    return (
        <Wrapper position="relative" top="0" right="0" width="100vw" height="100vh">
            <div style={{zIndex: "-1"}}>
                <Image src={Bg} layout="fill"/>
            </div>
            <Navbar/>
            <main>{children}</main>
        </Wrapper>
    )
}