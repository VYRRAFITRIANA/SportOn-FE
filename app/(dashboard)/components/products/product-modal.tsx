"use client";
import Modal from "@/app/(dashboard)/components/ui/modal";
import Button from "@/app/(landing)/components/UI/button";
import ImageUploadPreview from "@/app/(dashboard)/components/ui/image-upload-preview";
import { useState, useEffect } from "react";
import { Category, Product } from "@/app/types";
import { getAllCategories } from "@/app/services/category-service";
import { createProduct, updateProduct } from "@/app/services/product-services";
import { toast } from "react-toastify";
import {getImageUrl} from "@/app/lib/api";



type TProductModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSuccess?: () => void;
    product? : Product | null;
};

type ProductFormData = {
    name: string;
    price: number;
    stock: number;
    category: string;
    description: string;
}

const ProductModal = ({ isOpen, onClose, product, onSuccess }: TProductModalProps) => {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [categories, setCategories] = useState<Category[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const[formData,setFormData] = useState<ProductFormData>({
        name: "",
        price: 0,
        stock: 0,
        category: "",
        description: ""
    });

    const isEditMode = !!product;

    const fetchCategories = async () => {
        try{
            const data =      await getAllCategories();
            setCategories(data);
        }catch(error){
            console.error("Failed to fetch categories",error);
        }
    }

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
            const data = new FormData();
            data.append("name", formData.name);
            data.append("price", formData.price.toString());
            data.append("stock", formData.stock.toString());
            data.append("category", formData.category);
            data.append("description", formData.description);
            if(imageFile) {
                data.append("image", imageFile);
            }

            if(isEditMode) {
                await updateProduct(product._id, data);
            }
            else{
                await createProduct(data);
            }

            setFormData({
                name: "",
                price: 0,
                stock: 0,
                category: "",
                description: ""
            });
            setImageFile(null);
            setImagePreview(null);

            toast.success(isEditMode ? "Product updated successfully" : "Product created successfully");

            onSuccess?.();
            onClose?.();
            // if(onSuccess) onSuccess();

        }catch(error){
            console.error(
                isEditMode ? "Failed to update product" : 
                "Failed to create product",error
            );
            toast.error(
                isEditMode ? "Failed to update product" : 
                "Failed to create product"
            );
        } finally{
            setIsSubmitting(false);
        }
    }

    useEffect(() => {  
        if(isEditMode && isOpen) {
            setFormData({
                name: product.name,
                description: product.description,
                price: product.price,
                category: product.category._id,
                stock: product.stock,
            });
            setImagePreview(product.imageUrl? getImageUrl(product.imageUrl) : null);
        }else if (isOpen) {
            setFormData({
                name: "",
                price: 0,
                stock: 0,
                category: "",
                description: ""
            });
            setImagePreview(null);
        }
    }, [isOpen, product]);

    useEffect(() => {
        fetchCategories();
    },[]);


    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={isEditMode ? "Edit Product" : "Add Product"}
        >
            <form onSubmit={handleSubmit} className="flex flex-col max-w-2xl gap-6">
                <div className="flex gap-7">
                    <div className="aspect-square w-64">
                        <ImageUploadPreview label="Product Image" value={imagePreview} onChange={(file) => {
                            setImageFile(file);
                            setImagePreview(URL.createObjectURL(file));
                        }}

                         />
                        
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="input-group-admin">
                            <label htmlFor="name">Product Name</label>
                            <input type="text" id="name" name="name" placeholder="e. g Running Shoes"
                             value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="input-group-admin">
                                <label htmlFor="price">Price (IDR) </label>
                                <input type="number" id="price" name="price" placeholder="e. g 100000" 
                                value={formData.price} onChange={handleChange} />  
                            </div>
                            
                            <div className="input-group-admin">
                                <label htmlFor="stock">Stock</label>
                                <input type="number" id="stock" name="stock" placeholder="e. g 50" 
                                value={formData.stock} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="input-group-admin">
                            <label htmlFor="category">Category</label>
                            <select
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                defaultValue=""
                                className=""
                            >
                                <option value="" disabled>
                                    Select a category
                                </option>
                                {categories.map((category) => (
                                    <option key={category._id} value={category._id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    
                </div>
                <div className="input-group-admin">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" placeholder="Product Details..." rows={7}
                    value={formData.description} onChange={handleChange}
                    ></textarea>
                </div>
               <Button className=" mt-3 rounded-lg ml-auto" onClick={handleSubmit} disabled={isSubmitting} type="submit">
                {
                    isEditMode ? "Update Product" : "Create Product"
                }
                </Button>
            </form> 
            
        </Modal>
    );
};

export default ProductModal;