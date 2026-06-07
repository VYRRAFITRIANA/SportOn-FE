"use client";

import { useState, useEffect } from "react";
import Button from "@/app/(landing)/components/UI/button";
import { FiPlus } from "react-icons/fi";
import ProductTable from "../../components/products/product-table";
import ProductModal from "../../components/products/product-modal";
import { getAllProducts } from "@/app/services/product-services"
import { Product } from "@/app/types"
import { deleteProduct } from "@/app/services/product-services";
import { toast } from "react-toastify";
import DeleteModal from "../../components/ui/modal-delete";


const ProductManagement = () => {
  
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [products,setProducts] = useState <Product[]>([]);
    const [isDeleteModalOpen,setIsDeleteModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [productToDeleteId,setProductToDeleteId] = useState("");

    const fetchProducts = async () =>{
        try{
            const data = await getAllProducts();

            if(data) {
                setProducts(data)
            } 
        }catch(error){
            console.error("Failed to fetch products",error)
         }
    }
    const handleEdit = (product :Product) =>{
        setSelectedProduct(product);
        setIsModalOpen(true);

    }

    const handleDelete = (id: string) => {
        setProductToDeleteId(id);
        setIsDeleteModalOpen(true);
    }   
    const handleDeleteConfirm = async () => { 
        if(!productToDeleteId) return;
        try{
            await deleteProduct(productToDeleteId);
            fetchProducts();
            toast.success("Product deleted successfully");
            setProductToDeleteId("")
        }catch(error){
            console.error("Failed to delete product",error);
            toast.error("Failed to delete product");
        }  
    
    }

    useEffect(() => {
        fetchProducts();

    },[]);

    const handleOpenModal = () => {
        setSelectedProduct(null);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
        setIsModalOpen(false);
    };
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
            <ProductTable  products={products} onEdit={handleEdit} onDelete={handleDelete}/>

            {/* MODAL */}
            <ProductModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSuccess={fetchProducts}
                product={selectedProduct}
            />
            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleDeleteConfirm}
            />
        </div>
    );
};

export default ProductManagement;