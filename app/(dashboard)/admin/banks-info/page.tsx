"use client";

import { useState, useEffect } from "react";
import Button from "@/app/(landing)/components/UI/button";
import { FiPlus } from "react-icons/fi";
import BanksInfoTable from "../../components/banks-info/banks-info-list";
import BanksInfoModal from "../../components/banks-info/banks-info-modal";
import { getAllBanks, deleteBank } from "@/app/services/bank-services";
import { toast } from "react-toastify";
import { Bank } from "@/app/types";
import DeleteConfirmationModal from "@/app/(dashboard)/components/ui/modal-delete";

const BanksInfo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [banks, setBanks] = useState<Bank[]>([]);
    const [selectedBank, setSelectedBank] = useState<Bank |null>(null);

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [bankToDeleteId, setBankToDeleteId] = useState("");

    const fetchBanks = async () => {
        try{
            const data = await getAllBanks();
            setBanks(data)


        }catch(error){
            console.error("failed to fetch bank data",error)
        }
    }


    // const handleOpenModal = () => setIsOpen(true);
  
    const handleCloseModal = () => {
        setIsModalOpen(false)
        setSelectedBank(null)
    };

    const handleEdit = (bank: Bank) => {
        setSelectedBank(bank);
        setIsModalOpen(true);
    };
    const handleDelete = (id: string) => {
        setBankToDeleteId(id);
        setIsDeleteModalOpen(true);
    };
    
     const handleDeleteConfirm = async () =>{
      if (!bankToDeleteId) return;

      try{
        await deleteBank(bankToDeleteId);

        toast.success("Bank Deleted Succesfully")

        setBankToDeleteId("")
        setIsDeleteModalOpen(false)
        await fetchBanks();

      } catch (error) {
        console.error("Failed to delete bank info",error);
        toast.error("Failed to delete bank info")
      }

    }
    useEffect(() => {
       fetchBanks();
    }, []);

    return (
        <div>
            {/* HEADER */}
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-2xl font-bold">
                        Banks Information
                    </h1>
                    <p className="opacity-50">
                        Manage destination accounts for customer transfers.
                    </p>
                </div>

                <Button
                    className="rounded-lg flex items-center gap-2"
                    onClick={() => setIsModalOpen(true)}
                >
                    <FiPlus size={20} />
                    Add Bank Account
                </Button> 
            </div>

            
            <BanksInfoTable banks ={banks} onEdit ={handleEdit} onDelete = {handleDelete} />
            <BanksInfoModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                bank ={selectedBank}
                onSuccess={fetchBanks}
            />
            <DeleteConfirmationModal 
                            isOpen={isDeleteModalOpen}
                            onClose={() => setIsDeleteModalOpen(false)}
                            onConfirm={handleDeleteConfirm}
                        />
        </div>
    );
};

export default BanksInfo;