"use client";
import Modal from "@/app/(dashboard)/components/ui/modal";
import Button from "@/app/(landing)/components/UI/button";
import Image from "next/image";
import ImageUploadPreview from "@/app/(dashboard)/components/ui/image-upload-preview";
import { useState } from "react";
import PriceFormatted from "@/app/utils/PriceFormatted";
import { FiX, FiCheck } from "react-icons/fi";

type TTransactionsModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const TransactionsModal = ({ isOpen, onClose }: TTransactionsModalProps) => {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Verify Transaction"
        >
            <div className="flex gap-6 max-w-xl">
                <div className="h3">
                    <h4 className ="font-semibold text-xs"> Payment Proof </h4>
                    <Image src="/images/Rectangle 29 (1).png" alt ="Payment Proof" width={300} height={400} className=" " />
                </div>
                <div className=" text-sm ">
                    <h4 className ="font-semibold text-xs"> Order Details </h4>
                    <div className="bg-gray-100 rounded-md flex flex-col gap-2.5 p-4">
                        <div className="flex justify-between font-medium gap-10">
                            <div className="Opacity-50 "> Date </div>
                            <div className="text-right">23/02/2026 19:32</div>
                        </div>
                        <div className="flex justify-between font-medium gap-10">
                            <div className="Opacity-50 "> Customer </div>
                            <div className="text-right">John Doe</div>
                        </div>
                        <div className="flex justify-between font-medium gap-10">
                            <div className="Opacity-50 "> contact </div>
                            <div className="text-right">08231223123</div>
                        </div>
                         <div className="flex justify-between font-medium gap-10">
                            <div className="Opacity-50 whitespace-nowrap"> Shipping Address </div>
                            <div className="text-right">Kaliboto, Kota Malang, Jawa Timur, indonesia</div>
                        </div>
                    </div>
                    <h4 className ="font-semibold text-xs py-2"> Items Purchased </h4>
                    <div className="border border-gray-200 rounded-lg flex  gap-2.5 p-2 items-center ">
                        <div className="bg-gray-100 rounded-md aspect-square w-8 h-8"> 
                            <Image src="/images/products/product-1.png" width={32} height={32}  alt="Product Image"/>
                        </div>
                        <div className="font-medium text-xs"> SportOn HyperFast Shoes </div>
                        <div className="font-medium ml-auto text-xs"> 3 units</div>
                    </div>
                    <div className="flex justify-between text-xs py-4">
                        <h4 className="font-semibold ">Total</h4>
                        <div className="font-bold text-primary">{PriceFormatted(1000000)}</div>
                    </div>
                    <div className="justify-end mt-10 flex gap-2">
                        <Button className="text-primary! bg-primary-light! rounded-md" size="small">
                            <FiX size={20} /> Reject
                        </Button>
                        <Button className=" bg-green-700! text-green-100! rounded-md" size="small">
                            <FiCheck size={20} /> Approve
                        </Button>
                    </div>
                              
                </div>
            </div> 
            
        </Modal>
    );
};

export default TransactionsModal;