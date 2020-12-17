import Head from 'next/head';
import Navbar from './Navbar.js'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>File Converter</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            { children }
        </>
    )
}

export default Layout;