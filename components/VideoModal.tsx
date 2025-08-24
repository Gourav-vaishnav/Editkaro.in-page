
import React, { useEffect, useCallback } from 'react';
import { Video } from '../types';
import CloseIcon from './icons/CloseIcon';

interface VideoModalProps {
  video: Video;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  
  const handleEsc = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [handleEsc]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-gray-900 rounded-lg shadow-2xl w-full max-w-4xl animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 sm:top-2 sm:right-2 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition-colors z-10"
          aria-label="Close video player"
        >
          <CloseIcon className="w-6 h-6" />
        </button>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={`${video.videoUrl}?autoplay=1&rel=0`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg"
          ></iframe>
        </div>
         <div className="p-4 sm:p-6 bg-gray-800 rounded-b-lg">
           <h3 className="text-xl sm:text-2xl font-bold text-white">{video.title}</h3>
           <p className="text-gray-400 mt-1">Client: {video.client} | Category: {video.category}</p>
         </div>
      </div>
       <style>{`
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fade-in {
            animation: fade-in 0.3s ease-out forwards;
          }
          @keyframes slide-up {
            from { transform: translateY(20px) scale(0.98); opacity: 0; }
            to { transform: translateY(0) scale(1); opacity: 1; }
          }
          .animate-slide-up {
            animation: slide-up 0.3s ease-out forwards;
          }
        `}</style>
    </div>
  );
};

export default VideoModal;
