import React, { useEffect } from "react";
import image1 from "../img/portraits/portrait1.jpeg";
import image2 from "../img/portraits/portrait2.jpeg";
import image3 from "../img/portraits/portrait3.jpeg";
import image4 from "../img/portraits/portrait4.jpeg";
import image5 from "../img/portraits/portrait5.jpeg";
import image6 from "../img/portraits/portrait6.jpeg";
import image7 from "../img/portraits/portrait7.jpeg";
import image8 from "../img/portraits/portrait8.jpeg";
import image9 from "../img/portraits/portrait9.jpeg";
import image10 from "../img/portraits/portrait10.jpeg";
import image11 from "../img/portraits/portrait11.jpeg";
import image12 from "../img/portraits/portrait12.jpeg";
import image13 from "../img/portraits/portrait13.jpeg";
import image14 from "../img/portraits/portrait14.jpeg";
import image15 from "../img/portraits/portrait15.jpeg";
import image16 from "../img/portraits/portrait16.jpeg";
import image17 from "../img/portraits/portrait17.jpeg";
import image18 from "../img/portraits/portrait18.jpeg";
import image19 from "../img/portraits/portrait19.jpeg";
import image20 from "../img/portraits/portrait20.jpeg";
import image21 from "../img/portraits/portrait21.jpeg";
import image22 from "../img/portraits/portrait22.jpeg";


const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19,
    image20, image21, image22
];

const PortraitsPage = () => {
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
      <h1 className="text-7xl font-bold text-center mb-8">Portraits</h1>
      
      {/* Image Gallery */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {images.map((src, index) => {
          return (
            <div key={index} className="mb-4 break-inside-avoid">
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <img
                  src={src}
                  alt={`portrait ${index + 1}`}
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

export default PortraitsPage;
