import Head from 'next/head';
import Navbar from './Navbar.js';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>convertle</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Convertle. All file extensions are supported! Free and open-source project."></meta>
            </Head>
            <Navbar />
            { children }
        </>
    )
}

export default Layout;