"use client";
import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import ShoppingCart from "../UI/Cart-popup";
import {useState} from "react";
const Header = () => {
      const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <header>
      <div className="flex justify-between gap-10 container mx-auto px-10 py-7">
        <Link href="/">
        <Image 
          src="/images/logo (1).svg" 
          alt="logo"
          width={100}
          height={40}
        />
      </Link>
        <nav className="flex gap-8 font-medium">
          <Link href="#" className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-1/2 after:h-[2px] after:bg-primary">Home</Link>
          <Link href="/category">Category</Link> 
          <Link href="/products">Explore Products</Link>    
        </nav>

        <div className="flex gap-6 items-center"> 
          <FiSearch size={24} className="cursor-pointer" />

          <button className="relative" onClick={() => setIsCartOpen(!isCartOpen)}>
            <FiShoppingBag size={24} className="cursor-pointer" />
            <div className="bg-primary rounded-full w-4 h-4 absolute -top-1 -right-1 text-[10px] text-white flex items-center justify-center">
              3
            </div>
          </button>
            {isCartOpen && <ShoppingCart />}
        </div>
      
      </div>
    </header>
  );
};

export default Header;