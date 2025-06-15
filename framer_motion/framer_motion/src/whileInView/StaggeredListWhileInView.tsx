import { motion } from "motion/react";

const listVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const StaggeredListWhileInView = () => {
  return (
    <motion.ul
      className="flex flex-col items-center"
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.5 }}
    >
      
      {[...Array(5)].map((_: any, i: number) => (
        <motion.li
          key={i}
          className="p-4 my-2 w-20 bg-blue-300 rounded-lg items-center"
          variants={listVariants}
          initial={{opacity:0,y:100}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.5}}
        >
          {i}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default StaggeredListWhileInView;
