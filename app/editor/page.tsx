'use client';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import SubtitleEditor from '../../components/SubtitleEditor/SubtitleEditor';

import * as CONSTANTS from '../../utilities/constants/editor.constants';
import { downloadVTT, updateVideoSubtitle } from '@/utilities/editor';
import { Subtitle } from './editor.types';

const Page = () => {
  const [subtitles, setSubtitles] = useState<Subtitle[]>([]);
  const searchParams = useSearchParams();
  const videoUrl = searchParams.get('videoUrl');
  const addSubtitle = () => {
    const allSubtitlesHaveText = subtitles.every(
      (subtitle) => subtitle.text.trim() !== ''
    );
    if (!allSubtitlesHaveText) {
      return;
    }
    const lastSubtitle = subtitles[subtitles.length - 1];
    const newStartTime = lastSubtitle
      ? lastSubtitle.endTime
      : CONSTANTS.DEFAULT_SUBTITLE.startTime;
    setSubtitles([
      ...subtitles,
      {
        startTime: newStartTime,
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
  const deleteSubtitle = (index: number) => {
    const newSubtitles = subtitles.filter((_, i) => i !== index);
    setSubtitles(newSubtitles);
  };

  useEffect(() => {
    updateVideoSubtitle(subtitles);
  }, [subtitles]);

  if (!videoUrl) return null;

  return (
    <div className='p-4 flex justify-between gap-6 bg-slate-900 h-screen'>
      <div className='pt-8 w-[60%] p-4 '>
        <video id='video' controls className='w-full rounded-md shadow-md'>
          <source src={videoUrl} type='video/mp4' />
        </video>
      </div>
      <div className='flex flex-col items-center gap-4 pt-8 w-[30%]'>
        {subtitles.map((subtitle, i) => (
          <SubtitleEditor
            key={i}
            subtitle={subtitle}
            setSubtitle={(subtitle: Subtitle) => onSubtitleChange(subtitle, i)}
            deleteSubtitle={() => deleteSubtitle(i)}
          />
        ))}
        <button
          className=' bg-blue-500 w-full margin-auto text-white rounded-md py-1'
          onClick={addSubtitle}
        >
          Add Subtitle
        </button>
        {subtitles.length &&  (
          <button
            className=' bg-blue-500 w-full margin-auto text-white rounded-md py-1'
            onClick={() => downloadVTT(subtitles)}
          >
            Export subtitles
          </button>
        )}
      </div>
    </div>
  );
};

export default Page;
