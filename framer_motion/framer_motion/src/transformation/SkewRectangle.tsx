import { motion } from "motion/react";
import { useState } from "react";
const SkewRectangle = () => {
  const [skew, setSkew] = useState(false);
  return (
    <motion.div
      className="bg-yellow-500 w-100 h-50 "
      onClick={() => setSkew(!skew)}
      animate={{skewX:skew?20:0}}
      transition={{duration:1}}
    />
  );
};

export default SkewRectangle;
