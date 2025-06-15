import { motion } from "motion/react";
const CircleLoader = () => {
  return (
    <div>
      <motion.div
        className="relative w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="absolute inset-0 border-4 border-blue-300 border-solid rounded-full"
          animate={{opacity:[1,0.5,1],scale:[1,1.5,1]}}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          style={{ borderTopColor: "transparent" }}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default CircleLoader;
