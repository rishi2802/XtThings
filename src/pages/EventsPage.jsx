import React, { useEffect } from "react";
import image1 from "../img/events/event1.jpeg";
import image2 from "../img/events/event2.jpeg";
import image3 from "../img/events/event3.jpeg";
import image4 from "../img/events/event4.jpeg";
import image5 from "../img/events/event5.jpeg";
import image6 from "../img/events/event6.jpeg";
import image7 from "../img/events/event7.jpeg";
import image8 from "../img/events/event8.jpeg";
import image9 from "../img/events/event9.jpeg";
import image10 from "../img/events/event10.jpeg";
import image11 from "../img/events/event11.jpeg";
import image12 from "../img/events/event12.jpeg";
import image13 from "../img/events/event13.jpeg";
import image14 from "../img/events/event14.jpeg";
import image15 from "../img/events/event15.jpeg";
import image16 from "../img/events/event16.jpeg";
import image17 from "../img/events/event17.jpeg";
import image18 from "../img/events/event18.jpeg";
import image19 from "../img/events/event19.jpeg";
import image20 from "../img/events/event20.jpeg";
import image21 from "../img/events/event21.jpeg";
import image22 from "../img/events/event22.jpeg";
import image23 from "../img/events/event23.jpeg";
import image24 from "../img/events/event24.jpeg";
import image25 from "../img/events/event25.jpeg";
import image26 from "../img/events/event26.jpeg";
import image27 from "../img/events/event27.jpeg";
import image28 from "../img/events/event28.jpeg";
import image29 from "../img/events/event29.jpeg";
import image30 from "../img/events/event30.jpeg";
import image31 from "../img/events/event31.jpeg";
import image32 from "../img/events/event32.jpeg";
import image33 from "../img/events/event33.jpeg";
import image34 from "../img/events/event34.jpeg";
import image35 from "../img/events/event35.jpeg";
import image36 from "../img/events/event36.jpeg";
import image37 from "../img/events/event37.jpeg";
import image38 from "../img/events/event38.jpeg";
import image39 from "../img/events/event39.jpeg";
import image40 from "../img/events/event40.jpeg";
import image41 from "../img/events/event41.jpeg";
import image42 from "../img/events/event42.jpeg";
import image43 from "../img/events/event43.jpeg";
import image44 from "../img/events/event44.jpeg";
import image45 from "../img/events/event45.jpeg";
import image46 from "../img/events/event46.jpeg";
import image47 from "../img/events/event47.jpeg";
import image48 from "../img/events/event48.jpeg";
import image49 from "../img/events/event49.jpeg";
import image50 from "../img/events/event50.jpeg";
import image51 from "../img/events/event51.jpeg";
import image52 from "../img/events/event52.jpeg";
import image53 from "../img/events/event53.jpeg";
import image54 from "../img/events/event54.jpeg";
import image55 from "../img/events/event55.jpeg";

const images = [
  image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, 
  image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, 
  image21, image22, image23, image24, image25, image26, image27, image28, image29, image30, 
  image31, image32, image33, image34, image35, image36, image37, image38, image39, image40, 
  image41, image42, image43, image44, image45, image46, image47, image48, image49, image50, 
  image51, image52, image53, image54, image55
];

const EventsPage = () => {
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
      <h1 className="text-7xl font-bold text-center mb-8">Events</h1>
      
      {/* Image Gallery */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {images.map((src, index) => {
          return (
            <div key={index} className="mb-4 break-inside-avoid">
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <img
                  src={src}
                  alt={`event ${index + 1}`}
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

export default EventsPage;
