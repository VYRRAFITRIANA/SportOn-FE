"use client";
import Modal from "@/app/(dashboard)/components/ui/modal";
import Button from "@/app/(landing)/components/UI/button";
import Image from "next/image";
import ImageUploadPreview from "@/app/(dashboard)/components/ui/image-upload-preview";
import { useState } from "react";
import PriceFormatted from "@/app/utils/PriceFormatted";
import { FiX, FiCheck } from "react-icons/fi";
import { Transaction } from "@/app/types"
import { getImageUrl } from "@/app/lib/api";


type TTransactionsModalProps = {
    isOpen: boolean;
    onClose: () => void;
    transactions : Transaction | null;
    onStatusChange : (id :string , status : "paid" | "rejected" | "pending") =>Promise<void>;
};

const TransactionsModal = ({ isOpen, onClose, transactions, onStatusChange  }: TTransactionsModalProps) => {
    const [isUpdating, setIsUpdating] = useState(false);

    if(!transactions) return;

    const handleStatusUpdate = async ( status : "paid" | "rejected" | "pending") => {
        setIsUpdating(true);
        try{
            await onStatusChange(transactions._id, status);

        }catch(error){
            console.error(error);
        }finally{
            setIsUpdating(false)
        }
    }
    
   
    
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Verify Transaction"
        >
            <div className="flex gap-6 max-w-xl">
                <div className="h3">
                    <h4 className ="font-semibold text-xs"> Payment Proof </h4>
                   {
                    transactions.paymentProof ? (
                    <Image src={getImageUrl(transactions.paymentProof)} 
                    alt ="Payment Proof" width={300} 
                    height={400} 
                     />

                    ):(
                        <div className="text-center p-4">
                            <p className="text-sm">
                                No Payment Proof Uploaded 
                            </p>
                        </div>
                    )
                   }
                   
                </div>
                <div className=" text-sm ">
                    <h4 className ="font-semibold text-xs"> Order Details </h4>
                    <div className="bg-gray-100 rounded-md flex flex-col gap-2.5 p-4">
                        <div className="flex justify-between font-medium gap-10">
                            <div className="Opacity-50 "> Date </div>
                            <div className="text-right">{new Date(transactions.createdAt).toLocaleString("id-ID", {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}</div>
                        </div>
                        <div className="flex justify-between font-medium gap-10">
                            <div className="Opacity-50 "> Customer </div>
                            <div className="text-right">{transactions.customerName}</div>
                        </div>
                        <div className="flex justify-between font-medium gap-10">
                            <div className="Opacity-50 "> contact </div>
                            <div className="text-right">{transactions.customerContact}</div>
                        </div>
                         <div className="flex justify-between font-medium gap-10">
                            <div className="Opacity-50 whitespace-nowrap"> Shipping Address </div>
                            <div className="text-right">{transactions.customerAddress}</div>
                        </div>
                    </div>
                    <h4 className ="font-semibold text-xs py-2"> Items Purchased </h4>

                    <div className="space-y-3">
                        {
                            transactions.purchasedItems.map((item, index) => (
                                
                                 <div key={index}className="border border-gray-200 rounded-lg flex  gap-2.5 p-2 items-center ">
                                    <div className="bg-gray-100 rounded-md aspect-square w-8 h-8"> 
                                        <Image src={getImageUrl(item.product.imageUrl)} width={32} height={32}  alt={item.product.name}/>
                                    </div>
                                    <div className="font-medium text-xs">  {item.product.name} </div>
                                    <div className="font-medium ml-auto text-xs">   {item.qty}  units</div>
                                </div>
                            ))
                        }
                    </div>
                   
                    <div className="flex justify-between text-xs py-4">
                        <h4 className="font-semibold ">Total</h4>
                        <div className="font-bold text-primary">{PriceFormatted(transactions.totalPayment)}</div>
                    </div>
                    <div className="justify-end mt-10 flex gap-2">
                        
                            {
                                isUpdating ? (
                                    <div className="text-center">
                                        Updating ....
                                    </div>
                                ) :(<>
                                        <Button disabled={isUpdating} onClick = {() => handleStatusUpdate("rejected")} className="text-primary! bg-primary-light! rounded-md" size="small">
                                            <FiX size={20} /> 
                                            
                                             Reject
                                            
                                        </Button>

                                        <Button disabled={isUpdating} onClick = {() => handleStatusUpdate("paid")} className=" bg-green-700! text-green-100! rounded-md" size="small">
                                            <FiCheck size={20} /> 
                                             Approve
                                        </Button>
                                
                                </>)
                            }

                        
                        
                    </div>
                              
                </div>
            </div> 
            
        </Modal>
    );
};

export default TransactionsModal;