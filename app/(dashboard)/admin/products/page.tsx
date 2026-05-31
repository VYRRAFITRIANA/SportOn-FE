"use client";

import { useState } from "react";
import Button from "@/app/(landing)/components/UI/button";
import { FiPlus } from "react-icons/fi";
import ProductTable from "../../components/products/product-table";
import ProductModal from "../../components/products/product-modal";

const ProductManagement = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => setIsOpen(true);

    const handleCloseModal = () => setIsOpen(false);

    return (
        <div>
            {/* HEADER */}
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-2xl font-bold">
                        Product Management
                    </h1>
                    <p className="opacity-50">
                        Manage your inventory, price and stock.
                    </p>
                </div>

                <Button
                    className="rounded-lg flex items-center gap-2"
                    onClick={handleOpenModal}
                >
                    <FiPlus size={20} />
                    Add Product
                </Button>
            </div>

            {/* TABLE */}
            <ProductTable />

            {/* MODAL */}
            <ProductModal
                isOpen={isOpen}
                onClose={handleCloseModal}
            />
        </div>
    );
};

export default ProductManagement;