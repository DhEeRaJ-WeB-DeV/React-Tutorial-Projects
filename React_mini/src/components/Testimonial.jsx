import { useState } from 'react';
import '../Style.css';

const Testimonial = () => {
  const[currentIndex,setCurrentIndex]=useState(0);
  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
    {
      quote: "This product has completely changed my life!",
      author: "Bob Johnson",
    },
  ];
 const handlePrev =()=>{
  setCurrentIndex((currentIndex + testimonials.length-1)%testimonials.length);
 };

 const handleNext =()=>{
  setCurrentIndex((currentIndex +1)%testimonials.length);
 };

   return (
    <div className='testimonials'>
     <div className='testimonials-quote'>
           {testimonials[currentIndex].quote}
     </div>
     <div className='testimonials-author'>
       -{testimonials[currentIndex].author}
     </div>
     <div className="testimonials-nav">
     <button onClick={handlePrev}>prev</button>
     <button onClick={handleNext}>next</button>
     </div>
     
    </div>
  )
}

export default Testimonial