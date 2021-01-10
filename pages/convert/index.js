import axios from 'axios';
import styles from '../../styles/Convert.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDropzone } from 'react-dropzone';
import { useCallback, useEffect } from 'react';
const ProgressBar = require('progressbar.js');

const Convert = () => {
    const onDrop = useCallback(acceptedFiles => {
        for (let i = 0; i < acceptedFiles.length; i++) {
            console.log(acceptedFiles[i]);
            const data = {
                path: acceptedFiles[i].path,
                size: acceptedFiles[i].size,
                type: acceptedFiles[i].type
            };

            axios.post('http://localhost:3000/api/convert', data, { headers: { 'Content-Type': 'application/json' } })
                .then(res => {
                    console.log(res.data);
                    if (res.data) {
                        setTimeout(() => {
                            const container = document.getElementById('container');
                            const bar = new ProgressBar.Line(container, {
                                strokeWidth: 1.5,
                                easing: 'easeInOut',
                                duration: 1500,
                                color: '#507255',
                                svgStyle: { width: '100%', height: '100%' },
                                from: { color: '#C5E063' },
                                to: { color: '#507255' },
                                step: (state, bar) => {
                                    bar.path.setAttribute('stroke', state.color);
                                }
                            })

                            bar.animate(1);
                        },350)
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }, []);

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        onDrop,
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
                <div id="container"></div>
                <div>
                    <div>{files}</div>
                </div>
            </section>
            <button className={styles.button}>Convert</button>
            <style jsx>
                {`
                #container {
                    margin: 17.5px auto;
                }
                `}
            </style>
        </div>
    )
}

export default Convert;

//  fname.slice((fname.lastIndexOf(".") - 1 >>> 0) + 2);    check file extension