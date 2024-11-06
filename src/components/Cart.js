import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
     const ITEMS = useSelector((state) => state.cart.items);
  return (
    <>
      {ITEMS.map((item) =>       
    <div class="rounded overflow-hidden shadow-lg flex flex-wrap ">
    <img class="w-[50%] m-auto" src={item.image_url} alt="Sunset in the mountains" />
    <div class="px-6 py-4 text-center">
      <div class="font-bold text-xl mb-2">{item.name}</div>
      <p class="text-gray-700 text-base">
  {item.description}
      </p>
    </div>

  </div>
     )}
    </>
  )
}

export default Cart
