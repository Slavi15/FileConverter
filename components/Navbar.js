import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    const navSlide = () => {
        const nav = document.getElementById('nav');
        nav.style.width = '250px';
        const main = document.getElementsByTagName('body')[0];
        main.style.marginRight = '250px';
        if(window.innerWidth < 660){
            main.style.marginRight = '0';
        }
    };
    const closeNav = () => {
        const nav = document.getElementById('nav');
        nav.style.width = '0';
        const main = document.getElementsByTagName('body')[0];
        main.style.marginRight = '0';
    };
    return (
        <div id="main">
            <div className={styles.navbar}>
                <Link href="/"><div className={styles.logo}>Convertle</div></Link>
                <div className={styles.navlinks} id="nav">
                    <FontAwesomeIcon onClick={closeNav} className={styles.times} icon="times" />
                    <Link href="/"><div className={styles.links}>Home</div></Link>
                    <Link href="/convert"><div className={styles.links}>Convert</div></Link>
                    <Link href="/test"><div className={styles.links}>Test</div></Link>
                    <Link href="/test"><div className={styles.links}>Test</div></Link>
                </div>
                <FontAwesomeIcon onClick={navSlide} className={styles.burger} icon="bars" />
            </div>
        </div>
    )
}

export default Navbar;