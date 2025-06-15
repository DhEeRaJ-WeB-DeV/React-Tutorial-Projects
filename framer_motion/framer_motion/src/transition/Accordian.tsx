import { motion } from "motion/react";
import { useState } from "react";
interface Items {
  title: string;
  content: string;
}
const items: Items[] = [
  { title: "Item 1", content: "This is the content of item 1." },
  { title: "Item 2", content: "This is the content of item 2." },
  { title: "Item 3", content: "This is the content of item 3." },
];
const Accordian = () => {
  const [open, setopen] = useState<number | null>(null);
  const Toggle =(index:number):void=>{
         setopen(open===index?null:index)
  }
  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => Toggle(index)}
            className="w-full text-left p-2 bg-gray-300 rounded focus:outline-none"
          >
            {item.title}
          </button>

          <motion.div 
          className="overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: open === index ? "auto" : 0 }}
            transition={{ duration: 0.3 }}>
            <div className="p-2 bg-gray-200 rounded">{item.content}</div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Accordian;
