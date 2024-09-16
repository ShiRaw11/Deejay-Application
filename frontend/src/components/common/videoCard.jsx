import React, { useState } from 'react';

const videoUrls = [
  {
    id: 1,
    title: "https://www.youtube.com/embed/15YLDbjlguM?si=jVwHqT9aSnfm-zZQ",
  },
  {
    id: 2,
    title: "https://www.youtube.com/embed/kX2VP-aI8OQ?si=2JNECDBaU9nh3Ahs",
  },
  {
    id: 3,
    title: "https://www.youtube.com/embed/K6_-VJ5XWrA?si=53jd8bRzvWTtbgVm",
  },
  // Add more video entries as needed
];

function VideoCard() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(1);

  const handleNextVideo = () => {
    const nextIndex = (currentVideoIndex + 1) % videoUrls.length;
    setCurrentVideoIndex(nextIndex);
  };

  const handlePrevVideo = () => {
    const prevIndex = (currentVideoIndex - 1 + videoUrls.length) % videoUrls.length;
    setCurrentVideoIndex(prevIndex);
  };

  return (
    <div className="bg-transparent h-[500px] w-[100%] rounded-lg mt-[20px] relative">
      <div className="w-full h-full aspect-video mt-2 border relative inset-0 group-hover:opacity-50">
        <iframe
          className="w-full h-full"
          src={videoUrls[currentVideoIndex].title}
          title="Youtube video"
          allowFullScreen
        ></iframe>
        <div className="transition-all transform opacity-0 group-hover:opacity-100 duration-300 ease-in-out">
          <button className="prev-btn left-2 absolute top-[50%] text-[20px] text-purple" onClick={handlePrevVideo}>
            Previous
          </button>
          <button className="prev-btn right-2 absolute top-[50%] text-[20px] text-purple" onClick={handleNextVideo}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
