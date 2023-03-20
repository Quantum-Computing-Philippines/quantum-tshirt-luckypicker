import React, { useEffect, useState } from 'react';

import Status from './Status';

export function RandomGraphView() {
  const [chartBars, setChartBars] = useState([]);
  const [startAnimation, setStartAnimation] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [showStatus, setShowStatus] = useState(false);
  useEffect(() => {
    const bars = document.querySelectorAll('.chart-bar');
    setChartBars(bars);
  }, []);

  useEffect(() => {
    if (startAnimation) {
      chart();
    }
  }, [startAnimation]);

  function chart() {
    const intervals = [];

    chartBars.forEach((bar, i) => {
      const interval = setInterval(() => {
        const random = Math.floor(Math.random() * 30) - 15;
        const currentHeight = parseInt(bar.style.height, 10);
        const newHeight = currentHeight + random;
        if (newHeight < 0) {
          bar.style.height = '0%';
        } else if (newHeight > 100) {
          bar.style.height = '100%';
        } else {
          bar.style.height = `${newHeight}%`;
        }
      }, 50);
      intervals.push(interval);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }

  function handleButtonClick() {
    setStartAnimation(true);
    setShowStatus(true);
    setShowButton(false);
  }

  return (
    <>
      {showButton && (
        <button
          className="rounded-lg border-b-4 border-yellow-700 bg-yellowqr py-3 px-8 text-black transition duration-300 hover:border-yellow-800 hover:bg-yellow-600 "
          onClick={handleButtonClick}
        >
          Start
        </button>
      )}
      <div
        id="chart"
        style={{
          width: '500px',
          height: '200px',
          position: 'relative',
        }}
      >
        <div
          className="chart-bar"
          style={{
            width: '20px',
            height: '5px',
            backgroundColor: 'white',
            position: 'absolute',
            marginLeft: '100px',
            bottom: 0,
            borderRadius: '6px 0px 0px 0px',
            borderRight: '3px solid #26466D',
          }}
        ></div>
        <div
          className="chart-bar"
          style={{
            width: '20px',
            height: '5px',
            backgroundColor: 'white',
            position: 'absolute',
            marginLeft: '150px',
            bottom: 0,
            borderRadius: '6px 0px 0px 0px',
            borderRight: '3px solid #26466D',
          }}
        ></div>
        <div
          className="chart-bar"
          style={{
            width: '20px',
            height: '5px',
            backgroundColor: 'white',
            position: 'absolute',
            marginLeft: '200px',
            bottom: 0,
            borderRadius: '6px 0px 0px 0px',
            borderRight: '3px solid #26466D',
          }}
        ></div>
        <div
          className="chart-bar"
          style={{
            width: '20px',
            height: '5px',
            backgroundColor: 'white',
            position: 'absolute',
            marginLeft: '250px',
            bottom: 0,
            borderRadius: '6px 0px 0px 0px',
            borderRight: '3px solid #26466D',
          }}
        ></div>
        <div
          className="chart-bar"
          style={{
            width: '20px',
            height: '5px',
            backgroundColor: 'white',
            position: 'absolute',
            marginLeft: '300px',
            bottom: 0,
            borderRadius: '6px 0px 0px 0px',
            borderRight: '3px solid #26466D',
          }}
        ></div>
        <div
          className="chart-bar"
          style={{
            width: '20px',
            height: '5px',
            backgroundColor: 'white',
            position: 'absolute',
            marginLeft: '350px',
            bottom: 0,
            borderRadius: '6px 0px 0px 0px',
            borderRight: '3px solid #26466D',
          }}
        ></div>
        {showStatus && <Status />}
      </div>
    </>
  );
}
