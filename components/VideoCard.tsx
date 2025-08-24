
import React from 'react';
import { Video } from '../types';
import PlayIcon from './icons/PlayIcon';

interface VideoCardProps {
  video: Video;
  onSelectVideo: (video: Video) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onSelectVideo }) => {
  return (
    <div
      className="group relative rounded-lg overflow-hidden shadow-lg cursor-pointer transform hover:-translate-y-2 transition-transform duration-300 ease-in-out"
      onClick={() => onSelectVideo(video)}
    >
      <img
        src={video.thumbnailUrl}
        alt={video.title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-70 transition-all duration-300"></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <PlayIcon className="w-16 h-16 text-white" />
      </div>
      <div className="absolute bottom-0 left-0 p-4">
        <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
          {video.category}
        </span>
        <h3 className="text-white text-lg font-bold mt-2 truncate">{video.title}</h3>
        <p className="text-gray-300 text-sm">{video.client}</p>
      </div>
    </div>
  );
};

export default VideoCard;
