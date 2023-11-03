import React, { useState, useRef } from 'react';
import Layout from 'components/commons/Layout';
import styles from 'styles/AsinRegisteredCheck.module.css';
import axios from "components/utils/ApiUtil";
import * as stringUtil from "components/utils/StringUtil";

const AsinRegisteredCheck: React.FC = () => {
    const [asinListStr, setAsinListStr] = useState("");
    const [amazonUrlList, setAmazonUrlList] = useState<string[]>([]);

    const refAsin = useRef<HTMLInputElement>(null);
    
    const doCheck = async () => {
        const tempAmazonUrlList: string[] = []
        const asinList = asinListStr.split("\n");
        for (const asin of asinList) {
            if (asin != "") {
                const res = await axios.get(`/api/checkAsinLightNovel`, {params: {asin: asin}});
                if (res.data.result == "OK") {
                    tempAmazonUrlList.push(`https://www.amazon.co.jp/dp/${asin}`)
                }
            }
        }
        setAmazonUrlList(tempAmazonUrlList)
        setAsinListStr("")
    }

    return (
        <Layout color="red">
            <h2>◆ASIN Registered Check</h2>
            <div className={styles.container}>
                <div className="row">
                    <h3>ASIN</h3>
                    <textarea rows={20} cols={20} value={asinListStr} onChange={(event) => setAsinListStr(event.target.value)}></textarea>
                </div><br />
                <button type="button" className={styles.checkAsinButton} onClick={doCheck}>
                    Check
                </button>
                <div>
                    {
                        amazonUrlList.map((amazonUrl) => (
                            <><a href={amazonUrl} target="_blank" rel="noopener noreferrer" key={amazonUrl}>{amazonUrl}</a><br /></>
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}

export default AsinRegisteredCheck
