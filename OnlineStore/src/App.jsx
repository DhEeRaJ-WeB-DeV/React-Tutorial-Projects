import { useState } from "react"
import Nav from "./Navigation/Nav"
import Products from "./Products/Products"
import Recommended from "./Recommended/Recommended"
import SideBar from "./SideBar/SideBar"
import data from "./db/data"
import Card from "./components/Card"

function App() {
  const[selected,setSelected]=useState(null);
  const[query,setQuery]=useState('');

  const handleInputChange=(e)=>{
    setQuery(e.target.value);
  }
  const handleChange=(e)=>{
    setSelected(e.target.value);
  }
  const handleClick=(e)=>{
    setSelected(e.target.value);
  }

  function filteredProducts(data,selected,query){
    let filteredData=data;

    if(query){
      filteredData=data.filter((products)=>products.title.toLowerCase().includes(query.toLowerCase()));
    }
    if(selected){
      filteredData=filteredData.filter(
        ({category,newPrice,color,company,title})=>
          category===selected||newPrice===selected||color===selected||company===selected||title===selected
      );
    }
    return filteredData.map(
      ({img, title, star, reviews, prevPrice, newPrice})=>(
        <Card 
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice} />
      )
    )
  }
  const result = filteredProducts(data,selected,query);
  return (
    <>
      <SideBar handleChange={handleChange}/>
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick}/>
      <Products result={result}/>
      
    </>
  )
}

export default App
