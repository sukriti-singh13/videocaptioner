import React from 'react';
import TimeEditor from './TimeEditor';

const SubtitleEditor = ({
  subtitle,
  setSubtitle,
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
      <input
        className='w-full
        bg-black text-white text-xs py-2 px-4 rounded-md
        '
        value={subtitle.text}
        onChange={(e) => setSubtitle({ ...subtitle, text: e.target.value })}
        placeholder='New Subtitle '
      />
    </div>
  );
};

export default SubtitleEditor;
