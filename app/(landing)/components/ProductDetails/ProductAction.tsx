"use client";
import { FiShoppingBag,FiArrowRight,FiArrowUp,FiArrowDown } from 'react-icons/fi';
import Button from '../UI/button';
import {useState} from "react"
import {useRouter} from "next/navigation";  

const ProductActions = () => {
  const {push} =useRouter();
  const [qty, setQty] = useState(1);

  const increment = () => setQty(qty + 1);
  const decrement = () => setQty(qty > 1 ? qty - 1 : qty);

  const checkout = () => {
   
  }
  return (
    <div className="flex gap-5">
      <div className="border border-gray-300 inline-flex w-fit min-w-20.5">
        <div className="aspect-square flex text-xl font-medium border-r border-gray-300 justify-center items-center align-items-center ">
          <span>{qty}</span>
        </div>
        <div className="flex flex-col">
          <button onClick={increment} className="border-b border-gray-300 cursor-pointer h-1/2 aspect-square flex justify-center items-center">     
            <FiArrowUp />
          </button>
          <button onClick={decrement} disabled={qty <= 1} className="cursor-pointer h-1/2 aspect-square flex justify-center items-center">
            <FiArrowDown />
          </button>
        </div>
      </div>
      
      <Button className="px-15 w-full">
        <FiShoppingBag size={20} />
        Add to Cart
      </Button>
       <Button variant="dark"className="p-15 w-full" onClick={() => push('/checkout')}>
        Checkout Now
        <FiArrowRight size={20} />
        
      </Button>
    </div>
  );
};

export default ProductActions;