import axios from 'axios';

export const fetchImageUrl = async (input: string) => {
    
    const res = await axios.get(`/short2longurl/api.cgi?url=https://amzn.to/3Uzivvw`);

    console.log(res);
}