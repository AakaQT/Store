import React from 'react'

const Navbar = ({ search, setSearch }) => {
  return (
    <nav className="p-[10px] bg-gray-100 sticky top-0 w-full">
      <ul className="flex justify-around align-middle">
        <li><h1 className="text-[30px]">Store</h1></li>
        <li><input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Enter products" className="w-[400px] outline-0 bg-white h-[50px] p-[10px] rounded-[10px]" /></li>
      </ul>
    </nav>
  )
}

export default Navbar