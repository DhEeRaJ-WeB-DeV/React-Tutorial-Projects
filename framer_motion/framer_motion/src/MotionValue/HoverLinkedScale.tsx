import{motion, useMotionValue} from 'motion/react'
const HoverLinkedScale = () => {
    const scale =useMotionValue(1)
  return (
    <motion.div className='p-2 bg-blue-200 rounded cursor-pointer' onHoverStart={()=>scale.set(1.5)} onHoverEnd={()=>scale.set(1)} style={{scale}}>Click Me</motion.div>
  )
}

export default HoverLinkedScale