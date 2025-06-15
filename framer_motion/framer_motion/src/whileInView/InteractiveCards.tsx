import { motion } from "motion/react";
const InteractiveCards = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {[...Array(4)].map((_,index) => (
        <motion.div
          className="bg-blue-500 p-6 text-white text-center rounded-lg"
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          whileHover={{ scale: 1.1, backgroundColor: "#3b82f6" }}
          transition={{duration:1}}
        >card{index}</motion.div>
      ))}
    </div>
  );
};

export default InteractiveCards;
