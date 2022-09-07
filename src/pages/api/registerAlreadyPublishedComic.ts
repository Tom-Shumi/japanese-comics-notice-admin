import db from 'components/utils/DbUtil';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    result: any
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const connection = await db();
    
    const maxIdRow = await connection.query("SELECT MAX(id) maxId FROM comic");
    
    const nextRegisterComicId = maxIdRow[0].maxId + 1;

    const usUrls = req.query.usUrls as string;
    const usUrlList = usUrls.split("\n");

    let comicInsertSql = `insert into comic(id, japaneseTitle, englishTitle) values (${nextRegisterComicId}, '${req.query.jpTitle}', '${req.query.usTitle}')`;
    let volumeInsertSql = createVolumeInsertSql(nextRegisterComicId, usUrlList);

    await connection.query(comicInsertSql);
    await connection.query(volumeInsertSql);
    
    connection.end();
    res.status(200).json({ result: "DONE" })
}

const createVolumeInsertSql = (comicId: number, usUrlList: string[]) => {
    let volumeInsertSql = "insert into volume(comicId, volumeNum, url, usUrl) values";

    let volumeNumber = 1;

    for (var idx = 0; idx < usUrlList.length; idx++) {

        if (usUrlList[idx] != '') {
            volumeInsertSql = volumeInsertSql + ` (${comicId}, ${volumeNumber}, "_", "${usUrlList[idx]}")`;
        }
    
        if (usUrlList.length - 1 == idx) {
            volumeInsertSql = volumeInsertSql + ";";
        } else {
            volumeInsertSql = volumeInsertSql + ",";
        }
        
        volumeNumber = volumeNumber + 1;    
    }
    return volumeInsertSql;
}

export default handler;
