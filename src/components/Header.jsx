import React, { useContext } from 'react';
import Logo from '../img/header/XTLogoWhiteWithBG.png';
import Socials from './Socials';
import MobileNav from './MobileNav';
import { motion } from 'framer-motion';
import { CursorContext } from '../context/CursorContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <motion.div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '100%' }}
        transition={{ duration: 1.5 }}
        className="flex flex-col lg:flex-row lg:items-center w-full justify-between"
      >
        <div className="flex items-center">
          <Link to={'/'}>
            <img className="rounded-lg" src={Logo} alt="Logo" height={50} width={50} />
          </Link>
          {/* Text "Things" next to the logo */}
          <span className="ml-4 text-lg font-semibold text-gray-700">Photography</span>
        </div>
        <nav className="hidden xl:flex gap-x-12 font-semibold">
          <Link to={'/'} className="text-[#696c6d] hover:text-primary transition">Home</Link>
          <Link to={'/about'} className="text-[#696c6d] hover:text-primary transition">About</Link>
          <Link to={'/portfolio'} className="text-[#696c6d] hover:text-primary transition">Portfolio</Link>
          <Link to={'/contact'} className="text-[#696c6d] hover:text-primary transition">Contact</Link>
        </nav>
        <Socials />
        <MobileNav />
      </motion.div>
    </header>
  );
};

export default Header;
  