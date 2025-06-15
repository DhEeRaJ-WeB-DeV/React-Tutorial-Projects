import { motion } from "motion/react";
const ComplexAnimation = () => {
  return (
    <motion.div
      className="bg-green-500 w-50 h-50 "
      animate={{ x:[-500,500], rotate: 360, scale: 1.5 }}
      transition={{ duration: 10 }}
    />
  );
};

export default ComplexAnimation;
