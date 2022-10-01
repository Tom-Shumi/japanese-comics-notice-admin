import db from 'components/utils/DbUtil';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    result: any
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const connection = await db();
    
    const deleteSql = `DELETE FROM reservableVolumeLightNovel WHERE id = ${req.query.id}`;
    
    await connection.query(deleteSql);

    connection.end();
    res.status(200).json({ result: "DONE" })
}



export default handler;
