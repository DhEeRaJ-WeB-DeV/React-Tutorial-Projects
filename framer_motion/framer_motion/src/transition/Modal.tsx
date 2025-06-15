import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
const Modal = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col items-center">
      <button
        className="mb-4 p-2 bg-teal-400 rounded"
        onClick={() => setOpen(true)}
      >
        open model
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="bg-white p-4 rounded"
              onClick={(e: React.MouseEvent<HTMLDivElement>)=>e.stopPropagation()}
              initial={{ y: "-100vh" }}
              animate={{ y: "0vh" }}
              exit={{ y: "100vh" }}
              transition={{duration:0.5}}
            >
              <h2 className="text-lg text-black font-bold">Model Title</h2>
              <p className="text-black">This is Model Window!</p>
              <button
                className="mt-4 p-2 bg-red-400 rounded"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Modal;
