import React, { useState } from 'react';
import Counter from './assets/Components/Counter';

const App = () => {
  const [counters, setCounters] = useState([
    { id: 1, title: 'Counter 1', value: 0 },
    { id: 2, title: 'Counter 2', value: 0 },
    { id: 3, title: 'Counter 3', value: 0 },
  ]);

  const totalCount = counters.reduce(
    (total, counter) => total + counter.value,
    0
  );

  const handleValueChange = (id, newValue) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === id ? { ...counter, value: newValue } : counter
      )
    );
  };

  const handleDeleteCounter = (id) => {
    setCounters(counters.filter((counter) => counter.id !== id));
  };

  const addItem = () => {
    const newId = counters.length + 1;
    setCounters([
      ...counters,
      { id: newId, title: `Counter ${newId}`, value: 0 },
    ]);
  };

  return (
    <div className='bg-[#F9FAFB] min-h-screen py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-6xl mx-auto space-y-10'>
        <p className='text-center text-[#1F2937] text-2xl sm:text-3xl font-bold'>
          Counter Dashboard
        </p>
        <div className='bg-white flex flex-col justify-center items-center shadow-xl h-48 sm:h-56 rounded-md'>
          <p className='text-lg text-gray-500'>Total Count</p>
          <p className='text-2xl sm:text-3xl font-semibold  text-[#3B82F6]'>
            {totalCount}
          </p>
        </div>
        <div className='bg-white min-h-[300px] px-4 py-6 rounded-md shadow'>
          <div className='mb-6'>
            <h1 className='text-2xl font-semibold text-gray-800'>Counters</h1>
          </div>

          <div className='flex flex-wrap gap-4'>
            {counters.map((counter) => (
              <Counter
                key={counter.id}
                title={counter.title}
                value={counter.value}
                onDelete={() => handleDeleteCounter(counter.id)}
                onChange={(newValue) => handleValueChange(counter.id, newValue)}
              />
            ))}
          </div>
        </div>
        <div className='text-center'>
          <button
            onClick={addItem}
            className='bg-[#2563EB] text-white px-6 py-2 rounded-md shadow hover:bg-[#1D4ED8] transition'
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
