import { Subtitle } from '@/app/editor/editor.types';
/**
 * Converts an array of subtitles to WebVTT format.
 * @param subtitles - Array of subtitle objects.
 * @returns A string in WebVTT format representing the subtitles.
 */
export const convertToVTT = (subtitles: Subtitle[]): string => {
  let vttContent = 'WEBVTT\n\n';

  subtitles.forEach((subtitle, index) => {
    vttContent += `${index + 1}\n`;
    vttContent += `${subtitle.startTime}.000 --> ${subtitle.endTime}.000\n`;
    vttContent += `${subtitle.text}\n\n`;
  });

  return vttContent;
};

/**
 * Updates the subtitle track of a video element with new subtitles.
 * @param subtitles - Array of subtitle objects.
 * @returns A cleanup function to revoke the Blob URL.
 */
export const updateVideoSubtitle = (subtitles: Subtitle[]) => {
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
};
/**
 * Triggers a download of the subtitles in WebVTT format.
 * @param subtitles - Array of subtitle objects.
 */
export const downloadVTT = (subtitles: Subtitle[]) => {
  const vttContent = convertToVTT(subtitles);
  const blob = new Blob([vttContent], { type: 'text/vtt' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'subtitles.vtt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
