import { motion } from "motion/react"
const StaggeredButtonPress = () => {
  return (
    <motion.div>
        {[...Array(4)].map((_,i)=>(
            <motion.button key={i} className="p-4 bg-yellow-500 rounded ml-[2rem]" whileHover={{scale:1.1}}>button{i}</motion.button>
        ))}
    </motion.div>
  )
}

export default StaggeredButtonPress