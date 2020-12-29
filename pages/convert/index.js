import styles from '../../styles/Convert.module.scss';

const Convert = () => {
    return (
        <div>
            <div className={styles.convslogan}>Create, Select, Convert!</div>
        </div>
    )
}

export default Convert;

//  fname.slice((fname.lastIndexOf(".") - 1 >>> 0) + 2);    check file extension