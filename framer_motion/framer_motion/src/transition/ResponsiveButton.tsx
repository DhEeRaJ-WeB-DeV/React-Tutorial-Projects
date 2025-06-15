import { motion } from "motion/react";
const ResponsiveButton = () => {
  return (
    <motion.button
      className="p-2 bg-blue-500 text-white rounded  "
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{duration:1,ease:'easeInOut'}}
    >Click Me</motion.button>
  );
};

export default ResponsiveButton;
