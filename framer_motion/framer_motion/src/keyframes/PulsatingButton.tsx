import { motion } from "motion/react";
const PulsatingButton = () => {
  return (
    <motion.button
      className="p-2 w-20 bg-teal-500 text-white rounded"
      animate={{scale:[1,2,1]}}
      whileHover={{scale:4}}
      transition={{duration:2,repeat:Infinity,repeatType:'loop',ease:'easeInOut'}}
    >
      Click
    </motion.button>
  );
};

export default PulsatingButton;
