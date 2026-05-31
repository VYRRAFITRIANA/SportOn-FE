"use client";
import Image from "next/image";
import { FiBox, FiLayers, FiShoppingCart, FiCreditCard, FiLogOut } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar =() =>{
    const pathName = usePathname();
    const menuItems = [
        {
            name: "Products",
            icon: FiBox,
            link:"/admin/products"
        },{
            name: "Categories",
            icon: FiLayers,
            link:"/admin/categories"
        },{
            name: "Transactions",
            icon: FiShoppingCart,
            link:"/admin/transactions"
        },{
            name: "Banks Informations",
            icon: FiCreditCard,
            link:"/admin/banks-info"
        }
    ]
    return (
       <aside className ="w-80 min-h-screen bg-white border-r border-gray-100 flex flex-col fixed left-0 top-0">
        <div className="py-8 px-14 border-b border-gray-200" >
            <Image src="/images/logo-admin.svg" alt="Logo" width={215} height={36} />
        </div>
        <div className ="flex flex-col gap-2 mt-12 p-5">
             {menuItems.map((item, index) => {
                    const isActive = pathName === item.link;

                    return (
                        <Link
                            key={index}
                            href={item.link}
                            className={`flex items-center gap-3 py-3 px-4.5 rounded-lg font-medium duration-300
                                ${isActive ? "bg-primary/15 text-primary":"hover:bg-gray-100 "
                               
                            }`}
                        >
                            <item.icon size={20} />
                            <span>
                                {item.name}
                            </span>
                        </Link>
                    );
                })}

        </div>

        <Link href ="#" className ="flex gap-3 font-medium py-3 px-4.5 mx-5 hover : bg-gray-100 duration-300 rounded-lg mt-auto mb-10">
            <FiLogOut size={20} /> Log Out
            
        </Link>


       </aside> 
    )
}
export default Sidebar;