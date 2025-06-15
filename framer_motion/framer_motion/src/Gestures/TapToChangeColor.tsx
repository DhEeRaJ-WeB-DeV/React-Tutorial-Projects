import { motion } from "motion/react"
import { useState } from "react";
const colors = ["bg-blue-500", "bg-green-500", "bg-red-500", "bg-yellow-500"];
const TapToChangeColor = () => {
    const[index,setIndex]=useState<number>(0);
    const changeColor=()=>{
        setIndex((prev)=>(prev+1)%colors.length)
    }
  return (
    <motion.div className={`w-32 h-32 ${colors[index]} rounded-lg flex items-center justify-center text-white p-20`} onTap={changeColor} >TapToChangeColor</motion.div>
  )
}

export default TapToChangeColor