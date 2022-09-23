import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Layout from 'components/commons/Layout';
import styles from 'styles/ReservableComicList.module.css';
import axios from "components/utils/ApiUtil";
import { Data } from './api/fetchReservableComic';

const ReservableComicList: NextPage = () => {
    const [reservableVolumes, setReservableVolumes] = useState<Data[]>([]);
    const [seachedTitle, setSeachedTitle] = useState("");
    
    useEffect(() => { 
        fetchReservableComic();
    }, []);

    const fetchReservableComic = async () => {
        const res = await axios.get("/api/fetchReservableComic");
        setReservableVolumes(res.data);
    }

    const search = async () => {
        const res = await axios.get("/api/fetchReservableComic"
        , {params: {
            title: seachedTitle
        }});
        setReservableVolumes(res.data);
    }

    const deleteReservableComic = async (id: number) => {
        if (!confirm("OK?")) {
            return;
        }

        const res = await axios.get("/api/deleteReservableComic"
        , {params: {
            id: id
        }});

        alert(res.data.result);
        fetchReservableComic();
    }
    
    return (
        <Layout color='red'>
            <h2>◆Reservable Comic List</h2>
            <div>
                <input type="text" value={seachedTitle} onChange={(event) => setSeachedTitle(event.target.value)} className={styles.searchText} />
                <button type="button" className={styles.searchButton} onClick={search}>Search</button>
            </div>
            <h4>Reservable Comic Count: {reservableVolumes.length}</h4>
            <div className={styles.container}>
                <table>
                    <thead>
                        <tr>
                            <th className={styles.tableTh}>ASIN</th>
                            <th className={styles.tableTh}>TITLE</th>
                            <th className={styles.tableTh}>VOLUME</th>
                            <th className={styles.tableTh}>URL</th>
                            <th className={styles.tableTh}>RELEASE</th>
                            <th className={styles.tableTh}>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reservableVolumes.map((reservableVolume) => (
                                <tr key={"reservableVolume" + reservableVolume.id}>
                                    <td className={styles.tableTd}>{reservableVolume.asin}</td>
                                    <td className={styles.tableTd}>{reservableVolume.englishTitle}</td>
                                    <td className={styles.tableTd}>{reservableVolume.volumeNum}</td>
                                    <td className={styles.tableTd}><a href={reservableVolume.usUrl} target="_blank" rel="noopener noreferrer">{reservableVolume.usUrl}</a></td>
                                    <td className={styles.tableTd}>{reservableVolume.releaseDate}</td>
                                    <td className={styles.tableTd}>
                                        <button type="button" onClick={() => deleteReservableComic(reservableVolume.id)}>
                                            DELETE
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}

export default ReservableComicList;
