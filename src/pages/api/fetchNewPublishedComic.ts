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
    
    const newVolume = await connection.query("SELECT * FROM newVolume ORDER BY id DESC");

    connection.end();
    res.status(200).json(newVolume)
}

export default handler;
