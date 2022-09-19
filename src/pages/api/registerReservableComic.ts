import { convertUsDateToString } from 'components/utils/DateUtil';
import db from 'components/utils/DbUtil';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    result: any
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const connection = await db();
    
    let releaseDate = convertUsDateToString(new Date(req.query.releaseDate as string));

    let insertSql = `INSERT INTO reservableVolume (asin, englishTitle, volumeNum, usUrl, releaseDate) VALUES ('${req.query.asin}', '${req.query.usTitle}', ${req.query.volumeNum}, '${req.query.usUrl}', '${releaseDate}')`;
    
    await connection.query(insertSql);

    connection.end();
    res.status(200).json({ result: "DONE" });
}



export default handler;
