import React, { useEffect } from "react";
import image1 from "../img/architectures/architecture1.jpeg";
import image2 from "../img/architectures/architecture2.jpeg";
import image3 from "../img/architectures/architecture3.jpeg";
import image4 from "../img/architectures/architecture4.jpeg";
import image5 from "../img/architectures/architecture5.jpeg";
import image6 from "../img/architectures/architecture6.jpeg";
import image7 from "../img/architectures/architecture7.jpeg";
import image8 from "../img/architectures/architecture8.jpeg";
import image9 from "../img/architectures/architecture9.jpeg";
import image10 from "../img/architectures/architecture10.jpeg";
import image11 from "../img/architectures/architecture11.jpeg";
import image12 from "../img/architectures/architecture12.jpeg";
import image13 from "../img/architectures/architecture13.jpeg";
import image14 from "../img/architectures/architecture14.jpeg";
import image15 from "../img/architectures/architecture15.jpeg";
import image16 from "../img/architectures/architecture16.jpeg";

const images = [image1, image2, image7, image6, image5, image4, image3, image8, image9, image10, image11, image12, image13, image14, image15,image16];

const ArchitecturesPage = () => {
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
      <h1 className="text-7xl font-bold text-center mb-8">Architectures</h1>
      
      {/* Image Gallery */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {images.map((src, index) => {
          return (
            <div key={index} className="mb-4 break-inside-avoid">
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <img
                  src={src}
                  alt={`architecture ${index + 1}`}
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

export default ArchitecturesPage;
