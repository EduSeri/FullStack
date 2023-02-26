import dotenv from 'dotenv'
import fetch from 'node-fetch';
dotenv.config({path: `${__dirname}/../.env`});

const weather_url = process.env.weather_url;
const weather_key = process.env.weather_key;

//http://api.weatherapi.com/v1/current.json?key=a8c23ccd93e749fb9c5185559232202&q=London&aqi=no
export const getArrivalWeather = async (arrive: string): Promise<any> => {
    const fullRoute = `${weather_url}current.json?key=${weather_key}&q=${arrive}&aqi=no`
    return await fetch(fullRoute);
}
