import { useState } from 'react';
import ProductCard from './components/productCard.jsx';
import './App.css';
import { MdHomeFilled } from "react-icons/md";

function App() {
  

  return (
    <div>

      <ProductCard name="Apple Iphone " price="$959" image="https://picsum.photos/id/3/200/300" />
      <ProductCard name="Samsung Galaxy " price="$899" image="https://picsum.photos/id/4/200/300" />
      <ProductCard name="Google Pixel " price="$799" image="https://picsum.photos/id/5/200/300" />
      <MdHomeFilled />
    </div>
  )
}

export default App
