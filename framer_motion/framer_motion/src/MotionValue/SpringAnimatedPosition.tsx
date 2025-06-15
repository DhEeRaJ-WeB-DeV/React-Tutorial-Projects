import { motion, useMotionValue } from "motion/react"
const SpringAnimatedPosition = () => {
    const x=useMotionValue(0);
    const y=useMotionValue(0);
    const moveBox =()=>{
        x.set(Math.random()*100);
        y.set(Math.random()*100);
    }
  return (
    <motion.div className="w-34 h-34 bg-blue-500 rounded flex justify-center items-center text-white" style={{x,y}} onClick={moveBox}> click me</motion.div>
  )
}

export default SpringAnimatedPosition