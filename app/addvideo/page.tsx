'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Page = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const router = useRouter();
  const onVideoUrlSubmit = () => {
    if (videoUrl === '') return;
    router.push(`/editor?videoUrl=${videoUrl}`);
    console.log('Video Url Submitted');
  };
  return (
    <div className='h-screen grid place-content-center gap-4'>
      <h1 className='text-center'>Video Captioner</h1>

      <input
        placeholder='Add Video Url'
        value={videoUrl}
        className='px-1 py-2 rounded-sm text-black'
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      <button  onClick={onVideoUrlSubmit}>Submit</button>
    </div>
  );
};

export default Page;
