import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
import styles from '../../styles/Convert.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDropzone } from 'react-dropzone';
import { useCallback, useEffect } from 'react';
const ProgressBar = require('progressbar.js');

const Convert = () => {
    useEffect(() => {
        const resultTag = document.getElementById('result');
        resultTag.style.display = 'none';
    })

    const onDrop = useCallback(acceptedFiles => {
        for (let i = 0; i < acceptedFiles.length; i++) {
            //console.dir(acceptedFiles[i]);
            
            setTimeout(() => {
                const container = document.getElementById('container');
                const bar = new ProgressBar.Line(container, {
                    strokeWidth: 0.5,
                    easing: 'easeInOut',
                    duration: 700,
                    color: '#507255',
                    svgStyle: {
                        width: '100%', 
                        height: '100%'
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
                }, 900);
            }, 100);

            const convertFunction = async() => {
                const convertapi = ConvertApi.auth({ secret: publicRuntimeConfig.CONVERT_API });

                const params = convertapi.createParams();
                params.add('file', acceptedFiles[i]);

                const list1 = document.getElementById('selectList1');
                const list2 = document.getElementById('selectList2');

                let option1 = list1.options[list1.selectedIndex].value;
                let option2 = list1.options[list2.selectedIndex].value;

                const result = await convertapi.convert(option1, option2, params)
                .then(res => {
                    //console.dir(res.dto.Files[0]);

                    const resultLink = document.getElementById('resultlink');
                    const resultTag = document.getElementById('result');


                    if(res) {
                        resultLink.setAttribute('href', res.dto.Files[0].Url);
                        resultLink.innerText = res.dto.Files[0].Url;
                        resultTag.style.display = 'block';
                    };
                                    
                })
    
                //console.dir(params);
                //console.dir(result);
            };     
            
            const removeFile = () => {
                const element = document.getElementById('filetoremove');
                element.parentNode.removeChild(element);
            };

            onDrop.convertFunction = convertFunction;
            onDrop.removeFile = removeFile;
        }
    }, []);

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        onDrop,
        multiple: false,
        accept:
            [   
                'image/png', 
                'image/jpeg', 
                'image/jpg', 
                'image/gif', 
                'image/tiff', 
                'text/plain', 
                'application/vnd.ms-powerpoint', 
                'application/vnd.openxmlformats-officedocument.presentationml.presentation', 
                'application/msword', 
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'application/vnd.ms-excel',
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'application/pdf' 
            ]
    });

    const files = acceptedFiles.map(file => (
        <div className={styles.acceptedfiles} key={file.path}>
            <div className={styles.filescontainer} id="filetoremove">
                <FontAwesomeIcon className={styles.filesicon} icon={['far', 'file']} /><div className={styles.filediv}>{file.path}</div>
                <FontAwesomeIcon className={styles.timesicon} icon={['fas', 'times']} onClick={onDrop.removeFile} />
            </div>
            <div id="container" className={styles.linecontainer}></div>
        </div>
    ));

    return (
        <div>
            <div className={styles.convslogan}>Create, Select, Convert!</div>
            <div className={styles.select}>
                <select name="files1" defaultValue="select" className={styles.selectcontent} id="selectList1">
                    <option value="select" disabled>Select</option>
                    <option value="txt">txt</option>
                    <option value="jpg">jpg</option>
                    <option value="png">png</option>
                    <option value="pdf">pdf</option>
                    <option value="doc">doc</option>
                    <option value="docx">docx</option>
                    <option value="ppt">ppt</option>
                    <option value="pptx">pptx</option>
                    <option value="xls">xls</option>
                    <option value="xlsx">xlsx</option>
                </select>
                <FontAwesomeIcon className={styles.arrow} icon="arrow-right" />
                <select name="files2" defaultValue="select" className={styles.selectcontent} id="selectList2">
                    <option value="select" disabled>Select</option>
                    <option value="txt">txt</option>
                    <option value="jpg">jpg</option>
                    <option value="png">png</option>
                    <option value="pdf">pdf</option>
                    <option value="docx">docx</option>
                    <option value="pptx">pptx</option>
                    <option value="xlsx">xlsx</option>
                </select>
            </div>
            <section className={styles.container}>
                <div className={styles.innercontainer} {...getRootProps()}>
                    <input type="file" name="file" {...getInputProps()} />
                    <FontAwesomeIcon className={styles.file} icon={['far', 'file']} />
                    <div className={styles.textcontent}>Drag 'n' drop some files!</div>
                </div>
                <div>
                    <div>{files}</div>
                </div>
            </section>
            <div className={styles.result} id="result">Converted File: <a href="" className={styles.resultlink} id="resultlink"></a></div>
            <button className={styles.button} onClick={onDrop.convertFunction}>Convert</button>
        </div>
    )
}

export default Convert;

//  fname.slice((fname.lastIndexOf(".") - 1 >>> 0) + 2);    check file extension