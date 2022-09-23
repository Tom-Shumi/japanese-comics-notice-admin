import { convertDbDateTimeToDateString } from 'components/utils/DateUtil';
import db from 'components/utils/DbUtil';
import type { NextApiRequest, NextApiResponse } from 'next'

export type Data = {
    id: number,
    asin: string,
    englishTitle: string,
    volumeNum: number,
    usUrl: string,
    releaseDate: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const connection = await db();
    
    let executeQuery;
    const selectQuery = "SELECT * FROM reservableVolume ";
    const orderBy = "ORDER BY id DESC";

    if (req.query.title == undefined || req.query.title == "") {
        executeQuery = selectQuery + orderBy;
        
    } else {
        const condition = `WHERE englishTitle LIKE '%${req.query.title}%' `
    
        executeQuery = selectQuery + condition + orderBy;
    }

    const reservableVolume = await connection.query(executeQuery);
    reservableVolume.map((volume: any) => (
        volume.releaseDate = convertDbDateTimeToDateString(volume.releaseDate)
    ));

    connection.end();
    res.status(200).json(reservableVolume)
}

export default handler;