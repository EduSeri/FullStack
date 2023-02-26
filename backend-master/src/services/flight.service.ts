import dotenv from 'dotenv';
import fetch from 'node-fetch';
dotenv.config({path: `${__dirname}/../.env`});

const flight_url = process.env.flight_url;
const flight_key = process.env.flight_key;
const flight_host = process.env.flight_host;


export const getFlight = async (from:string, to:string, origin_date:string): Promise<any> => {
 
    const options = {
      method: 'GET',
      params: {
          origin_code: from,
          destination_code: to,
          origin_departure_date: origin_date
        },
        headers: {
          'X-RapidAPI-Key': flight_key as string,
          'X-RapidAPI-Host': flight_host as string
        }
    };
    const url = `${flight_url}?origin_code=${from}&destination_code=${to}&origin_departure_date=${origin_date}`;

    return await fetch(url, options);   
};