"use client";
import Modal from "@/app/(dashboard)/components/ui/modal";
import Button from "@/app/(landing)/components/UI/button";
import ImageUploadPreview from "@/app/(dashboard)/components/ui/image-upload-preview";
import { useEffect, useState } from "react";

import { Bank } from "@/app/types";
import { createBank, updateBank } from "@/app/services/bank-services";
import { toast } from "react-toastify";

type TBanksInfoModalProps = {
    isOpen: boolean;
    onClose: () => void;
    bank: Bank | null;
    onSuccess: () => Promise<void>;
};



const BanksInfoModal = ({ isOpen, onClose, bank, onSuccess }: TBanksInfoModalProps) => {
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState<Partial<Bank>>({
        
        accountName: "",
        accountNumber: "",
        bankName: "",
    });

    const isEditMode = !!bank;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try{
            if(isEditMode) {
                await updateBank(bank._id, formData);
            }else{
                await createBank(formData);
            }
             setFormData({
            accountName: "",
            accountNumber: "",
            bankName: "",
        });
       
        onSuccess?.();
        onClose();

        toast.success(isEditMode ? "Bank Info updated successfully" : "Bank Info created successfully")
        }catch(error){
            console.error(isEditMode ? "failed to update bank info" : "failed to create bank info", error);
            toast.error(isEditMode ? "failed to update bank info" : "failed to create bank info")
        } finally{
            setIsSubmitting(false);
        }

    }   

    useEffect(() => {
    if(isEditMode && isOpen){
        setFormData({
            accountName: bank.accountName,
            accountNumber: bank.accountNumber,
            bankName: bank.bankName,
        });
        
    }else if (isOpen) {
        setFormData({
            accountName: "",
            accountNumber: "",
            bankName: "",
        });
       
    
    }
    },[bank, isOpen]);


    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Add New Bank Account"
        >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-sm">
                <div className="flex gap-7">
                    <div className="flex flex-col gap-4 w-full">
                        <div className="input-group-admin">
                            <label htmlFor="bankName"> Bank Info Name</label>
                            <input type="text" id="bankName" name="bankName" placeholder="e. g BCA,BRI,BNI" 
                            value={formData.bankName} onChange={handleChange}/>
                        </div>
                        <div className="input-group-admin">
                            
                            <label htmlFor="accountNumber">Account Number</label>
                            <input type="text" id="accountNumber" name="accountNumber" placeholder="1234567890"
                            value={formData.accountNumber} onChange={handleChange} />
                        </div>
                        <div className="input-group-admin">
                            
                            <label htmlFor="accountName">Account Name</label>
                            <input type="text" id="accountName" name="accountName" placeholder="Holder Name as registered on the account" 
                            value={formData.accountName} onChange={handleChange}/>
                        </div>
                       
                    </div>
                    
                </div>
               
               <Button size="small" className=" mt-2 rounded-lg ml-auto"disabled={isSubmitting} type="submit" onClick={handleSubmit}>
                    {isEditMode ? "Update Bank Info" : "Create Bank Info"}
                </Button>
            </form> 
            
        </Modal>
    );
};

export default BanksInfoModal;