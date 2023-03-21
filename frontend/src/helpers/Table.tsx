import { useState, useEffect } from 'react';
import ParticipantsCounter from '@/helpers/ParticipantsCounter';


export const Table = ({PassPropSize}) => {

  console.log(`The contents of PassPropSize Table ${PassPropSize}`);


  const [data, setData] = useState([]);
  const [PropsCountParticipants, setPropsCountParticipants] = useState(0);
useEffect(() => {
  console.log('Being triggered');
  fetch('http://URL:PORT/get_sizes/')
    .then((response) => response.json())
    .then((data) => {
      setData(data[PassPropSize]);
      setPropsCountParticipants(Object.keys(data[PassPropSize]).length); 
    })
    .catch((err) => {
      console.log(err.message);
    }); 
}, [PassPropSize]);



  return (
    <>
    <div className="flex flex-col justify-center md:flex-row md:items-center   ">
      <div className="w-500 h-96 overflow-hidden overflow-y-auto border-b border-gray-200 shadow sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 text-black">
          <thead className="bg-black">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Ticket ID#
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
      </div>
    </div>
    <ParticipantsCounter CountParticipantsProps={PropsCountParticipants}  ParticipantPropsPass={PassPropSize}/>

    </>
  );
};
