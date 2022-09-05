import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    result: any
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    req.body.jpTitle;
    res.status(200).json({ result: req.query.jpTitle })
}
