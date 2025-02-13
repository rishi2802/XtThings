import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Animation Variants
const menuVariants = {
  hidden: {
    x: '100%', // Start off-screen
    opacity: 0,
  },
  visible: {
    x: 0, // Fully visible on screen
    opacity: 1,
    transition: {
      ease: "easeInOut", // Using a predefined easing function
      duration: 0.5,
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  // Toggle menu state
  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <nav className="text-primary xl:hidden">
      {/* Hamburger and Close Icon */}
      <div
        className="text-3xl cursor-pointer fixed top-4 right-4 z-50"
        onClick={toggleMenu}
      >
        {openMenu ? <IoMdClose /> : <CgMenuRight />}
      </div>

      {/* Sliding Menu */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            key="menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="bg-white shadow-2xl fixed top-0 right-0 w-full h-screen max-w-xs z-40"
          >
            <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl">
              <li>
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/portfolio" onClick={toggleMenu}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;
