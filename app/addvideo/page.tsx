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
    <div className='h-screen flex flex-col bg-slate-900'>
      <h1 className='text-center text-white font-medium text-2xl pt-10'>Video Captioner</h1>

     <div className='flex flex-col gap-10 justify-center items-center flex-1 h-full'> <input
        placeholder='Add Video Url'
        value={videoUrl}
        className='w-[40%] py-2 px-4 rounded-sm text-black'
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      <button  className='bg-blue-500 text-white rounded-md py-2 px-6' onClick={onVideoUrlSubmit}>Submit</button></div>
    </div>
  );
};

export default Page;
