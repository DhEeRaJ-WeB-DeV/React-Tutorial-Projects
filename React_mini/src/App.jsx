import Calculator from "./components/Calculator"
import HiddenSearchBar from "./components/HiddenSearchBar"
import Meals from "./components/Meals"
import Testimonial from "./components/Testimonial"
import Toggle from "./components/Toggle"
import {accordionData} from "./Utils/Content"
import Accordian from "./components/Accordian"
import './Style.css'
import Form from "./components/Form"

function App() {

  return (
    <>
     {/* <Counter/> */}
     {/* <TodoList/> */}
     {/* <Meals/> */}
     {/* <Calculator/> */}
     {/* <Toggle/> */}
     {/* <HiddenSearchBar/> */}
     {/* <Testimonial/> */}
     {/* <div className="accordian">
      {accordionData.map(({title,content}) => (
         <Accordian  title={title} content={content} />
      ))}
     </div> */}
     <Form/>
    </> 
  )
  }


export default App
