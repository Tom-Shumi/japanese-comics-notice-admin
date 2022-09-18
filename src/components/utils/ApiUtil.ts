import Axios from 'axios';
import { env } from 'process';

const axios = Axios.create({
    baseURL: env.NEXT_PUBLIC_API_SERVER
})

export default axios