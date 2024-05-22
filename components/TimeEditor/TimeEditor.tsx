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
    <div className='flex text-white flex-col gap-2'>
      <p className='text-white text-xs'>hh:mm:ss</p>
      <div className='flex gap-1'>
        {timeParts.map((part, index) => (
          <input
            key={index}
            className='w-10 bg-black text-white text-xs py-1 px-2 text-center border border-gray-600 rounded-md'
            value={part}
            maxLength={2}
            onChange={(e) => {
              const newTimeParts = [...timeParts];
              newTimeParts[index] = e.target.value;
              setTime(newTimeParts.join(':'));
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TimeEditor;
