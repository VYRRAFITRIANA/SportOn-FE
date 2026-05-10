"use client";
import { FiImage, FiTrash2} from "react-icons/fi";
import { useState,useRef } from "react";
import { FiUploadCloud } from "react-icons/fi";

type TFileUploadProps={
    onFileSelected?: (file: File |null) => void;
}
const FileUpload = ({onFileSelected}: TFileUploadProps) => {
    const[file, setFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = (selectedFile?: File) => {
        if (!selectedFile) return;
        setFile(selectedFile);
        onFileSelected?.(selectedFile);
    }

    const RemoveFile =(e:React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setFile(null);
        onFileSelected?.(null);
    }


    return (
        <div onClick ={()=> fileInputRef.current?.click()}
            onDragOver={(e) =>e.preventDefault()}
            onDrop={(e) => {e.preventDefault();
                handleFileChange(e.dataTransfer.files[0])
            }}
        className="flex flex-col justify-center items-center w-full py-6 border border-dashed border-primary bg-primary-light">
            <input type="file" className="hidden"
                   ref={fileInputRef} 
                   accept="image/*" 
                   onChange={(e) => handleFileChange(e.target.files?.[0])}
                   />
                   {
                    !file ? (

                  
            <div className="text-center">
                <FiUploadCloud size={20} className="mx-auto mb-4 text-primary" />
                <p className="text-xs text-gray-600">Upload Payment Receipt Here !</p>
            </div>
            ):(
                <div className="text-center">
                    <FiImage size={20} className="text-primary mx-auto"/>
                    <p className="text-sm text-primary ">{file.name}</p>
                    <p className="text-sm text-gray-400">
                        {(file.size / 1024).toFixed(2)} KB
                    </p>
                    <button onClick={RemoveFile} className=" mx-auto
                     flex gap-2 mt-4 bg-primary/80 px-2 rounded text-white">
                        <FiTrash2 size={14} className="self-center"/> Remove
                    </button>
                </div>
            ) }
        </div>
    );
}

export default FileUpload;