"use client";

import { useState } from "react";
import Button from "@/app/(landing)/components/UI/button";
import { FiPlus } from "react-icons/fi";

import TransactionsTable from "../../components/transactions/transaction-table";
import TransactionsModal from "../../components/transactions/transactions-modal";


const TransactionsManagement = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => setIsOpen(true);

    const handleCloseModal = () => setIsOpen(false);

    const handleViewDetails = () => setIsOpen(true);

    return (
        <div>
            {/* HEADER */}
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-2xl font-bold">
                        Transactions
                    </h1>
                    <p className="opacity-50">
                        Verify incoming payments and manage orders.

                    </p>
                </div>
            </div>

           
            <TransactionsTable onViewDetails={handleViewDetails} />
            <TransactionsModal isOpen={isOpen} onClose={handleCloseModal} />

           
            
        </div>
    );
};

export default TransactionsManagement;