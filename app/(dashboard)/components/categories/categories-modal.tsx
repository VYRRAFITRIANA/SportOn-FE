"use client";
import Modal from "@/app/(dashboard)/components/ui/modal";
import Button from "@/app/(landing)/components/UI/button";
import ImageUploadPreview from "@/app/(dashboard)/components/ui/image-upload-preview";
import { useEffect, useState } from "react";
import { Category } from "@/app/types";
import { getImageUrl } from "@/app/lib/api";
import { createCategory, updateCategory } from "@/app/services/category-service";
import { toast } from "react-toastify";

type TCategoryModalProps = {
    isOpen: boolean;
    onClose: () => void;
    category?: Category | null;
    onSuccess: () => void;

};

type CategoryFormData = {
    name: string;
    description : string;
}

const CategoryModal = ({ isOpen, onClose, category, onSuccess }: TCategoryModalProps) => {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const isEditMode = !!category;

    const [formData, setFormData] = useState<CategortFormData>({
        name:"",
        description: ""
    });

    useEffect(() => {
    if(isEditMode && isOpen){
        setFormData({
            name: category.name,
            description: category.description
        });
        setImagePreview(category.imageUrl ? getImageUrl(category.imageUrl) : null);
    }else if (isOpen) {
        setFormData({
            name :"",
            description:""
        });
        setImageFile(null);
        setImagePreview(null);
    
    }
    },[category, isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        setIsSubmitting(true);
        try{
            const data = new FormData();
            data.append("name", formData.name);
            data.append("description", formData.description);
            if(imageFile){
                data.append("image", imageFile);
            }

            if(isEditMode) {
                await updateCategory(category._id, data);
            }else {
                await createCategory(category._id, data);
            }
            
            toast.success(isEditMode ? "Category updated successfully" : "Category created successfully");
        
            setFormData({ 
                name: "",
                description: ""
            });
            setImageFile(null);
            setImagePreview(null);

            onSuccess();
            onClose();
        } catch(error){
            console.error(
                isEditMode ? "Failed to update category" : "Failed to create category", error
            );
            toast.error(
                isEditMode ? "Failed to update category" : "Failed to create category"
            );
        }finally{
            setIsSubmitting(false);
        }
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={isEditMode ? "Edit Category" : "Create Category"}
        >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-2xl">
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
                            <input type="text" id="name" name="name" 
                            value={formData.name} 
                            onChange={handleChange} placeholder="e. g Running" />
                        </div>
                        <div className="input-group-admin">
                            <label htmlFor="description">Description</label>
                            <textarea id="description" name="description" 
                            value={formData.description} 
                            onChange={handleChange} placeholder="Category Details..." rows={6}></textarea>
                        </div>
                       
                    </div>
                    
                </div>
               
               <Button className=" mt-3 rounded-lg ml-auto" disabled={isSubmitting} type="submit" onClick={handleSubmit}>
                   {isEditMode ? "Update Category" : "Create Category"}
                </Button>
            </form> 
            
        </Modal>
    );
};

export default CategoryModal;