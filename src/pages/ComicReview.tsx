import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Layout from 'components/commons/Layout';
import styles from 'styles/ComicReview.module.css';
import axios from "components/utils/ApiUtil";
import * as stringUtil from "components/utils/StringUtil";
import Select from 'react-select';

type Data = {
    value: string,
    label: string
}

const ComicReview: NextPage = () => {
    const reviewCount = 5;
    const [comicId, setComicId] = useState("");
    const [volumeNum, setVolumeNum] = useState("");
    const [stars, setStars] = useState([...Array(reviewCount)].map(() => ""));
    const [reviews, setReviews] = useState([...Array(reviewCount)].map(() => ""));
    const [comics, setComics] = useState<Data[]>([]);

    useEffect(() => { 
        fetchUsComicTitle();
    }, []);

    const fetchUsComicTitle = async () => {
        const res = await axios.get("/api/fetchUsComicTitle");
        setComics(res.data);
    }
    

    const doRegister = async () => {

        if (comicId == "" || volumeNum == "") {
            alert("Can not insert null.");
            return;
        }

        if (!confirm("OK?")) {
            return;
        }

        const res = await axios.get("/api/registerComicReview"
            , {params: {
                comicId: comicId,
                volumeNum: volumeNum,
                stars: stars.join("_"),
                reviews: reviews.join("_")
            }}
        );
        alert(res.data.result);
        setComicId("");
        setVolumeNum("");
        setStars([...Array(reviewCount)].map(() => ""));
        setReviews([...Array(reviewCount)].map(() => ""));
    }

    return (
        <Layout>
            <h2>◆Comic Review</h2>
            <div className={styles.container}>
                <div className="row">
                    <h3>Us Title</h3>
                    <Select id="usTitleSelect" instanceId="usTitleSelect" options={comics} onChange={(e) => setComicId(e!.value)} />
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
