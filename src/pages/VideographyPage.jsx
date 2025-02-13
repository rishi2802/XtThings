import React, { useEffect } from "react";
import video1 from "../img/videography/videography1.mp4";

const videos = [video1];  // Rename images to videos as you're dealing with videos

const VideographyPage = () => {
  useEffect(() => {
    // Hide the header when the component mounts
    const header = document.querySelector("header");
    if (header) header.style.display = "none";

    // Restore the header when leaving the page
    return () => {
      if (header) header.style.display = "block";
    };
  }, []); // Empty dependency array means it runs once when the component mounts

  return (
    <div className="py-10 md:py-20 overflow-y-auto max-h-screen px-4 sm:px-6 lg:px-8 border">
      {/* Title Section */}
      <h1 className="text-7xl font-bold text-center mb-8">Videography</h1>
      
      {/* Video Gallery */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {videos.map((src, index) => {
          return (
            <div key={index} className="mb-4 break-inside-avoid">
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <video 
                  src={src} 
                  alt={`video ${index + 1}`} 
                  className="w-full object-cover rounded-lg"
                  controls
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideographyPage;
