"use client";

import { useState } from "react";
import Button from "@/app/(landing)/components/UI/button";
import { FiPlus } from "react-icons/fi";
import BanksInfoTable from "../../components/banks-info/banks-info-list";
import BanksInfoModal from "../../components/banks-info/banks-info-modal";

const BanksInfo = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => setIsOpen(true);
  
    const handleCloseModal = () => setIsOpen(false);

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
                    onClick={handleOpenModal}
                >
                    <FiPlus size={20} />
                    Add Bank Account
                </Button> 
            </div>

            
            <BanksInfoTable />
            <BanksInfoModal
                isOpen={isOpen}
                onClose={handleCloseModal}
            />
        </div>
    );
};

export default BanksInfo;