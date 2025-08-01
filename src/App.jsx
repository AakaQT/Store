import React from 'react'
import Navbar from './components/Navbar.jsx'
import { useState, useEffect } from "react"
import ProductCard from "./components/ProductCard.jsx"

const App = () => {
  const [search, setSearch] = useState("");
  const [productList, setProductList] = useState([]);
  let productData;

  const STORE_API_DATA = () => fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => setProductList(data))
    .catch(error => {
      console.error(`Error fetching products: ${error}`);
    })
  
  
    useEffect(() => {
    STORE_API_DATA();
  }, [])
  return (
    <div>
      <Navbar search={search} setSearch={setSearch} />

      <h1>Products</h1>
      {productList.map(product => (
        <ProductCard key={product.id} name={product.title} />
      ))}
    </div>
  )
}

export default App