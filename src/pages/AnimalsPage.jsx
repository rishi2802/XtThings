import React, { useEffect } from "react";
import image1 from "../img/animals/animal1.jpeg";
import image2 from "../img/animals/animal2.jpeg";
import image3 from "../img/animals/animal3.jpeg";
import image4 from "../img/animals/animal4.jpeg";
import image5 from "../img/animals/animal5.jpeg";
import image6 from "../img/animals/animal6.jpeg";
import image7 from "../img/animals/animal7.jpeg";
import image8 from "../img/animals/animal8.jpeg";
import image9 from "../img/animals/animal9.jpeg";
import image10 from "../img/animals/animal10.jpeg";
import image11 from "../img/animals/animal11.jpeg";
import image12 from "../img/animals/animal12.jpeg";
import image13 from "../img/animals/animal13.jpeg";
import image14 from "../img/animals/animal14.jpeg";
import image15 from "../img/animals/animal15.jpeg";
import image16 from "../img/animals/animal16.jpeg";
import image17 from "../img/animals/animal17.jpeg";
import image18 from "../img/animals/animal18.jpeg";
import image19 from "../img/animals/animal19.jpeg";
import image20 from "../img/animals/animal20.jpeg";

const images = [image1, image2, image7, image4, image5, image6, image3, image18, image9, image10, image11, image12, image13, image14,
  image15, image16, image17, image8, image19, image20,
];

const AnimalsPage = () => {
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
      <h1 className="text-7xl font-bold text-center mb-8">Animals</h1>
      
      {/* Image Gallery */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {images.map((src, index) => {
          return (
            <div key={index} className="mb-4 break-inside-avoid">
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <img
                  src={src}
                  alt={`animal ${index + 1}`}
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

export default AnimalsPage;
