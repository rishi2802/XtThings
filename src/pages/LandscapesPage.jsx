import React, { useEffect } from "react";
import image1 from "../img/landscapes/landscape1.jpeg";
import image2 from "../img/landscapes/landscape2.jpeg";
import image3 from "../img/landscapes/landscape3.jpeg";
import image4 from "../img/landscapes/landscape4.jpeg";
import image5 from "../img/landscapes/landscape5.jpeg";
import image6 from "../img/landscapes/landscape6.jpeg";

const images = [image1, image2, image3, image4, image5, image6];

const LandscapesPage = () => {
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
      <h1 className="text-7xl font-bold text-center mb-8">Landscapes</h1>
      
      {/* Image Gallery */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {images.map((src, index) => {
          return (
            <div key={index} className="mb-4 break-inside-avoid">
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <img
                  src={src}
                  alt={`landscape ${index + 1}`}
                  className="w-full object-cover rounded-lg"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LandscapesPage;
