import db from 'components/utils/DbUtil';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    result: any
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const connection = await db();
    
    const newVolumeCount = await connection.query(`SELECT COUNT(*) count FROM newVolume WHERE asin = '${req.query.asin}'`);
    const reservableVolumeCount = await connection.query(`SELECT COUNT(*) count FROM reservableVolume WHERE asin = '${req.query.asin}'`);
    connection.end();

    if (newVolumeCount[0].count == 0 && reservableVolumeCount[0].count == 0) {
        res.status(200).json({ result: "OK" });
        return;
    }

    res.status(200).json({ result: "NG" });
}

export default handler;
