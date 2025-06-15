import { motion, PanInfo } from "motion/react"
import { useState } from "react"
const SwipeableCard = () => {
   const[removed,setRemoved]= useState(false);
   const handleSwipe =(_:any,info:PanInfo)=>{
    if(info.offset.x >100 ||info.offset.x < -100 ){
        setRemoved(true);
    }
   };
  return (
    <motion.div className={`w-64 h-32 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center text-white ${
        removed ? "hidden" : ""
      }`} drag='x' dragConstraints={{left:-100,right:100}} onDragEnd={handleSwipe}>
     Swipe Me   
    </motion.div>
  )
}

export default SwipeableCard