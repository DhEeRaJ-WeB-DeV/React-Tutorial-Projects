import { AnimatePresence, motion, PanInfo } from "motion/react";
import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1507936580189-3816b4abf640?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1448518340475-e3c680e9b4be?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const GestureBasedImageGallery = () => {
  const [index, setIndex] = useState<number>(0);

  const handleImg =(_:any,info:PanInfo)=>{
    if(info.offset.x>10){
      setIndex((prev)=>((prev-1)+images.length)%images.length);
    }
    if(info.offset.x<-10){
      setIndex((prev)=>(prev+1)%images.length);
    }
  }

  return (
    <div className="relative w-72 h-72 overflow-hidden">
      <AnimatePresence>
    <motion.img
      key={index}
      src={images[index]}
      alt={`img ${index}`}
      className="w-full h-full rounded"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleImg}
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
    ></motion.img>
    </AnimatePresence>
    </div>

  );
};

export default GestureBasedImageGallery;
