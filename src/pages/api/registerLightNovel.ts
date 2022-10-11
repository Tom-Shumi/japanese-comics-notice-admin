import { convertDateToString } from 'components/utils/DateUtil';
import db from 'components/utils/DbUtil';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    result: any
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const connection = await db();
    
    const now = new Date();
    const releaseDate = new Date(req.query.releaseDate as string);
    let releaseDateStr = convertDateToString(releaseDate);

    let insertSql;
    if (releaseDate > new Date(now.getFullYear(), now.getMonth(), now.getDate())) {
        insertSql = `INSERT INTO reservableVolumeLightNovel (asin, title, volumeNum, url, releaseDate) VALUES ('${req.query.asin}', '${req.query.title}', 0, '${req.query.url}', '${releaseDateStr}')`;
    } else {
        insertSql = `INSERT INTO newVolumeLightNovel (asin, title, volumeNum, url, releaseDate, tweetCount) VALUES ('${req.query.asin}', '${req.query.title}', 0, '${req.query.url}', '${releaseDateStr}', 0)`;
    }
    
    try {
        await connection.query(insertSql);
    } catch(error) {
        connection.end();
        res.status(200).json({ result: "ERROR" });
    }

    connection.end();
    res.status(200).json({ result: "DONE" });
}



export default handler;
