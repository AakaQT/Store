import React from 'react'

const ProductCard = ({ name, img, price, rating }) => {
  return (
    <div className="w-[400px] mb-[20px] bg-white rounded-[10px] mr-[30px] p-[10px]">
        <img src={img} alt={name} className="w-[250px] ml-auto mr-auto" />
        <h1>{name}</h1>
        <span className="mr-[10px]">{price}€</span>
        <span>{rating}</span>
        <button className="block w-[350px] bg-blue-400 mr-auto ml-auto h-[40px] rounded-[10px] cursor-pointer hover:bg-blue-500">Buy now</button>
        <button className="block w-[350px] bg-gray-200 mr-auto ml-auto mt-[10px] h-[40px] rounded-[10px] cursor-pointer hover:bg-gray-300">Add to cart</button>
    </div>
  )
}

export default ProductCard