/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

const DateRangeSearch = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStartDateChange = (e: any) => {
    setStartDate(e.target.value);
  };


  const handleEndDateChange = (e: any) => {
    setEndDate(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault(); 
    if (startDate.trim() !== '' && endDate.trim() !== '') {
      console.log(`Searching from: ${startDate} to: ${endDate}`);

    } else {
      console.log('Please enter both start and end dates.');
    }
  };

  return (
    <div className="flex justify-center items-center w-full">
      <form onSubmit={handleSubmit} className="flex gap-2 w-full">
        <input
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
          className="border border-gray-300 rounded p-2 w-[40%]"
        />
        <input
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
          className="border border-gray-300 rounded p-2 w-[40%]"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default DateRangeSearch;
