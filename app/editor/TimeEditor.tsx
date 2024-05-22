import React from 'react';

const TimeEditor = ({
  time,
  setTime,
}: {
  time: string;
  setTime: (time: string) => void;
}) => {
  const timeParts = time.split(':');
  return (
    <div className='flex text-white'>
      {timeParts.map((part, index) => (
        <input
          key={index}
          className='w-12 bg-black text-white text-xs py-1 px-2 text-center border border-gray-600 rounded-md'
          value={part}
          onChange={(e) => {
            const newTimeParts = [...timeParts];
            newTimeParts[index] = e.target.value;
            setTime(newTimeParts.join(':'));
          }}
        />
      ))}
    </div>
  );
};

export default TimeEditor;
