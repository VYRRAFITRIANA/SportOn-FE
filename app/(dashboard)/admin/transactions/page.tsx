"use client";

import { useState, useEffect } from "react";
import Button from "@/app/(landing)/components/UI/button";
import { FiPlus } from "react-icons/fi";

import TransactionsTable from "../../components/transactions/transaction-table";
import TransactionsModal from "../../components/transactions/transactions-modal";
import { Transaction } from "@/app/types";
import { getAllTransactions } from "@/app/services/transaction-services";
import { updateTransactionStatus } from "@/app/services/transaction-services";
import { toast } from "react-toastify";



const TransactionsManagement = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTransactionId, setSelectedTransactionId] = useState<Transaction | null>(null);
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const fetchTransactions = async () => {
        try {
            const data = await getAllTransactions();
            setTransactions(data);
        }
        catch (error) {
            console.error("Failed to fetch transactions", error);
        }
    }

    const handleOpenModal = () => setIsModalOpen(true);

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedTransactionId(null);
    };


    const handleViewDetails = (transaction: Transaction) => {
        setSelectedTransactionId(transaction);
        setIsModalOpen(true);
    };
    

    const handleStatusChange = async (id: string, status: "paid" | "pending" | "rejected") => {
        try{
            const formData = new FormData();
            formData.append("status", status);
            await updateTransactionStatus(id, formData);
            
            toast.success("Transaction Status Updated")
            
            await fetchTransactions();
        }catch(error){
            console.error("Failed to Update transaction Status", error)
            toast.error("Failed to Update transaction Status")
        }
    };

    useEffect(() => {
    fetchTransactions()
}, []);
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

           
            <TransactionsTable transactions={transactions} onViewDetails={handleViewDetails} />
            {/* <TransactionsModal transactions = {selectedTransactionId} onStatusChange = {handleStatusChange}isOpen={isModalOpen} onClose={handleCloseModal} /> */}

           
            
        </div>
    );
};

export default TransactionsManagement;