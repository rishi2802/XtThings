import React, { useState, useEffect, createContext } from 'react';
import { motion } from 'framer-motion';

export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  const [cursorPos, setCursorPos] = useState(null);
  const [cursorVariant, setCursorVariant] = useState('hidden');
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Check on initial render
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Track cursor position
  useEffect(() => {
    if (isMobile) return; // Disable custom cursor for mobile

    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      if (cursorVariant === 'hidden') setCursorVariant('default');
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [cursorVariant, isMobile]);

  // Cursor variants for Framer Motion
  const variants = {
    hidden: { opacity: 0 },
    default: cursorPos
      ? {
          x: cursorPos.x - 16,
          y: cursorPos.y - 16,
          width: '32px',
          height: '32px',
          backgroundColor: '#0e1112',
          borderRadius: '50%',
          opacity: 1,
        }
      : { opacity: 0 },
    hover: cursorPos
      ? {
          x: cursorPos.x - 75,
          y: cursorPos.y - 75,
          width: '150px',
          height: '150px',
          backgroundColor: '#fff',
          borderRadius: '50%',
          mixBlendMode: 'difference',
          opacity: 1,
        }
      : { opacity: 0 },
  };

  // Event handlers for hover effect
  const mouseEnterHandler = () => setCursorVariant('hover');
  const mouseLeaveHandler = () => setCursorVariant('default');

  return (
    <CursorContext.Provider value={{ mouseEnterHandler, mouseLeaveHandler }}>
      {children}
      {/* Render custom cursor */}
      {!isMobile && (
        <motion.div
          className="custom-cursor"
          variants={variants}
          animate={cursorVariant}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            pointerEvents: 'none',
            zIndex: 9999,
            display: cursorPos ? 'block' : 'none', // Hides the cursor if cursorPos is null
          }}
        />
      )}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
