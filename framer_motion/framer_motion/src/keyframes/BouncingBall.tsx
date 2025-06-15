import { motion } from "motion/react";
const BouncingBall = () => {
  return (
    <motion.div
      className="bg-red-500 w-20 h-20 rounded-full"
      animate={{ y: [0, -100, 0] }}
      transition={{duration:1,repeat:Infinity,repeatType:'loop',ease:'easeInOut'}}
    ></motion.div>
  );
};

export default BouncingBall;
