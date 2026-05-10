

import Image from "next/image";
import { FiTrash2,FiArrowRight } from "react-icons/fi";
import Button from "./button"

import PriceFormatted from "@/app/utils/PriceFormatted";
import { useRouter } from "next/navigation";

export const cart = [

    {
        Name:"SportOn Hyperfast Shoes",
        Category:"Running",
        Price: 329000,
        qty : 1,
        ImageUrl : "product-3.png"
    },{
        Name:"SportOn Rockets Tennis",
        Category:"Tennis",
        qty : 5,
        Price: 999000,
        ImageUrl : "product-2.png"
    },{
        Name:"SportOn SlowLivin",
        Category:"Running",
        Price: 199000,
        qty : 5,
        ImageUrl : "product-1.png"
    }, 

];

const CartPopup = () => {
    const totalPrice = cart.reduce((total, item) => total + item.Price * item.qty, 0);

    const {push} = useRouter();

    const HandleCheckout =() => {
        push('/checkout');
    }

    return (
        <div className = "shadow-black/10 absolute top-14 right-0 w-[320px] bg-white border border-gray-200 shadow-lg rounded-xl">  
            <div className=" p-4 border-b border-gray-200 font-bold text-center">
                Shopping Cart
            </div>

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
            <div className ="border-t border-gray-200 p-4">
                <div className ="flex justify-between font-semibold ">
                    <div className="text-sm">Total</div>
                    <div className="text-primary text-xs">{PriceFormatted(totalPrice)}</div>
                </div>
                <Button variant="dark" size="small" className="mt-4 w-full" onClick={HandleCheckout}>
                    Checkout Now <FiArrowRight />
                </Button>
            </div>
            
            
            
                
        </div>
    );
}
export default CartPopup;