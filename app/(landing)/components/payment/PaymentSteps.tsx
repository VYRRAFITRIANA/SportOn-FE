"use client";
import CardWithHeader from "../UI/card-with-header";
import FileUpload from "../UI/file-Upload";
import PriceFormatted from "@/app/utils/PriceFormatted";
import Button from "../UI/button"
import{cart} from "../UI/Cart-popup";
import{FiCheckCircle} from "react-icons/fi";
import {useRouter} from "next/navigation";

const PaymentSteps = () => {
const {push} =useRouter(); 

const uploadAndConfirm = () => {
    push('/orderStatus/32652');
}
    return (
        <CardWithHeader title="Payment Steps">

             <div className="p-5">
                <ol className="list-decimal text-xs pl-2 flex flex-col gap-4 mb-6">
                    <li>Transfer the total amount of<b>Rp. 1.035.000</b>  to your preferred bank account listed under 'Payment Options' (BCA, Mandiri, or BTPN).Transfer the total amount of Rp. 1.035.000 to your preferred bank account listed under 'Payment Options' (BCA, BNI, or BRI).</li>
                    <li>After completing the transfer, <b>keep the payment receipt</b> or a screenshot of the transfer confirmation. This will be needed for the next step.</li>
                    <li>Upload the payment receipt/screenshot using the <b> 'Upload Receipt & Confirm'</b> button below to validate your transaction.</li>
                </ol>
                <FileUpload />
            </div> 
            <div className ="border-t border-gray-200 p-4">
                <div className ="flex justify-between font-semibold ">
                    <div className="text-sm">Total</div>
                                <div className="text-primary text-xs">{PriceFormatted(450000)}</div>
                            </div>
                            <Button variant="dark" size="small" className="mt-4 w-full" onClick={uploadAndConfirm}>
                                <FiCheckCircle /> Upload Receipt & Confirm
                            </Button>
                        </div>
        
        </CardWithHeader>
    );
}

export default PaymentSteps;