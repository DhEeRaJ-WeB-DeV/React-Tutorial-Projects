import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
const Fade = () => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <div className="flex flex-col items-center">
      <button
        className="mb-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => setVisible(!visible)}
      >
        hide
      </button>
     <AnimatePresence>
      {visible && (
        <motion.div
          className="p-4 bg-gray-200 rounded text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{duration:2}}
        >
          hello my friend
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
};

export default Fade;
