"use client";

import { FiTrash2,FiArrowRight, FiCreditCard } from "react-icons/fi";
import Button from "../UI/button";
import PriceFormatted from "@/app/utils/PriceFormatted";
import{cart} from "../UI/Cart-popup";
import Image from "next/image";
import CardWithHeader from "../UI/card-with-header";
import {useRouter} from "next/navigation";


const cartItems = () => {
    const {push} =useRouter();  
    const totalPrice = cart.reduce((total, item) => total + item.Price * item.qty, 0);
      const processPayment = () => {

      }
    return (
        <CardWithHeader title="Cart Items">
            <div className="overflow-auto max-h-[300px]"> 
                { cart.map((item, index) => (
                    <div  key={index} className ="border-b border-gray-200 p-5 flex gap-3 ">
                        <div className = "bg-primary-light aspect-square w-16 flex justify-center items-center">
                            <Image src={`/images/products/${item.ImageUrl}`} 
                                    alt={item.Name} width={63} height={63}
                                    className="aspect-square object-contain" />
                        </div>
                        <div className="self-center">
                            <div className="font-medium text-sm">{item.Name}</div>
                            <div className="flex gap-3 font-medium text-xs">
                                <div className ="">{item.qty}x</div>
                                <div className="text-primary font-medium">{PriceFormatted(item.Price)}</div>
                            </div>   
                        </div>
                            <Button size="small" variant="ghost" className ="w-7 h-7 p-0! self-center ml-auto">
                                <FiTrash2 />
                            </Button>
                    </div>
                 ))}
            </div>
             <div className ="border-t border-gray-200 p-4">
                <div className ="flex justify-between font-semibold ">
                    <div className="text-sm">Total</div>
                    <div className="text-primary text-xs">{PriceFormatted(totalPrice)}</div>
                </div>
                <Button variant="dark" size="small" className="mt-4 w-full" onClick={() => push('/payment')}   >
                    <FiCreditCard />  Process Payment 
                </Button>
            </div>
        </CardWithHeader>
            
                
    );
}

export default cartItems;   