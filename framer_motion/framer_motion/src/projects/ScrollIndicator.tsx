import { motion, useScroll, useTransform } from "motion/react";
const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const line = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div className="h-[200vh] p-[20px]">
      <motion.div
        className="fixed top-0 left-0 h-[5px] bg-red-500"
        style={{width: line}}
        transition={{ease:'easeInOut'}}
      />
      <div className="mt-[50px]">
        {[...Array(100)].map((_,i) => (
          <p className="mt-[20px]" key={i}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
            expedita numquam ad odio dicta tempora, necessitatibus nemo! Quae,
            quos recusandae. Perferendis eos amet distinctio sapiente tenetur
            delectus laboriosam dolore rem!
          </p>
        ))}
      </div>
    </div>
  );
};

export default ScrollIndicator;
