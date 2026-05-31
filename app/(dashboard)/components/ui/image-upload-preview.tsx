
"use client";
import { useState,useRef } from "react";
import Image from "next/image";
import { FiUploadCloud } from "react-icons/fi";

type TImageUploadPreviewProps = {
    label? : string;
    value? : string | null;
    onChange: (file: File) => void;
    className?: string;
    
}
const ImageUploadPreview = ({label, value, onChange, className}:TImageUploadPreviewProps) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            onChange(file);
        }
    };

    return (
        <div className={className}>
           <div className="border-2 border-dashed border-primary bg-primary/5 rounded-lg h-64 w-50 flex flex-col justify-center items-center" onClick={handleImageClick}>
                {value ? (
                    <Image src={value} width={190} height={190} alt="Preview" className="w-full h-full object-cover rounded-lg" />
                ) : (
                    <div className="flex flex-col items-center justify-center w-full h-full text-center">
                        <FiUploadCloud size={34} className="mb-2 text-primary" />
                        <span className="text-sm font-medium">
                            Click to upload <br /> an image
                        </span>
                    </div>
                )}
                <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                />

            </div>
        </div>
    );
}

export default ImageUploadPreview;