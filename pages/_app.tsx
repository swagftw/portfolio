import "../styles/Global.styles"

import {AppProps} from "next/app"
import Layout from "../components/Layout";
import {GlobalStyles} from "../styles/Global.styles";

function App({Component, pageProps}: AppProps) {
    return <div>
        <GlobalStyles/>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </div>
}

export default App