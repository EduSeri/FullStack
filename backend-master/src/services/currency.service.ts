import dotenv from 'dotenv'
import fetch from 'node-fetch';
dotenv.config({path: `${__dirname}/../.env`});

const currency_url = process.env.currency_url;
const currency_key = process.env.currency_key;

export const getCurrency = async (from: string, to: string): Promise<any> => {
    const options = {
        method: 'GET',
        headers: {
            'apikey': currency_key as string
        }
    };
    console.log(options);

    
    const fullRoute = `${currency_url}/convert?to=${to}&from=${from}&amount=1`
    console.log(fullRoute);
    
    return await fetch(fullRoute, options);
}
