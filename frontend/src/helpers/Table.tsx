export const Table = () => {
  const data = [
    { id: '001', name: 'John Doe' },
    { id: '002', name: 'Jane Smith' },
    { id: '003', name: 'Bob Johnson' },
    { id: '003', name: 'Bob Johnson' },
    { id: '003', name: 'Bob Johnson' },
    { id: '003', name: 'Bob Johnson' },
    { id: '003', name: 'Bob Johnson' },
    { id: '003', name: 'Bob Johnson' },
    { id: '003', name: 'Bob Johnson' },
    { id: '001', name: 'John Doe' },
    { id: '001', name: 'John Doe' },
    { id: '001', name: 'John Doe' },
    { id: '001', name: 'John Doe' },
  ];

  return (
    <div className="flex flex-col justify-center md:flex-row md:items-center   ">
      <div className="w-500 h-96 overflow-hidden overflow-y-auto border-b border-gray-200 shadow sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 text-black">
          <thead className="bg-black">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Ticket Number
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
            {data.map((row) => (
              <tr key={row.id}>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="text-xl font-medium text-gray-900">
                    {row.id}
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="text-xl font-medium text-gray-900">
                    {row.name}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
