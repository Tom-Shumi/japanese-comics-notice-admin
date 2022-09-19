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
    
    const reservableVolume = await connection.query("SELECT * FROM reservableVolume ORDER BY id DESC");
    reservableVolume.map((volume: any) => (
        volume.releaseDate = convertDbDateTimeToDateString(volume.releaseDate)
    ));

    connection.end();
    res.status(200).json(reservableVolume)
}

export default handler;
