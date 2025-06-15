import { motion } from "motion/react";
const SpinningIcon = () => {
  return (
    <motion.img
      src="HZD 2.png" alt="img"
      className="w-100 h-100"
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    />
  );
};

export default SpinningIcon;
