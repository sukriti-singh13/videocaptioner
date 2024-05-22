import React from 'react';

const Page = () => {
  return (
    <div className='p-4'>
      <div>
        <video id='video' controls width={500}>
          <source src='/video1.mp4' type='video/mp4' />
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
