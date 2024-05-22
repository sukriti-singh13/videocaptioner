'use client';
import Toast from '@/components/Toast/Toast';
import { regexForValidUrl } from '@/utilities/common';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Page = () => {

  const [videoUrl, setVideoUrl] = useState('');
  const [toast, setToast] = useState({ message: '', type: '' });
  const router = useRouter();
  const onVideoUrlSubmit = () => {
    if (videoUrl === '' || !regexForValidUrl.test(videoUrl) ){
      setToast({ message: 'Please enter a valid URL', type: 'error' });
      let toastTime = setTimeout(() => {
        setToast({ message: '', type: '' });
      }, 3000);
      return () => clearTimeout(toastTime);
    }
    router.push(`/editor?videoUrl=${videoUrl}`);
    
  };
  return (
    <div className='h-screen flex flex-col bg-slate-900 relative'>
        <Toast message={toast.message} type={toast.type}/>
      <h1 className='text-center text-white font-medium text-2xl pt-10'>
        Video Captioner
      </h1>
      
      <div className='flex flex-col gap-10 justify-center items-center flex-1 h-full'>
        {' '}
        <input
          placeholder='Add Video Url'
          value={videoUrl}
          className='w-[40%] py-2 px-4 rounded-sm text-black'
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        <button
          className='bg-blue-500 text-white rounded-md py-2 px-6'
          onClick={onVideoUrlSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Page;
