import React, {} from "react";
import './styles/App.scss'
import { MyModal } from "./components/UI/modal/MyModal";
import { CardOfProduct } from "./components/UI/CardOfProduct/CardOfProduct";
import imgCard from './img/image 1.png';
import Label from './img/Label.png';
import { DropDown } from "./components/UI/DropDown/DropDown";


function App() {


  const options = [
  {
  value: "size",
  label: "Size"
  },
  {
    value: "width",
    label: "Width"
  },
  {
    value: "height",
    label: "Height"
  }]

  const handleDropdownChange = (value: string) => {
    console.log('Selected value:', value);
  };
  
  return (
    <div className="myApp">
      <CardOfProduct src={imgCard} label={Label} ProductName="Syltherine" SortDescription="Stylish cafe chair" FixPrice="Rp 2.500.000" OriginalPrice="Rp 3.500.000"/>
      <DropDown options={options} defaultValue="size" onChange={handleDropdownChange}/>
    </div>
  );
}

export default App;