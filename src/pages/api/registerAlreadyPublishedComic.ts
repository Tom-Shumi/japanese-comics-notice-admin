import db from 'components/utils/DbUtil';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    result: any
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const connection = await db();
    // comic情報取得
    const maxIdRow = await connection.query("SELECT MAX(id) maxId FROM comic");
    
    const nextRegisterComicId = maxIdRow[0].maxId + 1;

    const usUrls = req.query.usUrls as string;
    const usUrlList = usUrls.split("\n");

    connection.end();
    res.status(200).json({ result: "OK" })
}

export default handler;
