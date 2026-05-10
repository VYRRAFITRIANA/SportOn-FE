"use client";

import OrderConfirmed from "../../components/order-status/order-confirm";
import OrderSummited from "../../components/order-status/order-summited";
import {useState} from "react";
const OrderStatus = () => {
    const [isConfirmed,setIsConfirmed] = useState(false);
    return (
        <main className=" bg-gray-100 min-h-[80vh]">
            <div className="max-w-5xl mx-auto py-15">
                <h1 className=" text-4xl font-bold text-center"> Order Status </h1>
            </div>
            <div className="pb-20">
                {isConfirmed ? <OrderConfirmed /> : <OrderSummited />}
           
            </div>
            
        </main>
    );
}

export default OrderStatus;