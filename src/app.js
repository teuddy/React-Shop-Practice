import React, { useState, useEffect } from 'react';
//import Carousel from './Components/Carousel';
//import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

function App() {
  const calculateTimeLeft = () => {
    const difference = +new Date('2020-07-05') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{' '}
      </span>,
    );
  });

  return (
    <div>
      <Helmet>
        <title>Zule.com.do</title>
        <meta name="theme-color" content="#040505"></meta>
      </Helmet>
      <h1>Tienda en construcion</h1>
      <h1>
        &#128284; &#128085; &#128086; &#128087; &#128089; &#128094;
        &#128092;
      </h1>
      {timerComponents.length ? (
        <h3>{timerComponents}</h3>
      ) : (
        <span>Times up!</span>
      )}
    </div>
  );
}

export default App;
/*
<div>
        <Carousel slides={this.props.slides} />
      </div>
*/
