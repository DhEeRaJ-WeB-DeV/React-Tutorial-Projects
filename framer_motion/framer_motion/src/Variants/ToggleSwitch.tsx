import { motion } from "motion/react";
import { useState } from "react";
const Toggle = {
  on: { x: 80 },
  off: { x: 0 },
};
const ToggleSwitch = () => {
  const [on, setOn] = useState<boolean>(false);
  return (
    <div className="relative inline-block w-36 h-16">
      <div
        className={`w-full h-full rounded-full bg-gray-300 cursor-pointer ${on ? "bg-green-500" : "" }`}
        onClick={() => setOn(!on)}
      >
        <motion.div
          className="absolute top-1 left-1 w-14 h-14 rounded-full bg-white shadow"
          variants={Toggle}
          animate={on?'on':'off'}
          transition={{type:'spring',stiffness:300}}
        ></motion.div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
