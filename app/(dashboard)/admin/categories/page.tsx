"use client";

import { useEffect, useState } from "react";
import Button from "@/app/(landing)/components/UI/button";
import { FiPlus } from "react-icons/fi";
import CategoryTable from "../../components/categories/categories-table";
import CatergoryModal from "../../components/categories/categories-modal";
import { Category } from "@/app/types";
import { deleteCategory, getAllCategories } from "@/app/services/category-service";
import { toast } from "react-toastify";
import DeleteConfirmationModal from "@/app/(dashboard)/components/ui/modal-delete";


const CategoryManagement = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);


const [categories, setCategories] = useState<Category[]>([]);State([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [categoryToDeleteId, setCategoryToDeleteId] = useState("");


    const fetchCategories = async () => {
        try {
        const data = await getAllCategories(); 
        setCategories(data);  
        } catch (error) {
            console.error("Failed to fetch categories:", error);
        } 
    }


    const handleEdit = (category: Category) => {
        setSelectedCategory(category);
        setIsModalOpen(true);
    }

    const handleDelete = (id: string) => {
        setCategoryToDeleteId(id);
        setIsDeleteModalOpen(true);
    };


   const handleDeleteConfirm = async () => { 
       if(!categoryToDeleteId) return;
        try{
            await deleteCategory(categoryToDeleteId);
            fetchCategories();
            toast.success("Category deleted successfully");
            setIsDeleteModalOpen(false);
            setCategoryToDeleteId("");
        } catch(error){
            console.error("Failed to delete category",error);
            toast.error("Failed to delete category");
        }  
       
    }



    const handleOpenModal = () => setIsModalOpen(true);
  
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCategory(null);
    };

    useEffect(() => {
        fetchCategories();
    },[]);

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
            <CategoryTable categories={categories} 
            onEdit={handleEdit} 
            onDelete={handleDelete} />

            {/* MODAL */}
            <CatergoryModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                category ={selectedCategory}
                onSuccess={fetchCategories}
            />
            <DeleteConfirmationModal 
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleDeleteConfirm}
            />
        </div>
    );
};

export default CategoryManagement;