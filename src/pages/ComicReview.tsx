import React, { useState } from 'react';
import type { NextPage } from 'next';
import Layout from 'components/commons/Layout';
import styles from 'styles/ComicReview.module.css';
import axios from "components/utils/ApiUtil";
import * as stringUtil from "components/utils/StringUtil";

const ComicReview: NextPage = () => {
    const reviewCount = 5;
    const [usTitle, setUsTitle] = useState("");
    const [volumeNum, setVolumeNum] = useState("");
    const [stars, setStars] = useState([...Array(reviewCount)].map(() => ""));
    const [reviews, setReviews] = useState([...Array(reviewCount)].map(() => ""));

    const doRegister = async () => {

        if (usTitle == "" || volumeNum == "") {
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
            }}
        );
        alert(res.data.result);
        setUsTitle("");
        setVolumeNum("");
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
                {reviews.map((review, outerIndex) => {
                    return (
                        <div key={"review" + outerIndex}>
                            <div className="row">
                                <h3>Star[{outerIndex + 1}]</h3>
                                <input type="text" value={stars[outerIndex]}
                                    onChange={(event) => setStars(stars.map((star, innerIndex) => (innerIndex === outerIndex ? event.target.value : star)))}></input>
                            </div><br />
                            <div className="row">
                                <h3>Review[{outerIndex + 1}]</h3>
                                <textarea rows={5} value={review}
                                    onChange={(event) => setReviews(reviews.map((review, innerIndex) => (innerIndex === outerIndex ? event.target.value : review)))}></textarea>
                            </div>
                            <div>char count: {review.length}</div><br />
                        </div>
                    )}) 
                }
                <button type="button" className={styles.registerButton} onClick={doRegister}>
                    Register
                </button>
            </div>
        </Layout>
    )
}

export default ComicReview
