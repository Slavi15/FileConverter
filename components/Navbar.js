import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    const navSlide = () => {
        const nav = document.getElementById('nav');
        nav.style.width = '250px';
        const main = document.getElementById('main');
        main.style.marginRight = '250px';
    };
    const closeNav = () => {
        const nav = document.getElementById('nav');
        nav.style.width = '0';
        const main = document.getElementById('main');
        main.style.marginRight = '0';
    };
    return (
        <div id="main">
            <div className={styles.navbar}>
                <Link href="/"><div className={styles.logo}>Convertle</div></Link>
                <div className={styles.navlinks} id="nav">
                    <FontAwesomeIcon onClick={closeNav} className={styles.times} icon="times" />
                    <Link href="/convert"><div className={styles.links}>Convert</div></Link>
                    <Link href="/about"><div className={styles.links}>About</div></Link>
                    <Link href="/contact"><div className={styles.links}>Contact Us</div></Link>
                </div>
                <FontAwesomeIcon onClick={navSlide} className={styles.burger} icon="bars" />
            </div>
            <style jsx>
                {`
                #main {
                    transition: margin-right 1.5s;
                }
                `}
            </style>
        </div>
    )
}

export default Navbar;