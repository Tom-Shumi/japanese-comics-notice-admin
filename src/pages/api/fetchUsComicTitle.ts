import db from 'components/utils/DbUtil';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    value: string,
    label: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const connection = await db();
    
    const comics = await connection.query("SELECT id value, englishTitle label FROM comic ORDER BY id");

    connection.end();
    res.status(200).json(comics)
}

export default handler;
