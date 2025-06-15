import { motion } from "motion/react"
const StaggeredGridLayout = () => {
    const array=Array.from({length:6});
    const staggerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
  return (
    <motion.div className="grid grid-cols-3 gap-4" initial='hidden' animate='visible' variants={{visible:{transition:{staggerChildren:0.5}}}}>
        {array.map((_,index)=>(
            <motion.div key={index} className="p-4 w-20 bg-gray-200 rounded" variants={staggerVariants}>{index}</motion.div>
        ))}
    </motion.div>

  )
}

export default StaggeredGridLayout