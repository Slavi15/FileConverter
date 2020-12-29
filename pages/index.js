import styles from "../styles/Home.module.scss";
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  return (
    <div className={styles.maincontent}>
      <div className={styles.slogan}>Converting files faster than ever before!</div>
      <div className={styles.desc}>
        Wrong file extensions are often a challenge for workers and students. 
        Convertle is the best choice for your needs. 
        Get your work done in less than a minute! 
      </div>
      <Link href="/convert"><button className={styles.button}>Start Now!</button></Link>
    </div>
  )
}

export default Home;