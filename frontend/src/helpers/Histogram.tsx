import React, { useState, useEffect } from 'react';
import { XYPlot, VerticalBarSeries, XAxis, YAxis, Hint } from 'react-vis';

const Histogram = () => {
  const [hovered, setHovered] = useState(null);

  // const counts = {
  //   "0": 16,
  //   "1": 16,
  //   "2": 8,
  //   "3": 16,
  //   "4": 17,
  //   "5": 24,
  //   "6": 14,
  //   "7": 14,
  //   "8": 13,
  //   "9": 17,
  //   "10": 7,
  // }

  const [counts, setCounts] = useState({});

  useEffect(() => {
    const fetchCounts = async () => {
      const response = await fetch('http://206.81.23.174:8000/myapp/luckypic/');
      const data = await response.json();
      setCounts(data.counts);
    };

    fetchCounts();
  }, []);
  
  const data = Object.keys(counts).slice(0, 10).map(key => ({x: key, y: counts[key]}));

  const handleMouseOver = value => {
    setHovered(value);
  };

  const handleMouseOut = () => {
    setHovered(null);
  };

  // Get the highest occurrence from the counts object
  const highestOccurrence = Object.entries(counts).reduce((acc, [key, value]) => {
    if (value > acc.count) {
      return { key, count: value };
    } else {
      return acc;
    }
  }, { key: null, count: -1 });

  return (
    <>
    <XYPlot xType="ordinal" width={1700} height={500}>
      <XAxis tickLabelAngle={-90} />
      <YAxis />
      <VerticalBarSeries
        data={data}
        barWidth={.5}
        cluster="true"
        onValueMouseOver={handleMouseOver}
        onValueMouseOut={handleMouseOut}
      />
      {hovered && (
        <Hint value={hovered}>
          <div style={{ background: 'white', padding: '5px' }}>
            <span>{`Count: ${hovered.y}`}</span>
          </div>
        </Hint>
      )}
    </XYPlot>
      <p className="body-font flex h-full items-center justify-center text-center font-cherrybombone text-6xl text-black underline hover:scale-110">
      The winner is: {highestOccurrence.key}
    </p>
    </>
  );
};


export default Histogram;
