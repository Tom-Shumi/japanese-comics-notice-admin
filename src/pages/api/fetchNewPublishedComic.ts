import { convertDbDateTimeToDateString } from 'components/utils/DateUtil';
import db from 'components/utils/DbUtil';
import type { NextApiRequest, NextApiResponse } from 'next'
import { Comic } from 'components/models/Comic';


const handler = async (req: NextApiRequest, res: NextApiResponse<Comic>) => {
    const connection = await db();
    
    let executeQuery;
    const selectQuery = "SELECT * FROM newVolume ";
    const orderBy = "ORDER BY id DESC";

    if (req.query.title == undefined || req.query.title == "") {
        executeQuery = selectQuery + orderBy;

    } else {
        const condition = `WHERE englishTitle LIKE '%${req.query.title}%' `

        executeQuery = selectQuery + condition + orderBy;
    }

    const newVolume = await connection.query(executeQuery);

    newVolume.map((volume: any) => (
        volume.created_at = convertDbDateTimeToDateString(volume.created_at)
    ));
    
    connection.end();
    res.status(200).json(newVolume)
}

export default handler;
