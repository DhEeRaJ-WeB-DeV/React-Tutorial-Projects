import { motion } from "motion/react";

const BouncingCircle = () => {
  return (
    <motion.div
      className="bg-red-500 w-20 h-20 rounded-full"
      animate={{ y: [0, -200, 0]}}
      transition={{ duration: 1, repeat: Infinity , ease:"easeInOut"}}
    />
  );
};

export default BouncingCircle;
