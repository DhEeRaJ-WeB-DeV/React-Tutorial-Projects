import { motion } from "motion/react";
const SequentialBoxes = () => {
  return (
    <div className="">
      {[...Array(8)].map((_, i) => (
        <motion.div
          className="bg-yellow-500 w-20 h-20 "
          key={i}
          animate={{ x: 100 }}
          transition={{ duration: 1, delay: i * 0.5 }}
        />
      ))}
      
    </div>
  );
};

export default SequentialBoxes;
