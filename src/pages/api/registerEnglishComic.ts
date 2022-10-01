import { convertUsDateToString } from 'components/utils/DateUtil';
import db from 'components/utils/DbUtil';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    result: any
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const connection = await db();
    
    const now = new Date();
    const releaseDate = new Date(req.query.releaseDate as string);
    let releaseDateStr = convertUsDateToString(releaseDate);

    let insertSql;
    if (releaseDate > new Date(now.getFullYear(), now.getMonth(), now.getDate())) {
        insertSql = `INSERT INTO reservableVolume (asin, englishTitle, volumeNum, usUrl, releaseDate) VALUES ('${req.query.asin}', '${req.query.title}', ${req.query.volumeNum}, '${req.query.url}', '${releaseDateStr}')`;
    } else {
        insertSql = `INSERT INTO newVolume (asin, englishTitle, volumeNum, url, usUrl, releaseDate) VALUES ('${req.query.asin}', '${req.query.title}', ${req.query.volumeNum}, '_', '${req.query.url}', '${releaseDateStr}')`;
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
