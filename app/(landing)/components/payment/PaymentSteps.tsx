"use client";

import { useState } from "react";
import CardWithHeader from "../UI/card-with-header";
import FileUpload from "../UI/file-Upload";
import PriceFormatted from "@/app/utils/PriceFormatted";
import Button from "../UI/button"
// import{cart} from "../UI/Cart-popup";
import{FiCheckCircle} from "react-icons/fi";
import {useRouter} from "next/navigation";
import { useCartStore } from "@/app/hooks/use-cart";
import { transactionCheckout } from "@/app/services/transaction-services";

const PaymentSteps = () => {
const {push} =useRouter(); 
const {items, customerInfo, reset } = useCartStore();
const [file,setFile] = useState<File | null>();

const uploadAndConfirm = () => {
    push('/orderStatus/32652');
}

const totalPrice = items.reduce((total, item) => total + item.price * item.qty, 0);
      const processPayment = () => {

      }

const HandleConfirmPayment = async () => {
    if (!file) {
        alert("Please Upload Your Payment Recipict");
        return;
    }
    if (!customerInfo){
        alert("Customer Information is Missing, Please Return to Checkout ");
        push("/checkout");
        return;
        
    }
    try {
        const formData = new FormData();
        formData.append("customerName",customerInfo.customerName);
        formData.append("customerContact",customerInfo.customerContact!.toString());
        formData.append("customerAddress",customerInfo.customerAddress);
        formData.append("image", file);
        formData.append("purchasedItems",
             JSON.stringify(items.map((item) => ({productId: item._id,qty: item.qty,})))
        );
        formData.append("totalPayment",totalPrice!.toString()
        );

        const res = await transactionCheckout(formData);
        console.log("Transaction Respone", res)

        alert("create Transaction is successfully !");
        reset();

        push(`/OrderStatus/${res._id}`);

    } catch(error){
        console.log(error);
    }
}
    return (
        <CardWithHeader title="Payment Steps">

             <div className="p-5">
                <ol className="list-decimal text-xs pl-2 flex flex-col gap-4 mb-6">
                    <li>Transfer the total amount of<b>Rp.{PriceFormatted(totalPrice)}</b>  to your preferred bank account listed under 'Payment Options' (BCA, Mandiri, or BTPN).Transfer the total amount of Rp. 1.035.000 to your preferred bank account listed under 'Payment Options' (BCA, BNI, or BRI).</li>
                    <li>After completing the transfer, <b>keep the payment receipt</b> or a screenshot of the transfer confirmation. This will be needed for the next step.</li>
                    <li>Upload the payment receipt/screenshot using the <b>'Upload Receipt & Confirm'</b> button below to validate your transaction.{JSON.stringify(file)}</li>
                </ol>
                <FileUpload onFileSelected={setFile}/>
            </div> 
            <div className ="border-t border-gray-200 p-4">
                <div className ="flex justify-between font-semibold ">
                    <div className="text-sm">Total</div>
                                <div className="text-primary text-xs">{PriceFormatted(totalPrice)}</div>
                            </div>
                            <Button variant="dark" size="small" className="mt-4 w-full" onClick={HandleConfirmPayment}>
                                <FiCheckCircle /> Upload Receipt & Confirm
                            </Button>
                        </div>
        
        </CardWithHeader>
    );
}

export default PaymentSteps;