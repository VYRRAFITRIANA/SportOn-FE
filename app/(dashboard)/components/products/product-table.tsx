import Image from "next/image";
import PriceFormatted  from "@/app/utils/PriceFormatted";
import Button from "@/app/(landing)/components/UI/button";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const productData = [
    {
        name: "Sport On Running Shoes",
        imageUrl: "/images/products/product-1.png",
        category: "Running",
        price: 150000,
        stock: 20,
    },
    {
        name: "Sport On Running Shoes 2",
        imageUrl: "/images/products/product-2.png",
        category: "Running",
        price: 150000,
        stock: 20,
    },
];

const ProductTable = () => {
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
                    {productData.map((data) => (
                        <tr
                            key={data.name}
                            className="border-b border-gray-200  last:border-0"
                        >
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="relative w-12 h-12 bg-gray-100 rounded-md ">
                                        <Image
                                            src={data.imageUrl}
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
                                 {data.category}
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
                                <button>
                                     <FiEdit2 size ={20}/>
                                </button>
                                <button>
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