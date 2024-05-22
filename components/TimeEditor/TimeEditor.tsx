import React from 'react';

const NumInput = ({
  id,
  label,
  value,
  setValue,
}: {
  id: string;
  label: string;
  value: number;
  setValue: (value: number) => void;
}) => {
  return (
    <label className='flex flex-col items-center gap-1' htmlFor={id}>
      {label}
      <input
        type='number'
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className='w-10 bg-black text-white text-xs py-1 px-2 text-center border border-gray-600 rounded-md'
      />
    </label>
  );
};

const TimeEditor = ({
  time,
  setTime,
}: {
  time: string;
  setTime: (time: string) => void;
}) => {
  const [hours, minutes, seconds] = time.split(':').map(Number);
  return (
    <div className='flex text-white gap-2'>
      <NumInput
        id='hours'
        label='hh'
        value={hours}
        setValue={(hours) => setTime(`${hours}:${minutes}:${seconds}`)}
      />
      :
      <NumInput
        id='minutes'
        label='mm'
        value={minutes}
        setValue={(minutes) => setTime(`${hours}:${minutes}:${seconds}`)}
      />
      :
      <NumInput
        id='seconds'
        label='ss'
        value={seconds}
        setValue={(seconds) => setTime(`${hours}:${minutes}:${seconds}`)}
      />
    </div>
  );
};

export default TimeEditor;
