import { useContext } from 'react';
import React from 'react';
import Image1 from '../img/animals/animal18.jpeg';
import Image2 from '../img/architectures/architecture4.jpeg';
import Image3 from '../img/events/event12.jpeg';
import Image4 from '../img/landscapes/landscape1.jpeg';
import Image5 from '../img/portraits/portrait20.jpeg';
import { CursorContext } from '../context/CursorContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const transition1 = {
  duration: 0.5,
  ease: 'easeInOut',
};

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  const images = [
    { src: Image1, title: 'Animals', link: '/AnimalsPage' },
    { src: Image2, title: 'Architectures', link: '/ArchitecturesPage' },
    { src: Image3, title: 'Events', link: '/EventsPage' },
    { src: Image4, title: 'Landscapes', link: '/LandscapesPage' },
    { src: Image5, title: 'Portraits', link: '/PortraitsPage' },
    { src: Image4, title: 'Videography', link: '/VideographyPage' },
  ];

  return (
    <motion.section
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="section h-screen overflow-y-auto"
    >
      <div className="container mx-auto relative">
        <div className="flex flex-col items-center justify-start text-center pt-24 pb-5">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className="flex flex-col items-center mb-5 px-4 sm:px-8 md:px-16 lg:px-24"
          >
            <h1 className="h1">Portfolio</h1>
            <p className="max-w-xl">
              Check out some of my work below. Click on the thumbnails to learn more about each project.
            </p>
          </motion.div>

          {/* Masonry Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-11 pb-6 px-4"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={transition1}
                className="group relative overflow-hidden border border-gray-200 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-shadow duration-500"
              >
                <Link to={image.link}>
                  {/* Image */}
                  <div className="w-full h-48 sm:h-56 lg:h-60">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {/* Button */}
                    <button
                      className="px-4 py-2 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
                    >
                      View More
                    </button>
                  </div>
                </Link>
                {/* Title */}
                <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-center py-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {image.title}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
