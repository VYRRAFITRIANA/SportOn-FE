"use client";
import Modal from "@/app/(dashboard)/components/ui/modal";
import Button from "@/app/(landing)/components/UI/button";
import ImageUploadPreview from "@/app/(dashboard)/components/ui/image-upload-preview";
import { useState } from "react";

type TProductModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const ProductModal = ({ isOpen, onClose }: TProductModalProps) => {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Add New Product"
        >
            <div className="flex flex-col max-w-2xl gap-6">
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
                            <label htmlFor="productName">Product Name</label>
                            <input type="text" id="productName" name="productName" placeholder="e. g Running Shoes" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="input-group-admin">
                                <label htmlFor="price">Price (IDR) </label>
                                <input type="number" id="price" name="price" placeholder="e. g 100000" />  
                            </div>
                            
                            <div className="input-group-admin">
                                <label htmlFor="stock">Stock</label>
                                <input type="number" id="stock" name="stock" placeholder="e. g 50" />
                            </div>
                        </div>
                        <div className="input-group-admin">
                            <label htmlFor="category">Category</label>
                            <select
                                id="category"
                                name="category"
                                defaultValue=""
                                className=""
                            >
                                <option value="" disabled>
                                    Select a category
                                </option>
                                <option value="running">Running</option>
                                <option value="football">Football</option>
                                <option value="basketball">Basketball</option>
                                <option value="tennis">Tennis</option>
                                <option value="swimming">Swimming</option>
                            </select>
                        </div>
                    </div>
                    
                </div>
                <div className="input-group-admin">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" placeholder="Product Details..." rows={7}></textarea>
                </div>
               <Button className=" mt-3 rounded-lg ml-auto" onClick={onClose}>
                    Create Product
                </Button>
            </div> 
            
        </Modal>
    );
};

export default ProductModal;