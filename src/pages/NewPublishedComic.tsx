import React, { useState } from 'react';
import type { NextPage } from 'next';
import Layout from 'components/commons/Layout';
import styles from 'styles/NewPublishedComic.module.css';
import axios from "components/utils/ApiUtil";
import * as stringUtil from "components/utils/StringUtil";

const NewPublishedComic: NextPage = () => {
    const [usUrl, setUsUrl] = useState("");
    const [usTitle, setUsTitle] = useState("");
    const [volumeNum, setVolumeNum] = useState("");
    const [asin, setAsin] = useState("");

    const doRegister = async () => {

        if (usUrl == "" || usTitle == "" || volumeNum == "" || asin == "") {
            alert("Can not insert null.");
            return;
        }

        if (!confirm("OK?")) {
            return;
        }

        const res = await axios.get("/api/registerNewPublishedComic"
            , {params: {
                usUrl: usUrl,
                usTitle: stringUtil.replaceIllegalString(usTitle),
                volumeNum: volumeNum,
                asin: asin
            }}
        );
        alert(res.data.result);
        setUsUrl("");
        setUsTitle("");
        setVolumeNum("");
        setAsin("");
    }

    return (
        <Layout>
            <h2>◆New Published Comic</h2>
            <div className={styles.container}>
                <div className="row">
                    <h3>Us Url</h3>
                    <input type="text" value={usUrl} onChange={(event) => setUsUrl(event.target.value)}></input>
                </div><br />
                <div className="row">
                    <h3>Us Title</h3>
                    <input type="text" value={usTitle} onChange={(event) => setUsTitle(event.target.value)}></input>
                </div><br />
                <div className="row">
                    <h3>Volume Number</h3>
                    <input type="text" value={volumeNum} onChange={(event) => setVolumeNum(event.target.value)}></input>
                </div><br />
                <div className="row">
                    <h3>ASIN</h3>
                    <input type="text" value={asin} onChange={(event) => setAsin(event.target.value)}></input>
                </div><br />
                <button type="button" className={styles.registerButton} onClick={doRegister}>
                    Register
                </button>
            </div>
        </Layout>
    )
}

export default NewPublishedComic
