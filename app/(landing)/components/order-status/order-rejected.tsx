


import Image from "next/image";
import Button from "../UI/button"
import { FiAlertCircle } from "react-icons/fi";

const OrderRejected = () => { 
   
    return (
        <div className="bg-white w-120 p-12 flex flex-col justify-center items-center mx-auto">
            <div className="w-20 h-20 bg-primary-light rounded-full mx-auto p-3 justify-center items-center text-primary mb-8">
                <FiAlertCircle size={52}/>
            </div>
            <h2 className="text-2xl font-semibold mb-8">Order Rejected !!</h2>
            <p className="text-center">I'm Sorry your order is rejected because your payment proof is not valid
            </p>
           
        </div>
    );
}

export default OrderRejected;