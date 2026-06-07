import Image from "next/image";
import PriceFormatted  from "@/app/utils/PriceFormatted";
import Button from "@/app/(landing)/components/UI/button";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { Category } from "@/app/types";
import { getImageUrl } from "@/app/lib/api";

// const   CategoryData = [
//     {
//         name: "Running",
//         imageUrl: "/images/categories/category-running.svg",
//         description: "Product for Running category",
//     },
//     {
//        name: "Football",
//         imageUrl: "/images/categories/category-football.svg",
//         description: "Product for Football category",
//     },
// ];

type TCategoryTableProps = {
    categories: Category[];
    onEdit: (category: Category) => void;
    onDelete: (id: string) => void;
}

const CategoryTable = ({ categories, onEdit, onDelete }: TCategoryTableProps) => {
    return (
        <div className="bg-white rounded-xl border border-gray-200 ">
            <table className="w-full text-left">
                {/* HEADER */}
                <thead>
                    <tr className="border-b border-gray-200 ">
                        
                        <th className="px-6 py-4 font-semibold">Category</th>
                        <th className="px-6 py-4 font-semibold">Description</th>
                        <th className="px-6 py-4 font-semibold">Actions</th>
                    </tr>
                </thead>

                {/* BODY */}
                <tbody>
                    {categories.map((data,index) => (
                        <tr
                            key={index}
                            className="border-b border-gray-200  last:border-0"
                        >
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="relative w-12 h-12 bg-gray-100 rounded-md ">
                                        <Image
                                            src={getImageUrl(data.imageUrl)}
                                            alt={data.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <span className="font-medium text-gray-700">
                                        {data.name}
                                    </span>
                                </div>
                            </td>

                            <td className="px-6 py-4 text-gray-600" >
                                
                                 {data.description}
                                 
                                
                                
                            </td>

                            <td className="px-6 py-10  items-center flex gap-3 text-gray-600 ">
                                {/* actions */}
                                <button onClick={() => onEdit(data)}>
                                     <FiEdit2 size ={20}/>
                                </button>
                                <button onClick={() => onDelete(data.id)}>
                                     <FiTrash2 size ={20}/>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CategoryTable;