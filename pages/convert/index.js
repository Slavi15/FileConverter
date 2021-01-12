import axios from 'axios';
import styles from '../../styles/Convert.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDropzone } from 'react-dropzone';
import { useCallback } from 'react';
const ProgressBar = require('progressbar.js');

const Convert = () => {
    const onDrop = useCallback(acceptedFiles => {
        for (let i = 0; i < acceptedFiles.length; i++) {
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
                                strokeWidth: 0.5,
                                easing: 'easeInOut',
                                duration: 1500,
                                color: '#507255',
                                svgStyle: { 
                                    width: '100%', 
                                    height: '100%',
                                    margin: 'auto auto 67.5px auto' 
                                },
                                from: {
                                    color: '#C5E063' 
                                },
                                to: { 
                                    color: '#507255' 
                                },
                                step: (state, bar) => {
                                    bar.path.setAttribute('stroke', state.color);
                                }
                            });
                            bar.animate(1);

                            setTimeout(() => {
                                bar.destroy();
                            }, 1700);
                        }, 200)
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
        <div className={styles.acceptedfiles} key={file.path}>
            <div className={styles.filescontainer}>
                <FontAwesomeIcon className={styles.filesicon} icon={['far', 'file']} /><div className={styles.filediv}>{file.path}</div>
                <FontAwesomeIcon className={styles.timesicon} icon={['fas', 'times']} />
            </div>
            <div id="container" className={styles.linecontainer}></div>
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
                    <div>{files}</div>
                </div>
            </section>
            <button className={styles.button}>Convert</button>
        </div>
    )
}

export default Convert;

//  fname.slice((fname.lastIndexOf(".") - 1 >>> 0) + 2);    check file extension