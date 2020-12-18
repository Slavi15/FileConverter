import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
    return (
        <div>
            <nav className={styles.navbar}>
                <Link href="/"><div className={styles.logo}>Convertle</div></Link>
                <div className={styles.navlinks}>
                    <Link href="/convert"><div className={styles.links}>Convert</div></Link>
                    <Link href="/about"><div className={styles.links}>About</div></Link>
                    <Link href="/contact"><div className={styles.links}>Contact Us</div></Link>
                    {/* <div><span className={styles.divider}>|</span></div> */}
                </div>
            </nav>
        </div>
    )
}

export default Navbar;