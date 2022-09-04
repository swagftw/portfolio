import {NextPage} from "next";
import {Wrapper} from "../styles/Global.styles";
import {Body, Heading, SubHeading, Theme} from "../styles/Theme";
import {PageTransition, SizedBox} from "../components/Common";
import {Button} from "../components/Button";
import Image from "next/image";
import Github from "../public/images/github.svg";
import Linkedin from "../public/images/linkedin.svg";
import Twitter from "../public/images/twitter.svg";
import Stackoverflow from "../public/images/stack.svg";
import {useRouter} from "next/router";

const Home: NextPage = () => {
    return (
        <PageTransition>
            <Page/>
        </PageTransition>

    )
}

function Page() {
    const router = useRouter();

    return (<Wrapper alignItems="center">
        <Wrapper maxWidth="50rem" minWidth="35rem" margin="12rem 4rem 0 4rem" height="100%">
            <SubHeading color={Theme.colors.gray800} weight={Theme.fontWeights.medium}
                        letterSpacing="1px">
                Hey there, I am
            </SubHeading>
            <Heading size="3rem" weight={Theme.fontWeights.semiBold}>
                Swapnil Nakade
            </Heading>
            <SubHeading color={Theme.colors.gray800} weight={Theme.fontWeights.medium}
                        letterSpacing="1px"
                        size={Theme.fontSizes.xxl}>
                I build Backend & Stuff
            </SubHeading>
            <SizedBox height="2rem"/>
            <Wrapper maxWidth="80%">
                <Body color={Theme.colors.gray800}>
                    I’m a software engineer who loves to architect backend services,
                    build mobile apps and know how to deploy things on cloud nine.
                    Now focused to achieve better & safe cloud automation at EnableIT.
                </Body>
            </Wrapper>
            <SizedBox height="3rem"/>

            <Button whileHover={{boxShadow: "8px 8px 0 rgba(0, 0, 0, 1)"}} onClick={() => router.push("/blogs")}
                    whileTap={{boxShadow: "4xp 4px 0 rgba(0, 0, 0, 1)"}} transition={{duration: 0.1}}>
                <Body weight={Theme.fontWeights.medium}>
                    Check out my blog
                </Body>
            </Button>
            <SizedBox height="8rem"/>
            <Wrapper flexDirection="row" alignItems="center" margin="0 0 2rem 0">
                {
                    myLinks.map((link, index) => (
                        <Wrapper key={index} margin="0 3rem 0 0">
                            <a href={link.href} target="_blank" rel="noreferrer" title={link.name}>
                                <Image src={link.icon} alt={link.name}/>
                            </a>
                        </Wrapper>
                    ))
                }
            </Wrapper>
        </Wrapper>
    </Wrapper>)
}

interface MyLink {
    href: string;
    icon: string;
    name: string;
}

const myLinks: MyLink[] = [
    {href: "https://github.com/swagftw", icon: Github, name: "Github"},
    {href: "https://www.linkedin.com/in/swapnil-nakade-521627166/", icon: Linkedin, name: "Linkedin"},
    {href: "https://twitter.com/swapnil_nakade_", icon: Twitter, name: "Twitter"},
    {href: "https://stackoverflow.com/users/11320875/swapnil-nakade", icon: Stackoverflow, name: "Stackoverflow"}
]

export default Home