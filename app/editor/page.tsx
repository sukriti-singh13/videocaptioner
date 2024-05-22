'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const Page = () => {
  const searchParams = useSearchParams();
  const videoUrl = searchParams.get('videoUrl');
  if (!videoUrl) return null;
  return (
    <div className='p-4'>
      <div>
        <video id='video' controls width={500}>
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
    </div>
  );
};

export default Page;
