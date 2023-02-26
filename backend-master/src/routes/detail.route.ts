import express from 'express';
import { getCurrency } from '../services/currency.service';
import { getFlight } from '../services/flight.service';
import { getArrivalWeather } from '../services/weather.service';
const detailRoute = express.Router();

detailRoute.get('/weather', async(req, res) => {
    const arrival = req.query.arrival;
    const arrivalWeater = await getArrivalWeather(arrival as string);
    const response = await arrivalWeater.json()
    res.json(response);
})
detailRoute.get('/currency', async(req, res) => {
  const from = req.query.from;
  const to = req.query.to;
  const currencyData = await getCurrency(to as string, from as string);
  const response = await currencyData.json()
  res.json(response);
})
detailRoute.get('/flights', async(req, res) => {
  const from = req.query.from;
  const to = req.query.to;
  const origin_date = req.query.origin_date;
 
  const flightData = await getFlight(from as string, to as string, origin_date as string);
  const response = await flightData.json()
  res.json(response);
})
export default detailRoute