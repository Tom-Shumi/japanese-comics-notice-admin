import React, { useState } from 'react';
import type { NextPage } from 'next';
import Layout from 'components/commons/Layout';
import styles from 'styles/AlreadyPublishedComic.module.css';
import axios from "components/utils/ApiUtil";
import * as stringUtil from "components/utils/StringUtil";

const AlreadyPublishedComic: NextPage = () => {
    const [jpTitle, setJpTitle] = useState("");
    const [usTitle, setUsTitle] = useState("");
    const [usUrls, setUsUrls] = useState("");

    const doRegister = async () => {

        if (jpTitle == "" || usTitle == "" || usUrls == "") {
            alert("Can not insert null.");
            return;
        }

        if (!confirm("OK?")) {
            return;
        }

        const res = await axios.get("/api/registerAlreadyPublishedComic"
            , {params: {
                jpTitle: stringUtil.replaceIllegalString(jpTitle),
                usTitle: stringUtil.replaceIllegalString(usTitle),
                usUrls: usUrls
            }}
        );
        alert(res.data.result);
        setJpTitle("");
        setUsTitle("");
        setUsUrls("");
    }

    return (
        <Layout>
            <h2>◆Already Published Comic</h2>
            <div className={styles.container}>
                <div className="row">
                    <h3>Jp Title</h3>
                    <input type="text" value={jpTitle} onChange={(event) => setJpTitle(event.target.value)}></input>
                </div><br />
                <div className="row">
                    <h3>Us Title</h3>
                    <input type="text" value={usTitle} onChange={(event) => setUsTitle(event.target.value)}></input>
                </div><br />
                <div className="row">
                    <h3>Us Url</h3>
                    <textarea rows={15} value={usUrls} onChange={(event) => setUsUrls(event.target.value)}></textarea>
                </div><br />
                <button type="button" className={styles.registerButton} onClick={doRegister}>
                    Register
                </button>
            </div>
        </Layout>
    )
}

export default AlreadyPublishedComic
