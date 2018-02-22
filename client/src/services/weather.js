import Axios from 'axios';

export const getWeather = (latitude, longitude) => {
    const url = `/forecast/${latitude},${longitude}`;
    return Axios.get(url);
}