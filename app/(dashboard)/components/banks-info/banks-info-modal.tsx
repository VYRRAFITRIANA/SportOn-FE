"use client";
import Modal from "@/app/(dashboard)/components/ui/modal";
import Button from "@/app/(landing)/components/UI/button";
import ImageUploadPreview from "@/app/(dashboard)/components/ui/image-upload-preview";
import { useState } from "react";

type TBanksInfoModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const BanksInfoModal = ({ isOpen, onClose }: TBanksInfoModalProps) => {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Add New Bank Account"
        >
            <div className="flex flex-col gap-6 w-sm">
                <div className="flex gap-7">
                    <div className="flex flex-col gap-4 w-full">
                        <div className="input-group-admin">
                            <label htmlFor="bankName"> Bank Info Name</label>
                            <input type="text" id="bankName" name="bankName" placeholder="e. g BCA,BRI,BNI" />
                        </div>
                        <div className="input-group-admin">
                            
                            <label htmlFor="accountNumber">Account Number</label>
                            <input type="text" id="accountNumber" name="accountNumber" placeholder="1234567890" />
                        </div>
                        <div className="input-group-admin">
                            
                            <label htmlFor="accountName">Account Name</label>
                            <input type="text" id="accountName" name="accountName" placeholder="Holder Name as registered on the account" />
                        </div>
                       
                    </div>
                    
                </div>
               
               <Button size="small" className=" mt-2 rounded-lg ml-auto" onClick={onClose}>
                    Add Bank Account
                </Button>
            </div> 
            
        </Modal>
    );
};

export default BanksInfoModal;