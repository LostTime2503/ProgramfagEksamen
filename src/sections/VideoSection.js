import React from 'react';
import '../css/videosection.css';

const VideoSection = () => {
  return (
    <div className="video-section">
      {/* Header for the video section */}
      <div className="video-section-header">
        <h2>Video Highlights</h2>
      </div>

      {/* Container wrapping the two video blocks */}
      <div className="video-wrapper">
        {/* First video block */}
        <div className="video-container">
          <video className="video" controls>
            <source src="path_to_video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-description">
            <h3>Title for Video 1</h3>
            <p>
              A brief description about Video 1. Provide some context or key highlights
              so users know what to expect.
            </p>
          </div>
        </div>
        
        {/* Second video block */}
        <div className="video-container">
          <video className="video" controls>
            <source src="path_to_video2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-description">
            <h3>Title for Video 2</h3>
            <p>
              A brief description about Video 2. Describe its content or what makes it
              interesting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
