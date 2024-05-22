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
          className='w-12 bg-black text-white text-xs p-2'
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
