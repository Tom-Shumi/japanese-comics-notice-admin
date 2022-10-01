import React, { useEffect, useState } from 'react';
import Layout from 'components/commons/Layout';
import styles from 'styles/NewPublishedComicList.module.css';
import axios from "components/utils/ApiUtil";
import { Comic } from 'components/models/Comic';

interface ListProps {
    type: string
    color: string
}

const List: React.FC<ListProps> = (props) => {
    const [volumes, setVolumes] = useState<Comic[]>([]);
    const [seachedTitle, setSeachedTitle] = useState("");
    
    useEffect(() => { 
        fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetch = async () => {
        const res = await axios.get(`/api/fetch${props.type}`);
        setVolumes(res.data);
    }

    const search = async () => {
        const res = await axios.get(`/api/fetch${props.type}`
        , {params: {
            title: seachedTitle
        }});
        setVolumes(res.data);
    }

    const deleteComic = async (id: number) => {
        if (!confirm("OK?")) {
            return;
        }

        const res = await axios.get(`/api/delete${props.type}`
        , {params: {
            id: id
        }});

        alert(res.data.result);
        fetch();
    }

    return (
        <Layout color={props.color}>
            <h2>{props.type} List</h2>
            <div>
                <input type="text" value={seachedTitle} onChange={(event) => setSeachedTitle(event.target.value)} className={styles.searchText} />
                <button type="button" className={styles.searchButton} onClick={search}>Search</button>
            </div>
            <h4>Count: {volumes.length}</h4>
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
                            volumes.map((volume) => (
                                <tr key={"volume" + volume.id}>
                                    <td className={styles.tableTd}>{volume.asin}</td>
                                    <td className={styles.tableTd}>{volume.title}</td>
                                    <td className={styles.tableTd}>{volume.volumeNum}</td>
                                    <td className={styles.tableTd}><a href={volume.url} target="_blank" rel="noopener noreferrer">{volume.url}</a></td>
                                    <td className={styles.tableTd}>{volume.releaseDate}</td>
                                    <td className={styles.tableTd}>
                                        <button type="button" onClick={() => deleteComic(volume.id)}>
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

export default List;