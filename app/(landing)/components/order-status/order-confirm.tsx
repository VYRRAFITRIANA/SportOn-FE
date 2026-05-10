


import Image from "next/image";
import Button from "../UI/button"
import { FiRefreshCw } from "react-icons/fi";

const OrderConfirmed = () => { 
   
    return (
        <div className="bg-white w-120 p-12 flex flex-col justify-center items-center mx-auto">
            <Image src="/images/order-status/icon-order-confirmed.svg"alt="Order Confirmed" width={75} height ={75} 
             className="mb-4"/>
            <h2 className="text-2xl font-semibold mb-8">Order Confirmed !!</h2>
            <p className="text-center">We have received your payment,
                and your order is currently processed by our staff, just wait until your favorite sportswear arrive in your home. We will 
                contact you in Whatsapp for further shipping updates.
            </p>
           
        </div>
    );
}

export default OrderConfirmed;