import React, { useContext } from 'react';
import { FaSquareInstagram } from "react-icons/fa6"; 
import { FaPinterest } from "react-icons/fa"; 
import { CursorContext } from '../context/CursorContext';
import {motion} from 'framer-motion';

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  
  return ( 
  <motion.div
  onMouseEnter={mouseEnterHandler}
  onMouseLeave={mouseLeaveHandler}
  initial={{ opacity: 0, y: '100%' }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: '100%' }}
  transition={{ duration: 1.5 }} 
   className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4 text-3xl'>
      <li><a href='https://www.instagram.com/xt.things?igsh=MWJvcDA4ODJscGp3' target='-blank'><FaSquareInstagram /></a></li>
      <li><a href='' target='-blank'><FaPinterest /></a></li>
    </ul>
  </motion.div>
)};

export default Socials;
