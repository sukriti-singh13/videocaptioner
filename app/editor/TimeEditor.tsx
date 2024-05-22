import React from 'react';

const TimeEditor = ({
  time,
  setTime,
}: {
  time: string;
  setTime: (time: string) => void;
}) => {
  const [hrs, mins, secs] = time.split(':');
  return (
    <div className='flex '>
      <input
        className='min-w-0 w-6 bg-black text-white text-center text-xs'
        value={hrs}
        onChange={(e) => {
          setTime(`${e.target.value}:${mins}:${secs}`);
        }}
        placeholder='HH'
      />{' '}
      :
      <input
        className='min-w-0 w-6 bg-black text-white text-center text-xs'
        value={mins}
        onChange={(e) => {
          setTime(`${hrs}:${e.target.value}:${secs}`);
        }}
        placeholder='MM'
      />{' '}
      :
      <input
        className='min-w-0 w-6 bg-black text-white text-center text-xs'
        value={secs}
        onChange={(e) => {
          setTime(`${hrs}:${mins}:${e.target.value}`);
        }}
        placeholder='SS'
      />
    </div>
  );
};

export default TimeEditor;
