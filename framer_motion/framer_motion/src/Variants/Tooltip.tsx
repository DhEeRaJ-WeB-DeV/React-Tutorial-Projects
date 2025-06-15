import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const Visiblity={
    hidden:{opacity:0,y:-10},
    visible:{opacity:1,y:0}
}

const Tooltip = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <button
        className="p-2 bg-teal-500 text-black rounded"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        hover
      </button>
      <AnimatePresence>
      {open && (
        <motion.div className="absolute bg-gray-700 text-white p-2 rounded" variants={Visiblity} initial='hidden' animate='visible' exit='hidden' transition={{duration:1}} >Content</motion.div>
      )}
      </AnimatePresence>
      
    </div>
  );
};

export default Tooltip;
