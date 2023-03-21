import Image from 'next/image';
import router from 'next/router';
import React from 'react';
import Confetti from '@/helpers/Confetti';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { XYPlot, VerticalBarSeries, XAxis, YAxis, Hint } from 'react-vis';


type Props = {};



// Winner
// Histogram
export default function winner({}: Props) {
 
  const [hovered, setHovered] = useState(null);
  const [counts, setCounts] = useState({});

  // 127 bits
  useEffect(() => {
    const fetchCounts = async () => {
      const response = await fetch('http://206.81.23.174:8000/myapp/luckypic/');
      const data = await response.json();
      setCounts(data.counts);
    };

    fetchCounts();
  }, []);
  
  const router = useRouter();
  const dataSizePassUrlValue = router.query.data;
  const [dataTable, setDataTable] = useState([]);
  //Sizes
  const [keyCount, setKeyCount] = useState(0);

  


  useEffect(() => {
    fetch('http://206.81.23.174:9000/get_sizes/')
      .then((response) => response.json())
      .then((dataTable) => {
        setDataTable(dataTable[dataSizePassUrlValue.toString()]);
        setKeyCount(Object.keys(dataTable[dataSizePassUrlValue.toString()]).length);
      })
      .catch((err) => {
        console.log(err.message);
      }); 
  }, [dataSizePassUrlValue]);
  


  const data = Object.keys(counts)
  .slice(0, parseInt(keyCount))
  .map(key => ({x: key, y: counts[key]}));

  const handleMouseOver = value => {
    setHovered(value);
  };

  const handleMouseOut = () => {
    setHovered(null);
  };

  function handleHomeClick() {
    router.push('/play');
  }



  // Get the highest occurrence from the counts object


  const getHighestOccurrence = (data) => {
    let highestCount = null;
    let highestKey = null;
  
    data.forEach(({ x, y }) => {
      if (y > highestCount) {
        highestCount = y;
        highestKey = x;
      }
    });
  
    return { key: highestKey, count: highestCount };
  }

  // Use the function to get the highest occurrence based on the stripped data
  const highestOccurrence = getHighestOccurrence(data);



 

















  return (
    <>
      <Confetti />
      <div className="fixed bottom-0 left-0 mx-10 mb-16 h-24 w-24">
        <button onClick={handleHomeClick}>
          <img
            src="https://www.svgrepo.com/download/398090/play-button.svg"
            alt="Home icon"
            className="h-full w-full transition duration-300 hover:scale-110"
          ></img>
        </button>
      </div>
      <div className="my-20 flex flex-col items-center justify-center">


    {/* Histogram */}

    <>
    {typeof keyCount === "number" && (
      /* Histogram code here */
      /* ... */
      
      <>
      <div> keyCount has a value of number</div>
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
        <p className="body-font flex h-full items-center justify-center text-center font-cherrybombone text-3xl text-black underline">
        {`The highest occurrence is:  Ticket ID  #${highestOccurrence.key} with count of ${highestOccurrence.count} `}
      </p>
      <p className="body-font flex h-full items-center justify-center text-center font-cherrybombone text-6xl text-black underline">
        {"The winner is     "}
        {dataTable &&
  Object.keys(dataTable).map((key) => {
    if (key === highestOccurrence.key) {
      const value = dataTable[key];
      return (
        <div key={key}>
         
          <span className="body-font flex h-full items-center justify-center text-center font-cherrybombone text-6xl text-black underline">    :  {value}</span>
        </div>
      );
    }
    return null;
  })
  }
      </p>
      </>
    )}
  </>



    
   {/* End of Histogram */}


        <div>
        </div>
      </div>
      <div className="w-1/2 mx-auto" >  *If there are same occurence of probability, the first occurence will be considered the winner </div>
     
      <table className="w-1/2 mx-auto  divide-y divide-gray-200 text-black">

          <thead className="bg-black">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Ticket ID Number
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Name
              </th>
            </tr>
          </thead>
          <tbody className="divide-black-200 divide-y bg-yellowqr">
            {dataTable &&
              Object.keys(dataTable).map((key) => (
                <tr key={key}>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-xl font-medium text-gray-900">
                    {key}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-xl font-medium text-gray-900">
                      {dataTable[key]}
                    
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>


    </>
  );
}
