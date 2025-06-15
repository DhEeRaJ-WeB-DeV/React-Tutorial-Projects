import { motion } from "motion/react";

const Box = () => {
  return (
    <motion.div
      className="w-20 h-20 bg-yellow-500 rounded-full"
      initial={{ x: -100 }}
      animate={{ x: 100 }}
      transition={{ duration: 5 }}
    ></motion.div>
  );
};

export default Box;
