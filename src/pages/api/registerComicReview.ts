import db from 'components/utils/DbUtil';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    result: any
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const connection = await db();

    const reviewArr: string = req.query.reviews as string;

    reviewArr.split("_").forEach((e: string) => {
        console.log(e);
        // TODO
    });
    
    connection.end();
    res.status(200).json({ result: "DONE" })
}



export default handler;
