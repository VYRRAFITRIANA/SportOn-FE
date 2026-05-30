"use client";

import Link from "next/link";
import Image from "next/image";
import {FiPlus} from "react-icons/fi";
import Button from "../UI/button";
import PriceFormatted from "@/app/utils/PriceFormatted";
import {Product} from "@/app/types";
import { getImageUrl } from "@/app/lib/api";
import { useCartStore } from "@/app/hooks/use-cart";

// const productsList = [

//     {
//         name:"SportOn Hyperfast Shoes",
//         Category:"Running",
//         Price: 329000,
//         ImageUrl : "product-3.png"
//     },{
//         name:"SportOn Rockets Tennis",
//         Category:"Tennis",
//         Price: 999000,
//         ImageUrl : "product-2.png"
//     },{
//         name:"SportOn SlowLivin",
//         Category:"Running",
//         Price: 199000,
//         ImageUrl : "product-1.png"
//     },{
//         name:"SportOn HyperSoccer v2",
//         Category:"Football",
//         Price: 299000,
//         ImageUrl : "product-4.png"
//     },{
//         name:"SportOn HyperSoccer v2",
//         Category:"Football",
//         Price: 299000,
//         ImageUrl : "product-4.png"

//     },{
//         name:"SportOn SlowLivin",
//         Category:"Running",
//         Price: 199000,
//         ImageUrl : "product-5.png"

//     },{
//         name:"SportOn Hyperfast Shoes",
//         Category:"Running",
//         Price: 329000,
//         ImageUrl : "product-8.png"
//     },{
//         name:"SportOn Rockets Tennis",
//         Category:"Tennis",
//         Price: 999000,
//         ImageUrl : "product-7.png"
//     }


// ];

type TProductsProps ={
    products : Product[];

}

const products = ({products}:TProductsProps) => {
    const { addItem } = useCartStore();

    const HandleAddCart = ( e: React.MouseEvent, product: Product) => {
        e.preventDefault();
        e.stopPropagation();

        addItem(product);
    };
  return (   
    <section className="container mx-auto mt-32 mb-27 px-10" id="products">
        <h2 className="font-bold italic text-4xl text-center mb-11">
            <span className="text-primary">OUR</span>
            <span className="text-dark"> PRODUCTS</span>   
        </h2>
        <div className="grid grid-cols-4 gap-5 ">
            {products.map((product) => (
                <Link href={`/product/${product._id}`}
                key={product._id} 
                className="p-1.5 bg-white hover:drop-shadow-xl duration-300">  
                
                <div className="bg-primary-light aspect-square w-full flex justify-center items-center relative">
                     
                     <Image src={getImageUrl(product.imageUrl)} 
                        alt={product.name}
                        width={300} height={300} 
                        className="aspect-square object-contain"/>

                     <Button className="w-10 h-10 p-2! absolute right-3 top-3 " onClick={(e) => HandleAddCart(e, product)}>
                        <FiPlus size={24} />
                    </Button>
                </div>
                <h3 className="font-medium text-lg mb-1.5 mt-4">{product.name}</h3>
                <div className="flex justify-between mb-8">
                    <div className="text-gray-500">{product.category.name}</div>
                    <div className="font-medium text-primary">
                    {PriceFormatted(product.price)}</div>
                </div>
          </Link>
        ))}
      </div>
    </section>
  );
};


export default products;
