import { env } from 'process';
import * as mysql from 'promise-mysql';

const db = () => {
    return mysql.createConnection({
        host: env.NEXT_PUBLIC_DB_HOST,
        user: env.NEXT_PUBLIC_DB_USER,
        password: env.NEXT_PUBLIC_DB_NAME,
        database: env.NEXT_PUBLIC_API_TASK_GRAPH,
        multipleStatements: true
    });
}

export default db;