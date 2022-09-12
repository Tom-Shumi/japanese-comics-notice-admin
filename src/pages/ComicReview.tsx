import React, { useState } from 'react';
import type { NextPage } from 'next';
import Layout from 'components/commons/Layout';
import styles from 'styles/ComicReview.module.css';
import axios from "components/utils/ApiUtil";
import * as stringUtil from "components/utils/StringUtil";

const ComicReview: NextPage = () => {
    const [usTitle, setUsTitle] = useState("");
    const [volumeNum, setVolumeNum] = useState("");
    const [star, setStar] = useState("");
    const [review, setReview] = useState("");

    const doRegister = async () => {

        if (usTitle == "" || volumeNum == "" || star == "" || review == "") {
            alert("Can not insert null.");
            return;
        }

        if (!confirm("OK?")) {
            return;
        }

        const res = await axios.get("/api/registerComicReview"
            , {params: {
                usTitle: stringUtil.replaceIllegalString(usTitle),
                volumeNum: volumeNum,
                star: star,
                review: stringUtil.replaceIllegalString(review)
            }}
        );
        alert(res.data.result);
        setUsTitle("");
        setVolumeNum("");
        setStar("");
        setReview("");
    }

    return (
        <Layout>
            <h2>◆Comic Review</h2>
            <div className={styles.container}>
                <div className="row">
                    <h3>Us Title</h3>
                    <input type="text" value={usTitle} onChange={(event) => setUsTitle(event.target.value)}></input>
                </div><br />
                <div className="row">
                    <h3>Volume Number</h3>
                    <input type="text" value={volumeNum} onChange={(event) => setVolumeNum(event.target.value)}></input>
                </div><br />
                <div className="row">
                    <h3>Star</h3>
                    <input type="text" value={star} onChange={(event) => setStar(event.target.value)}></input>
                </div><br />
                <div className="row">
                    <h3>Review</h3>
                    <textarea rows={5} value={review} onChange={(event) => setReview(event.target.value)}></textarea>
                </div>
                <div>char count: {review.length}</div>
                <br />
                <button type="button" className={styles.registerButton} onClick={doRegister}>
                    Register
                </button>
            </div>
        </Layout>
    )
}

export default ComicReview
