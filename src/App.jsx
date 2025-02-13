import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "./context/CursorContext";

export default function App() {
  const { cursorVariants, cursorBG } = useContext(CursorContext);

  return (
    <div>
      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 w-full h-full bg-[rgb(235,235,235)] bg-[linear-gradient(to_right,rgb(213,213,213)_1px,transparent_1px),linear-gradient(to_bottom,rgb(213,213,213)_1px,transparent_1px)] bg-[size:8px_8px]" />
      
      {/* Router */}
      <Router>
        {/* Header Component */}
        <Header />
        
        {/* Animated Routes for Sections */}
        <AnimRoutes />
      </Router>

      {/* Custom Cursor */}
      <motion.div
        variants={cursorVariants}
        animate={cursorBG}
        className="w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full"
      ></motion.div>
    </div>
  );
}
