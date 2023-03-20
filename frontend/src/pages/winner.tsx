import Image from 'next/image';
import router from 'next/router';
import React from 'react';
import Histogram from '@/helpers/Histogram';
import Confetti from '@/helpers/Confetti';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

type Props = {};





export default function winner({}: Props) {
  function handleHomeClick() {
    router.push('/play');
  }


  const router = useRouter();
  const dataSizePassUrlValue = router.query.data;
  console.log(dataSizePassUrlValue); // output: "XL"

  const [data, setData] = useState([]);

useEffect(() => {
  console.log('Being triggered');
  fetch('http://206.81.23.174:9000/get_sizes/')
    .then((response) => response.json())
    .then((data) => {
      setData(data[dataSizePassUrlValue.toString()]);
      console.log(data);
    })
    .catch((err) => {
      console.log(err.message);
    }); 
}, [dataSizePassUrlValue]);



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

        <div><Histogram/></div>
        <div>
        </div>
      </div>
      <table className="min-w-full divide-y divide-gray-200 text-black">
          <thead className="bg-black">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Size
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
            {data &&
              Object.keys(data).map((key) => (
                <tr key={key}>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-xl font-medium text-gray-900">
                    {key}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-xl font-medium text-gray-900">
                      {data[key]}
                    
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
    </>
  );
}
