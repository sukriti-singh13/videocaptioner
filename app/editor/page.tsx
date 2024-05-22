'use client';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import SubtitleEditor from './SubtitleEditor';
type Subtitle = {
  startTime: string;
  endTime: string;
  text: string;
};
const Page = () => {
  const [subtitles, setSubtitles] = useState<Subtitle[]>([
    {
      startTime: '00:00:00',
      endTime: '00:00:00',
      text: '',
    },
  ]);
  const searchParams = useSearchParams();
  const videoUrl = searchParams.get('videoUrl');
  if (!videoUrl) return null;
  const addSubtitle = () => {
    setSubtitles([
      ...subtitles,
      {
        startTime: '00:00:00',
        endTime: '00:00:00',
        text: '',
      },
    ]);
  };
  const onSubtitleChange = (newSubtitle: Subtitle, index: number) => {
    const newSubtitles = [...subtitles];
    newSubtitles[index] = newSubtitle;
    setSubtitles(newSubtitles);
  };

  return (
    <div className='p-4 flex justify-between gap-6 bg-slate-900 h-screen'>
      <div className='pt-8'>
        <video id='video' controls className=' w-full'>
          <source src={videoUrl} type='video/mp4' />
          <track
            label='English'
            kind='subtitles'
            srcLang='en'
            src='/caption.vtt'
            default
          />
        </video>
      </div>
      <div
        className='flex flex-col gap-4 pt-8'
        style={{ width: 'calc(500px)' }}
      >
        {subtitles.map((subtitle, i) => (
          <SubtitleEditor
            key={i}
            subtitle={subtitle}
            setSubtitle={(subtitle: Subtitle) => onSubtitleChange(subtitle, i)}
          />
        ))}
        <button
          className='bg-blue-500 text-white rounded-sm py-1'
          onClick={addSubtitle}
        >
          Add Subtitle
        </button>
      </div>
    </div>
  );
};

export default Page;
