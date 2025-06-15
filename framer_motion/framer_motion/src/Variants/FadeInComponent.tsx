import { motion } from "motion/react";

const Fade = {
  hidden: { opacity: 0.5 ,backgroundColor:'red' },
  visible: { opacity: 1,backgroundColor:'blue' },
};
const FadeInComponent = () => {
  return (
    <motion.div
      className=" p-4 rounded shadow"
      variants={Fade}
      initial="hidden"
      whileHover="visible"
      transition={{ duration: 1 }}
    >
      <h1 className="text-white">Fade In Component</h1>
    </motion.div>
  );
};

export default FadeInComponent;
