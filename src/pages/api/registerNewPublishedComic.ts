import db from 'components/utils/DbUtil';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    result: any
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const connection = await db();
    
    let insertSql = `INSERT INTO newVolume (asin, englishTitle, volumeNum, url, usUrl) VALUES ('${req.query.asin}', '${req.query.usTitle}', ${req.query.volumeNum}, '_', '${req.query.usUrl}')`;
    
    try {
        await connection.query(insertSql);
    } catch(error) {
        connection.end();
        res.status(200).json({ result: "ERROR" });
    }

    connection.end();
    res.status(200).json({ result: "DONE" })
}



export default handler;
