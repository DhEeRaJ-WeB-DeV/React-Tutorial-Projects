import { motion } from "motion/react";

const containerVariants = {
  
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: 180 },
  visible: { opacity: 1, scale: 1, rotate: 0 },
};

const TimelineAnimation = () => {
  return (
    <motion.div
      className="flex items-center"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
    >
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="bg-purple-500 ml-[2rem] p-4 text-white my-2 rounded-lg"
          variants={itemVariants}
        >
          Item {index}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TimelineAnimation;
