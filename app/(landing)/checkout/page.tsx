

"use client";


import { useState } from "react";
import CheckoutForm from "../components/checkout/OrderInformation";
import CartItems from "../components/checkout/cartItems";
import { CustomerInfo, useCartStore } from "@/app/hooks/use-cart";
import { useRouter } from "next/navigation";

const CheckOut = () => {
    const { push } = useRouter();
    const { setCustomerInfo, customerInfo } = useCartStore();
    const [formData, setFormData]= useState<CustomerInfo>({
        customerName : "",
        customerContact: null,
        customerAddress:"",
    });

    const handlePayment = () => {
        if (!formData.customerName || !formData.customerContact || !formData.customerAddress) {
            alert("Please fill in all fields");
            return;
        }
        setCustomerInfo(formData);
        push("/payment");
    };
    return (
        <main className="bg-gray-100 min-h-[80vh] pb-20 pt-14 ">
            <div className="max-w-5xl mx-auto py-20">
                <h1 className=" text-3xl font-bold text-center">Checkout</h1>
            </div>
            <div className=" grid grid-cols-2 gap-14 px-30">
                    <CheckoutForm  formData={formData} setFormData={setFormData}/>
                    <CartItems handlePayment = {handlePayment}/>
                    
            </div>


            
        </main>
    );
}

export default CheckOut;