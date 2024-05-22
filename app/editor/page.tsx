'use client';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import SubtitleEditor from './SubtitleEditor';
type Subtitle = {
  startTime: string;
  endTime: string;
  text: string;
};
const Page = () => {
  const [subtitles, setSubtitles] = useState<Subtitle[]>([]);
  const searchParams = useSearchParams();
  const videoUrl = searchParams.get('videoUrl');
  const addSubtitle = () => {
    const allSubtitlesHaveText = subtitles.every(
      (subtitle) => subtitle.text.trim() !== ''
    );
    if (!allSubtitlesHaveText) {
      console.log('Please fill in all subtitles');
      return;
    }

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
  const convertToVTT = (subtitles: Subtitle[]): string => {
    let vttContent = 'WEBVTT\n\n';

    subtitles.forEach((subtitle, index) => {
      vttContent += `${index + 1}\n`;
      vttContent += `${subtitle.startTime}.000 --> ${subtitle.endTime}.000\n`;
      vttContent += `${subtitle.text}\n\n`;
    });

    return vttContent;
  };

  useEffect(() => {
    const vttContent = convertToVTT(subtitles);
    const blob = new Blob([vttContent], { type: 'text/vtt' });
    const url = URL.createObjectURL(blob);
    const trackElement = document.createElement('track');
    trackElement.label = 'English';
    trackElement.kind = 'subtitles';
    trackElement.srclang = 'en';
    trackElement.src = url;
    trackElement.default = true;

    const videoElement = document.getElementById('video') as HTMLVideoElement;
    videoElement.innerHTML = ''; // Clear previous tracks
    videoElement.appendChild(trackElement);

    return () => {
      URL.revokeObjectURL(url); // Clean up URL object
    };
  }, [subtitles]);

  if (!videoUrl) return null;

  return (
    <div className='p-4 flex justify-between gap-6 bg-slate-900 h-screen'>
      <div className='pt-8 w-[60%]'>
        <video id='video' controls className='w-full'>
          <source src={videoUrl} type='video/mp4' />
        </video>
      </div>
      <div className='flex flex-col gap-4 pt-8 w-[30%]'>
        {subtitles.map((subtitle, i) => (
          <SubtitleEditor
            key={i}
            subtitle={subtitle}
            setSubtitle={(subtitle: Subtitle) => onSubtitleChange(subtitle, i)}
          />
        ))}
        <button
          className='bg-blue-500 text-white rounded-md py-1'
          onClick={addSubtitle}
        >
          Add Subtitle
        </button>
      </div>
    </div>
  );
};

export default Page;
