import React from 'react';
import PropTypes from 'prop-types';
const CurrentWeather = props => {
return(
        <section>
            <ul>
                <li>Time: {props.time}</li>
                <li>Summary: {props.summary}</li>
                <li>Icon: {props.icon}</li>
                <li>Temperature: {props.temperature}</li>
            </ul>
        </section>
    );
}

CurrentWeather.propTypes = {
    time: PropTypes.number.isRequired,
    sumary: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired
}
export default PropTypes;