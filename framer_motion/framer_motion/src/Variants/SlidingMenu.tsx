import { motion } from "motion/react";
import { useState } from "react";

const Toggle = {
  open: { x: "0%" },
  closed: { x: "-100%" },
};
const SlidingMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <button
        className="p-2 bg-gray-500 text-white rounded"
        onClick={() => setOpen(!open)}
      >
        toggle
      </button>
      <motion.div
        className="fixed top-0 left-0 w-64 h-full bg-blue-600"
        variants={Toggle}
        initial="closed"
        animate={open ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      >
        <ul className="p-4 text-white">
          <li>home</li>
          <li>contact</li>
          <li>location</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default SlidingMenu;
