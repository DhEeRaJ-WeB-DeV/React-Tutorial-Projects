import { motion } from "motion/react"
const name ='Hello World'
const StaggerVariants={
    hidden:{opacity:0},
    visible:{opacity:1}
};
const StaggeredTextReveal = () => {
  return (
    <motion.div className="text-4xl font-bold text-white flex justify-center items-center space-x-2" initial='hidden' animate='visible' transition={{staggerChildren:0.5}}>
        {name.split('').map((item,index)=>(
            <motion.div key={index} className="" variants={StaggerVariants}>{item}</motion.div>
        ))}
    </motion.div>

  )
}

export default StaggeredTextReveal