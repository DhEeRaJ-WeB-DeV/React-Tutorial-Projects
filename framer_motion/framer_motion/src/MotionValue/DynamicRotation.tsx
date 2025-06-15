import { motion, useMotionValue } from "motion/react";
const DynamicRotation = () => {
  const rotation = useMotionValue(0);
  const rotate =()=>{
    rotation.set(rotation.get()+45);
  }
  return (
    <motion.div
      className="w-34 h-34 bg-blue-500 rounded flex justify-center items-center text-white"
      style={{ rotate: rotation }}
      onClick={rotate}
    ></motion.div>
  );
};

export default DynamicRotation;
