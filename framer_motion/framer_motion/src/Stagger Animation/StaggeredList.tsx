import { motion } from "motion/react"
const staggerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
const StaggeredList = () => {
  return (
    <motion.div initial='hidden' animate='visible' 
    variants={
        {visible: {
        transition: { staggerChildren: 0.5 },
      }}}>
        {[...Array(5)].map((_,i)=>(
            <motion.div key={i} className="mb-2 p-5 bg-yellow-300" variants={staggerVariants} ></motion.div>
        ))}
    </motion.div>
  )
}

export default StaggeredList