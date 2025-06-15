import { motion } from "motion/react"
import { CSSProperties,ReactNode } from "react";
interface Prop{
    children:ReactNode;
    style?:CSSProperties;
}
const DraggableCard = ({children,style}:Prop) => {
  return (
    <motion.div
      drag
      dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="rounded-2xl shadow-lg p-5 m-2 w-52 h-72
       flex items-center justify-center text-white text-xl"
      style={style}
    >
      {children}
    </motion.div>
  )
}

export default DraggableCard