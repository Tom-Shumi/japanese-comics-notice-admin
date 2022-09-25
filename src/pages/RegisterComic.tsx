import React, { useState, useRef } from 'react';
import type { NextPage } from 'next';
import Layout from 'components/commons/Layout';
import styles from 'styles/RegisterComic.module.css';
import axios from "components/utils/ApiUtil";
import * as stringUtil from "components/utils/StringUtil";

const RegisterComic: NextPage = () => {
    const [usUrl, setUsUrl] = useState("");
    const [usTitle, setUsTitle] = useState("");
    const [volumeNum, setVolumeNum] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [asin, setAsin] = useState("");

    const refAsin = useRef<HTMLInputElement>(null);
    const refUsUrl = useRef<HTMLInputElement>(null);
    
    const doRegister = async () => {

        if (usUrl == "" || usTitle == "" || volumeNum == "" || releaseDate == "" || asin == "") {
            alert("Can not insert null.");
            return;
        }

        if (!confirm("OK?")) {
            return;
        }

        const res = await axios.get("/api/registerComic"
            , {params: {
                usUrl: usUrl,
                usTitle: stringUtil.replaceIllegalString(usTitle),
                volumeNum: volumeNum,
                releaseDate: releaseDate,
                asin: asin
            }}
        );
        alert(res.data.result);
        setUsUrl("");
        setUsTitle("");
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

        const res = await axios.get("/api/checkAsin"
            , {params: {
                asin: asin
            }}
        );

        const result = res.data.result;
        alert(result);
        
        if (result == "NG") {
            setUsUrl("");
            setUsTitle("");
            setVolumeNum("");
            setReleaseDate("");
            setAsin("");
            refAsin.current?.focus();
            return;
        }

        refUsUrl.current?.focus();
    }

    return (
        <Layout color='white'>
            <h2>◆Register Comic</h2>
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
                    <input type="text" value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)}></input>
                </div><br />
                <div className="row">
                    <h3>Us Url</h3>
                    <input type="text" ref={refUsUrl} value={usUrl} onChange={(event) => setUsUrl(event.target.value)}></input>
                </div><br />
                <div className="row">
                    <h3>Us Title</h3>
                    <input type="text" value={usTitle} onChange={(event) => setUsTitle(event.target.value)}></input>
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

export default RegisterComic
