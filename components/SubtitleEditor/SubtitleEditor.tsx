import React from 'react';
import TimeEditor from '../TimeEditor/TimeEditor';

const SubtitleEditor = ({
  subtitle,
  setSubtitle,
  deleteSubtitle,
}: {
  subtitle: {
    startTime: string;
    endTime: string;
    text: string;
  };
  setSubtitle: (subtitle: {
    startTime: string;
    endTime: string;
    text: string;
  }) => void;
  deleteSubtitle: () => void;
}) => {
  return (
    <div className='flex gap-4 w-full'>
      <div className='flex gap-2 flex-col'>
        <TimeEditor
          time={subtitle.startTime}
          setTime={(startTime) => setSubtitle({ ...subtitle, startTime })}
        />
        <TimeEditor
          time={subtitle.endTime}
          setTime={(endTime) => setSubtitle({ ...subtitle, endTime })}
        />
      </div>
      <div className='flex w-full gap-2'>
      <input
        className='w-full
        bg-black text-white text-xs py-2 px-4 rounded-md
        '
        value={subtitle.text}
        onChange={(e) => setSubtitle({ ...subtitle, text: e.target.value })}
        placeholder='New Subtitle '
      />
        <button className=' bg-white text-red-500 rounded-full w-8 h-6 font-medium justify-end text-xs' onClick={deleteSubtitle}>
        x
      </button>
      </div>
    </div>
  );
};

export default SubtitleEditor;
