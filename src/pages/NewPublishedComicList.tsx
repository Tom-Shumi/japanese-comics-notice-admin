import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Layout from 'components/commons/Layout';
import styles from 'styles/NewPublishedComicList.module.css';
import axios from "components/utils/ApiUtil";
import { Data } from './api/fetchNewPublishedComic';

const NewPublishedComicList: NextPage = () => {
    const [newVolumes, setNewVolumes] = useState<Data[]>([]);
    
    useEffect(() => { 
        fetchNewPublishedComic();
    }, []);

    const fetchNewPublishedComic = async () => {
        const res = await axios.get("/api/fetchNewPublishedComic");
        setNewVolumes(res.data);
    }

    const deleteNewPublishedComic = async (id: number) => {
        if (!confirm("OK?")) {
            return;
        }

        const res = await axios.get("/api/deleteNewPublishedComic"
        , {params: {
            id: id
        }});

        alert(res.data.result);
        fetchNewPublishedComic();
    }

    return (
        <Layout color='yellow'>
            <h2>◆New Published Comic List</h2>
            <h4>New Comic Count: {newVolumes.length}</h4>
            <div className={styles.container}>
                <table>
                    <thead>
                        <tr>
                            <th className={styles.tableTh}>ASIN</th>
                            <th className={styles.tableTh}>TITLE</th>
                            <th className={styles.tableTh}>VOLUME</th>
                            <th className={styles.tableTh}>URL</th>
                            <th className={styles.tableTh}>CREATED</th>
                            <th className={styles.tableTh}>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            newVolumes.map((newVolume) => (
                                <tr key={"newVolume" + newVolume.id}>
                                    <td className={styles.tableTd}>{newVolume.asin}</td>
                                    <td className={styles.tableTd}>{newVolume.englishTitle}</td>
                                    <td className={styles.tableTd}>{newVolume.volumeNum}</td>
                                    <td className={styles.tableTd}><a href={newVolume.usUrl} target="_blank" rel="noopener noreferrer">{newVolume.usUrl}</a></td>
                                    <td className={styles.tableTd}>{newVolume.created_at}</td>
                                    <td className={styles.tableTd}>
                                        <button type="button" onClick={() => deleteNewPublishedComic(newVolume.id)}>
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

export default NewPublishedComicList;