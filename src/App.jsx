import React from 'react'
import Navbar from './components/Navbar.jsx'
import { useState, useEffect } from "react"
import ProductCard from "./components/ProductCard.jsx"

const App = () => {
  const [search, setSearch] = useState("");
  const [productList, setProductList] = useState([]);

  const STORE_API_DATA = () => fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {
      setProductList(data);
      console.log(data);
    })
    .catch(error => {
      console.error(`Error fetching products: ${error}`);
    })
  
  
  useEffect(() => {
    STORE_API_DATA();
  }, [])
  
  return (
    <div className="bg-gray-100">
      <Navbar search={search} setSearch={setSearch} />

      <h1 className="text-4xl">Products</h1>
      <div className="flex flex-wrap p-[20px]">
        {productList.map(product => (
          <ProductCard key={product.id} name={product.title} img={product.image} price={product.price} rating={product.rating.rate} />
        ))}
      </div>
    </div>
  )
}

export default App