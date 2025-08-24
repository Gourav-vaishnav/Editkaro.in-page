
import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { Video, Category } from './types';
import { VIDEOS, CATEGORIES } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import FilterControls from './components/FilterControls';
import VideoGrid from './components/VideoGrid';
import VideoModal from './components/VideoModal';

const App: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Category | 'All'>('All');
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const filteredVideos = useMemo(() => {
    if (activeFilter === 'All') {
      return VIDEOS;
    }
    return VIDEOS.filter(video => video.category === activeFilter);
  }, [activeFilter]);

  const handleSelectVideo = useCallback((video: Video) => {
    setSelectedVideo(video);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedVideo(null);
  }, []);

  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedVideo]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <main>
        <Hero />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Our Work
          </h2>
          <FilterControls
            categories={CATEGORIES}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
          <VideoGrid videos={filteredVideos} onSelectVideo={handleSelectVideo} />
        </div>
      </main>
      {selectedVideo && (
        <VideoModal video={selectedVideo} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
