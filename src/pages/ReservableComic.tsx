import React, { useState } from 'react';
import type { NextPage } from 'next';
import Layout from 'components/commons/Layout';
import styles from 'styles/ReservableComic.module.css';
import axios from "components/utils/ApiUtil";
import * as stringUtil from "components/utils/StringUtil";

const ReservableComic: NextPage = () => {
    const [usUrl, setUsUrl] = useState("");
    const [usTitle, setUsTitle] = useState("");
    const [volumeNum, setVolumeNum] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [asin, setAsin] = useState("");

    const doRegister = async () => {

        if (usUrl == "" || usTitle == "" || volumeNum == "" || releaseDate == "" || asin == "") {
            alert("Can not insert null.");
            return;
        }

        if (!confirm("OK?")) {
            return;
        }

        const res = await axios.get("/api/registerReservableComic"
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
    }

    return (
        <Layout color='red'>
            <h2>◆Reservable Comic</h2>
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
                    <h3>Release Date</h3>
                    <input type="text" value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)}></input>
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

export default ReservableComic
