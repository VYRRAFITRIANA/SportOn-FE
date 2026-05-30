"use client";

import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import ShoppingCart from "../UI/Cart-popup";
import { useState } from "react";
import { useCartStore } from "@/app/hooks/use-cart";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { items }= useCartStore();

  const totalItems = items.reduce(
    (total, item) => total + item.qty,
    0
  );

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] bg-white/10 backdrop-blur-md">
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
          <Link href="#">Home</Link>
          <Link href="/category">Category</Link>
          <Link href="/products">Explore Products</Link>
        </nav>

        <div className="flex gap-6 items-center">
          <FiSearch size={24} className="cursor-pointer" />

          <div className="relative">
            <button
              className="relative"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <FiShoppingBag
                size={24}
                className="cursor-pointer"
              />

              {totalItems > 0 && (
                <div className="bg-primary rounded-full w-4 h-4 absolute -top-1 -right-1 text-[10px] text-white flex items-center justify-center">
                  {totalItems}
                </div>
              )}
            </button>

           {isCartOpen && (
              <ShoppingCart onClose={() => setIsCartOpen(false)}/>
           )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;