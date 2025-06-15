import { motion, useMotionValue, useMotionValueEvent } from "motion/react"
import { useState } from "react";
const DraggableBoxMotionValue = () => {
    const x=useMotionValue<number>(0);
    const y=useMotionValue<number>(0);
    const [pos,setPos]=useState({x:0,y:0})
    useMotionValueEvent(x,'change',(latestX)=>{
            setPos((prev)=>({...prev,x:latestX}))
    });
    useMotionValueEvent(y,'change',(latestY)=>{
      setPos((prev)=>({...prev,y:latestY}))
})
  return (
    <div className="flex flex-col items-center">
        
    <motion.div className="w-32 h-32 bg-blue-500 rounded" drag style={{x,y}}/>
       
    
    <p className=" text-white">
            position({pos.x.toFixed(1)},{pos.y.toFixed(1)})
    </p>
    </div>
  )
}

export default DraggableBoxMotionValue