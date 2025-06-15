import { motion, PanInfo } from "motion/react"
import { useState } from "react"
const RotateOnDrag = () => {
    const[rotate,setRotate]=useState<number>(0);
    const handleRotate=(_:any,info:PanInfo)=>{
        const newRotate= rotate+info.offset.x;
        setRotate(newRotate);
    }
  return (
    <motion.div className="w-36 h-36 bg-cyan-500 rounded" drag onDrag={handleRotate} animate={{rotate:rotate}}></motion.div>
  )
}

export default RotateOnDrag