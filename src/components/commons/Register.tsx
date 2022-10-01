import React, { useState, useRef } from 'react';
import Layout from 'components/commons/Layout';
import styles from 'styles/RegisterComic.module.css';
import axios from "components/utils/ApiUtil";
import * as stringUtil from "components/utils/StringUtil";

interface RegisterProps {
    type: string
    color: string
}


const Register: React.FC<RegisterProps> = (props) => {
    const [url, setUrl] = useState("");
    const [title, setTitle] = useState("");
    const [volumeNum, setVolumeNum] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [asin, setAsin] = useState("");

    const refAsin = useRef<HTMLInputElement>(null);
    const refReleaseDate = useRef<HTMLInputElement>(null);
    
    const doRegister = async () => {

        if (url == "" || title == "" || volumeNum == "" || releaseDate == "" || asin == "") {
            alert("Can not insert null.");
            return;
        }

        if (!confirm("OK?")) {
            return;
        }

        const res = await axios.get(`/api/register${props.type}`
            , {params: {
                url: url,
                title: stringUtil.replaceIllegalString(title),
                volumeNum: volumeNum,
                releaseDate: releaseDate,
                asin: asin
            }}
        );
        alert(res.data.result);
        setUrl("");
        setTitle("");
        setVolumeNum("");
        setReleaseDate("");
        setAsin("");
        refAsin.current?.focus();
    }

    const checkAsin = async () => {
        if (asin == "") {
            refAsin.current?.focus();
            return;
        }

        const res = await axios.get(`/api/checkAsin${props.type}`
            , {params: {
                asin: asin
            }}
        );

        const result = res.data.result;
        alert(result);
        
        if (result == "NG") {
            setUrl("");
            setTitle("");
            setVolumeNum("");
            setReleaseDate("");
            setAsin("");
            refAsin.current?.focus();
            return;
        }

        refReleaseDate.current?.focus();
    }

    return (
        <Layout color={props.color}>
            <h2>◆Register {props.type}</h2>
            <div className={styles.container}>
                <div className="row">
                    <h3>ASIN</h3>
                    <div>
                        <input type="text" ref={refAsin} className={styles.asinText} value={asin} onChange={(event) => setAsin(event.target.value)}></input>
                        <button type="button" className={styles.checkAsinButton} onClick={checkAsin}>Check</button>
                    </div>
                </div><br />
                <div className="row">
                    <h3>Release Date</h3>
                    <input type="text" ref={refReleaseDate} value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)}></input>
                </div><br />
                <div className="row">
                    <h3>Url</h3>
                    <input type="text" value={url} onChange={(event) => setUrl(event.target.value)}></input>
                </div><br />
                <div className="row">
                    <h3>Title</h3>
                    <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}></input>
                </div><br />
                <div className="row">
                    <h3>Volume Number</h3>
                    <input type="text" value={volumeNum} onChange={(event) => setVolumeNum(event.target.value)}></input>
                </div><br />
                <button type="button" className={styles.registerButton} onClick={doRegister}>
                    Register
                </button>
            </div>
        </Layout>
    )
}

export default Register
