import Head from 'next/head';
import Navbar from './Navbar.js'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>convertle</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            { children }
        </>
    )
}

export default Layout;