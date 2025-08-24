
import React from 'react';
import { Video } from '../types';
import VideoCard from './VideoCard';

interface VideoGridProps {
  videos: Video[];
  onSelectVideo: (video: Video) => void;
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos, onSelectVideo }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} onSelectVideo={onSelectVideo} />
      ))}
    </div>
  );
};

export default VideoGrid;
