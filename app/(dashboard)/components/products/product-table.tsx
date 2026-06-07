import Image from "next/image";
import PriceFormatted  from "@/app/utils/PriceFormatted";
import Button from "@/app/(landing)/components/UI/button";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { Product } from "@/app/types";
import products from "@/app/(landing)/components/Home/products";
import { getImageUrl } from "@/app/lib/api";

// const productData = [
//     {
//         name: "Sport On Running Shoes",
//         imageUrl: "/images/products/product-1.png",
//         category: "Running",
//         price: 150000,
//         stock: 20,
//     },
//     {
//         name: "Sport On Running Shoes 2",
//         imageUrl: "/images/products/product-2.png",
//         category: "Running",
//         price: 150000,
//         stock: 20,
//     },
// ];

type TProductTableProps = {
    products: Product[];
    onDelete?: (id: string) => void;
    onEdit?: (product: Product) => void;
}

const ProductTable = ({ products, onDelete, onEdit }: TProductTableProps) => {
    return (
        <div className="bg-white rounded-xl border border-gray-200 ">
            <table className="w-full text-left">
                {/* HEADER */}
                <thead>
                    <tr className="border-b border-gray-200 ">
                        <th className="px-6 py-4 font-semibold">Product</th>
                        <th className="px-6 py-4 font-semibold">Category</th>
                        <th className="px-6 py-4 font-semibold">Price</th>
                        <th className="px-6 py-4 font-semibold">Stock</th>
                        <th className="px-6 py-4 font-semibold">Actions</th>
                    </tr>
                </thead>

                {/* BODY */}
                <tbody>
                    {products.map((data) => (
                        <tr
                            key={data._id}
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
                                <div className = "px-2 py-1 bg-gray-200 w-fit rounded-md">
                                 {data.category.name}
                                 </div>
                                
                                
                            </td>

                            <td className="px-6 py-4 text-gray-600">
                                {PriceFormatted(data.price)}
                            </td>

                            <td className="px-6 py-4 text-gray-600">
                                {data.stock} units
                            </td>

                            <td className="px-6 py-10  items-center flex gap-3 text-gray-600 ">
                                {/* actions */}
                                <button onClick={() => onEdit?.(data)}>
                                     <FiEdit2 size ={20}/>
                                </button>
                                <button onClick={() => onDelete?.(data._id)}>
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

export default ProductTable;