import { motion } from "motion/react"
const SlidingText = () => {
  return (
    <motion.h1 className="text-black font-bold text-2xl " initial={{x:'-500%'}} animate={{x:"0"}} transition={{duration:4,ease:"linear"}}>hi there my Friend</motion.h1>
  )
}

export default SlidingText