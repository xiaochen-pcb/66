import React from 'react';
import videos from '../videos/videoList';

export default function VideoSection() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>精选视频</h2>
      {videos.map((video, index) => (
        <div key={index} style={{ marginBottom: '2rem' }}>
          <h3>{video.title}</h3>
          <iframe width="560" height="315" src={video.url} frameBorder="0" allowFullScreen></iframe>
        </div>
      ))}
    </div>
  );
}
