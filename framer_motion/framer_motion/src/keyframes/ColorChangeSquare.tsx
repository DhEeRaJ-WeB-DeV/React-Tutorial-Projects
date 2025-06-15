import { motion } from 'motion/react'

const ColorChangeSquare = () => {
  return (
    <motion.div
      className="w-36 h-36 rounded" 
      whileHover={{ backgroundColor: ["#FF0000", "#00FF00", "#0000FF", "#FF0000"] }}
      transition={{
        duration: 3,
        ease: "linear",
        repeat: Infinity,       
        repeatType: "loop",
      }}
    />
  );
};

export default ColorChangeSquare;
