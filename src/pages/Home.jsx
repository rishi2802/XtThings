import React, { useContext } from 'react';
import surya from '../img/home/Hero2.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorContext';

const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ transition1 }}
      className="section"
    >
      <div className="container mx-auto h-full min-h-screen relative">
        {/* Text and Image wrapper */}
        <div className="flex flex-col justify-center items-center lg:flex-row h-full relative">

          {/* Marquee Text (Behind the Image) */}
          <motion.div         
            onMouseLeave={mouseLeaveHandler}
            onMouseEnter={mouseEnterHandler}
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ duration: 1.5 }} 
            className="absolute inset-0 z-0 flex justify-center items-center"
          >
            <div
              className="whitespace-nowrap animate-marquee text-[80rem] lg:text-[8rem] font-semibold"
              style={{ position: 'absolute', top: '15%', transform: 'translateY(-50%)' }} >
              <h1 className='text-[20rem]'>JAYA SURYA</h1>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={{ transition1 }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start relative"
          >
            <h1 className="h1">
              {/* Photographer <br /> & Video Grapher */}
            </h1>
          </motion.div>

          {/* Image */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 flex justify-center items-end z-10"
          >
            <img
              src={surya}
              alt="Photographer"
              className="w-full h-auto object-cover min-h-[800px] lg:min-h-[1200px] xl:w-[1200px] xl:h-[1000px]
                sm:w-[1000px] sm:h-[800px] 
                md:w-[1000px] md:h-[800px] 
                lg:w-[1200px] lg:h-[1000px]"
            />
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default Home;
