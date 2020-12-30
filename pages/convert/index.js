import styles from '../../styles/Convert.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDropzone } from 'react-dropzone';

const Convert = () => {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

    const files = acceptedFiles.map(file => (
        <table>
            <tr>
                <th>File</th>
                <th>Size</th>
            </tr>
            <tr>
                <td>{file.path}</td>
                <td>{file.size}</td>
            </tr>
        </table>
    ));
    return (
        <div>
            <div className={styles.convslogan}>Create, Select, Convert!</div>
            <div className={styles.select}>
                <select name="files1" className={styles.selectcontent}>
                    <option value="select">Select</option>
                    <option value="txt">txt</option>
                    <option value="pdf">pdf</option>
                    <option value="jpg">jpg</option>
                    <option value="png">png</option>
                </select>
                <FontAwesomeIcon className={styles.arrow} icon="arrow-right" />
                <select name="files2" className={styles.selectcontent}>
                    <option value="select">Select</option>
                    <option value="txt">txt</option>
                    <option value="pdf">pdf</option>
                    <option value="jpg">jpg</option>
                    <option value="png">png</option>
                </select>
            </div>
            <section className={styles.container}>
                <div className={styles.innercontainer} {...getRootProps()}>
                    <input {...getInputProps()} />
                    <div className={styles.textcontent}>Drag 'n' drop some files!</div>
                </div>
                <aside>
                    <div className={styles.filestext}>Files</div>
                    <div>{files}</div>
                </aside>
            </section>
        </div>
    )
}

export default Convert;

//  fname.slice((fname.lastIndexOf(".") - 1 >>> 0) + 2);    check file extension