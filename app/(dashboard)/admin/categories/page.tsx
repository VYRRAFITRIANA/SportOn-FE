"use client";

import { useState } from "react";
import Button from "@/app/(landing)/components/UI/button";
import { FiPlus } from "react-icons/fi";
import CategoryTable from "../../components/categories/categories-table";
import CatergoryModal from "../../components/categories/categories-modal";

const CategoryManagement = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => setIsOpen(true);
  
    const handleCloseModal = () => setIsOpen(false);

    return (
        <div>
            {/* HEADER */}
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-2xl font-bold">
                        Category Management
                    </h1>
                    <p className="opacity-50">
                        Organize your products into categories.

                    </p>
                </div>

                <Button
                    className="rounded-lg flex items-center gap-2"
                    onClick={handleOpenModal}
                >
                    <FiPlus size={20} />
                    Add Category
                </Button>
            </div>

            {/* TABLE */}
            <CategoryTable />

            {/* MODAL */}
            <CatergoryModal
                isOpen={isOpen}
                onClose={handleCloseModal}
            />
        </div>
    );
};

export default CategoryManagement;