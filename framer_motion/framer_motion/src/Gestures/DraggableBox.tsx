import { motion } from "motion/react";
const DraggableBox = () => {
  return (
    <motion.div
      className="w-36 h-36 bg-cyan-500 rounded flex justify-center items-center"
      drag
      dragConstraints={{left:-100,right:100,top:-100,bottom:100}}
    >
      Drag me
    </motion.div>
  );
};

export default DraggableBox;
