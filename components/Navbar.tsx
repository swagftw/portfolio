import {NavbarWrapper, LogoWrapper, NavTitle} from "./Navbar.styles";
import Image from "next/image";
import Logo from "../public/images/logo.svg";
import {JSX} from "@babel/types";
import Link from "next/link";
import {useRouter} from "next/router";
import {Wrapper} from "../styles/Global.styles";
import LinkIcon from "../public/images/link.svg";
import {SizedBox} from "./Common";

function Navbar() {
    const router = useRouter();
    return (
        <NavbarWrapper>
            <LogoWrapper>
                <Link href="/">
                    <Image src={Logo} alt='logo' layout="fill"/>
                </Link>
            </LogoWrapper>
            {
                navbarTitles.map<JSX.Element>((title, index) => {
                    return (
                        <Link href={title.link} key={index}>
                            <NavTitle onMouseEnter={() => router.push(title.link)}
                                      whileHover={{borderBottom: "1px solid black", transition: {duration: 0.2}}}
                                      page={router.pathname} path={title.link}>{
                                title.title}
                            </NavTitle>
                        </Link>
                    );
                })
            }
            <a href="https://drive.google.com/file/d/1qGtgfhf73oU9AEIIhfFV-p2pRfN7CXSg/view?usp=sharing" target="_blank"
               rel="noreferrer">
                <Wrapper display="flex" flexDirection="row" alignItems="center">
                    <NavTitle
                        whileHover={{borderBottom: "1px solid black", transition: {duration: 0.2}}}
                        page={router.pathname} path="">Resume</NavTitle>
                    <SizedBox width="0.5rem"/>
                    <Image src={LinkIcon} width="24" height="24" alt="icon"/>
                </Wrapper>
            </a>

        </NavbarWrapper>
    )
}

interface NavbarTitles {
    title: string;
    link: string;
    page: string;
}

const navbarTitles: NavbarTitles[] = [
    {title: 'About', link: '/', page: 'about'},
    {title: 'Experience', link: '/xp', page: 'xp'},
    {title: 'Projects', link: '/projects', page: 'projects'},
    {title: 'Blogs', link: '/blogs', page: 'blogs'},
]

export default Navbar;