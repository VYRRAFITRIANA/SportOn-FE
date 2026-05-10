"use client";

import Image from "next/image";
import Button from "../UI/button"
import { FiRefreshCw } from "react-icons/fi";

const OrderSummitted = () => { 
    const reloadStatus = () => {
        window.location.reload();
    };

    return (
        <div className="bg-white w-120 p-12 flex flex-col justify-center items-center mx-auto">
            <Image src="/images/order-status/icon-order-submitted.svg"alt="Order Submitted" width={75} height ={75} 
             className="mb-4"/>
            <h2 className="text-2xl font-semibold mb-8">Order Submitted !!</h2>
            <p className="text-center mb-10">Your Order is recorded in our system, 
                we are still confirming the payment status, please wait 
                and your order status will be updated in less than 12 hours.
            </p>
            <Button variant="dark" className="w-full" onClick={reloadStatus}>
                <FiRefreshCw /> Refresh Order Status
            </Button>
        </div>
    );
}

export default OrderSummitted;