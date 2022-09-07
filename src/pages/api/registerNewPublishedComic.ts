import db from 'components/utils/DbUtil';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    result: any
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const connection = await db();
    
    let newVolumeInsertSql = `INSERT INTO newVolume (asin, englishTitle, volumeNum, url, usUrl) VALUES ('${req.query.asin}', '${req.query.usTitle}', ${req.query.volumeNum}, '_', '${req.query.usUrl}')`;
    
    await connection.query(newVolumeInsertSql);
    console.log(newVolumeInsertSql);

    connection.end();
    res.status(200).json({ result: "DONE" })
}



export default handler;
