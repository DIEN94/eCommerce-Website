import React, {} from "react";
import './styles/App.scss'
import { MyModal } from "./components/UI/modal/MyModal";
import { CardOfProduct } from "./components/UI/CardOfProduct/CardOfProduct";
import imgCard from './img/image 1.png';
import Label from './img/Label.png';


function App() {
  
  return (
    <div className="myApp">
      <CardOfProduct src={imgCard} label={Label} ProductName="Syltherine" SortDescription="Stylish cafe chair" FixPrice="Rp 2.500.000" OriginalPrice="Rp 3.500.000"/>
    </div>
  );
}

export default App;