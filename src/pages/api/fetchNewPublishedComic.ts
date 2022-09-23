import db from 'components/utils/DbUtil';
import type { NextApiRequest, NextApiResponse } from 'next'

export type Data = {
    id: number,
    asin: string,
    englishTitle: string,
    volumeNum: number,
    url: string,
    created_at: string,
    usUrl: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
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

    connection.end();
    res.status(200).json(newVolume)
}

export default handler;
