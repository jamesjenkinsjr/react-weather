import rain from './Emoticon-Rain.gif';
import clearDay from './clear-day.svg';
import clearNight from './clear-night.svg';
import cloudyDay from './cloudy-day.svg';
import cloudy from './cloudy.svg';

const selection = (name) => {
    if(name === 'rain'){
        return rain;
    } else if (name === 'clear-day'){
        return clearDay;
    } else if (name === 'clear-night'){
        return clearNight;
    } else if (name === 'cloudy-day'){
        return cloudyDay;
    } else if (name === 'cloudy'){
        return cloudy;
    }
}

export default selection;