import styles from '../../styles/Convert.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDropzone } from 'react-dropzone';

const Convert = () => {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        multiple: true,
        accept: 'image/png, image/jpeg, image/jpg, image/gif, image/tiff, text/plain, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf'
    });

    const files = acceptedFiles.map(file => (
        <div className={styles.filescontainer} key={file.path}>
            <FontAwesomeIcon className={styles.filesicon} icon={['far', 'file']} /><div className={styles.filediv}>{file.path}</div>
        </div>
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
                    <FontAwesomeIcon className={styles.file} icon={['far', 'file']} />
                    <div className={styles.textcontent}>Drag 'n' drop some files!</div>
                </div>
                <div>
                    <div className={styles.filestext}>Files</div>
                    <div>{files}</div>
                </div>
            </section>
        </div>
    )
}

export default Convert;

//  fname.slice((fname.lastIndexOf(".") - 1 >>> 0) + 2);    check file extension