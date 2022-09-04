import {NextPage} from "next";
import {PageTransition} from "../components/Common";
import {Wrapper} from "../styles/Global.styles";
import {Heading} from "../styles/Theme";

const Experience: NextPage = () => {
    return <PageTransition>
        <Page/>
    </PageTransition>
}

function Page() {
    return <Wrapper alignItems="center">
        <Wrapper maxWidth="50rem" minWidth="35rem" margin="12rem 4rem 0 4rem" height="100%" width="100%">
            <Heading>Experience</Heading>
        </Wrapper>
    </Wrapper>
}

export default Experience