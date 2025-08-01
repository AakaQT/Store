import React from 'react'

const ProductCard = ({ name, img, price, rating }) => {
  return (
    <div className="w-[400px] mb-[20px] bg-white rounded-[10px] mr-[30px] p-[10px]">
        <img src={img} alt={name} className="w-[250px] ml-auto mr-auto" />
        <h1>{name}</h1>
        <span>{price}€</span>
        <span>{rating}</span>
    </div>
  )
}

export default ProductCard