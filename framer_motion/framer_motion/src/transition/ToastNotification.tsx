import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
const ToastNotification = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const showToaster = (): void => {
    setVisible(true);
    setTimeout(() => setVisible(false), 5000);
  };
  return (
    <div className="flex flex-col items-center">
      <button
        className="mb-4 p-2 bg-blue-500 text-white rounded"
        onClick={showToaster}
      >
        Show Notification
      </button>
      <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed top-4 right-4 p-4 bg-green-500 text-white rounded"
          initial={{ opacity: 0 , y:-20 }}
          animate={{opacity:1 , y:0}}
          exit={{opacity:0 , y:-20}}
          transition={{duration:0.5}}
        >
          Notification: Action Successful!
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
};

export default ToastNotification;
