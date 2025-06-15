import './SideBar.css';
import Colors from './Colors/Colors';
import Category from './Category/Category';
import Price from './Price/Price';
import { TiShoppingCart } from "react-icons/ti";

const SideBar = ({handleChange}) => {
  
  return (
    <section className="sidebar">
        <div className="logo-container">
            <h1><TiShoppingCart style={{fontSize : '20px'}}/></h1>
        </div>
        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>
    </section>
  )
}

export default SideBar