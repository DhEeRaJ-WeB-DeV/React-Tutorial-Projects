import { motion } from "motion/react";
const Loader = () => {
  return (
    <div className="flex justify-center items-center space-x-2">
      {[...Array(3)].map((_, i) => (
        <motion.div
          className="bg-blue-500 w-20 h-20 rounded-full"
          animate={{ y: [0, -30, 0]}}
          transition={{ duration: 1.5, delay: i * 0.5 ,repeat:Infinity ,ease:'easeInOut'}}
        />
      ))}
    </div>
  );
};

export default Loader;
