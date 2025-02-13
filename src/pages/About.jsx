import React, { useContext } from 'react';
import Img from '../img/about/about.jpeg'; // Ensure the path is correct
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CursorContext } from '../context/CursorContext'; // Ensure this is set up correctly

// Define or import the transition settings
const transition1 = { duration: 0.5, ease: 'easeInOut' };

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'
    >
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="container mx-auto h-full relative"
      >
        {/* Text & Image Wrapper */}
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
          {/* Image Section */}
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden lg:translate-x-[50px]'>
            <img 
              src={Img} 
              alt='Woman' 
              className='w-[300px] max-w-full h-auto object-cover md:w-[400px] lg:w-[470px] rounded-3xl' 
            />
          </div>
          {/* Text Section */}
          <div className='flex-1 pt-45 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start lg:translate-x-[-20px]'>
            <h1 className='h1'>About Me</h1>
            <p className='mb-12 max-w-md'>
              Hi, I’m <b>Jayasurya</b>—a professional photographer and videographer with a passion for 
              creating captivating visual stories. With expertise in <b>photography</b>, <b>videography</b>, and <b>editing</b>, 
              I specialize in delivering high-quality visuals that capture the essence of every moment. 
              As a skilled <b>social media manager</b>, I design strategies that boost engagement, while my digital 
              marketing experience ensures your content reaches the right audience effectively.
              In addition to photography and videography, I bring a wide range of skills to the table. 
              From crafting cinematic videos and professional photo shoots to providing expert <b>editing</b> and managing 
              impactful <b>digital marketing</b> campaigns,I work with precision and creativity to meet every unique requirement.
            </p>
            <Link to='/portfolio' className='btn'>
              View my Work
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
