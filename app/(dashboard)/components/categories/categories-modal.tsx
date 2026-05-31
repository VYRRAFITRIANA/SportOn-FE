"use client";
import Modal from "@/app/(dashboard)/components/ui/modal";
import Button from "@/app/(landing)/components/UI/button";
import ImageUploadPreview from "@/app/(dashboard)/components/ui/image-upload-preview";
import { useState } from "react";

type TCategoryModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const CategoryModal = ({ isOpen, onClose }: TCategoryModalProps) => {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Add New Category"
        >
            <div className="flex flex-col gap-6 w-2xl">
                <div className="flex gap-7">
                    <div className="aspect-square">
                       
                        <ImageUploadPreview label="Category Image" value={imagePreview} onChange={(file) => {
                            setImageFile(file);
                            setImagePreview(URL.createObjectURL(file));
                        }}

                         />
                        
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <div className="input-group-admin">
                            <label htmlFor="categoryName">Category Name</label>
                            <input type="text" id="categoryName" name="categoryName" placeholder="e. g Running" />
                        </div>
                        <div className="input-group-admin">
                            <label htmlFor="description">Description</label>
                            <textarea id="description" name="description" placeholder="Category Details..." rows={6}></textarea>
                        </div>
                       
                    </div>
                    
                </div>
               
               <Button className=" mt-3 rounded-lg ml-auto" onClick={onClose}>
                    Create Category 
                </Button>
            </div> 
            
        </Modal>
    );
};

export default CategoryModal;