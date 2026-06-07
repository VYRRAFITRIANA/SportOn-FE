
import { FiCreditCard, FiEdit2, FiTrash2 } from "react-icons/fi";
import { Bank } from "@/app/types";
// const bankData = [
//     {
       
//         bankName: "Bank Jatim",
//         accountNumber: "123456789",
//         accountName: "PT SportOn Digital"
//     },
//     {
//         bankName: "BCA",
//         accountNumber: "123456789",
//         accountName: "PT SportOn Digital"
//     },{
//         bankName: "Mandiri",
//         accountNumber: "123456789",
//         accountName: "PT SportOn Digital"
//     },{
//         bankName: "BRI",
//         accountNumber: "123456789",
//         accountName: "PT SportOn Digital"
//     }
// ];



type TBankInfoListProps = {
    banks: Bank[];
    onEdit: (bank: Bank) => void;
    onDelete: (id: string) => void;
};

const BankInfoList = ({ banks, onEdit, onDelete } :TBankInfoListProps) =>{
    return(
        <div className="grid grid-cols-3 gap-8">
            {banks.map((data) => (
                <div key={data._id} className="bg-white rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center p-5">
                        <div className ="flex gap-2"> 
                            <div className=" bg-blue-50 text-blue-600 rounded w-12 h-12 flex justify-center items-center">
                                <FiCreditCard size ={24}/>
                            </div>
                            <div>
                                <div className="font-semibold">{data.bankName}</div>
                                <div className="text-xs opacity-50 text-gray-500">Bank Trasnfer</div>
                            </div>
                        </div>
                        <div className="flex gap-2 ">
                            <button className="cursor-pointer" onClick={() => onEdit(data) }>
                                <FiEdit2 size ={20} />
                            </button>
                            <button className="cursor-pointer" onClick={() => onDelete(data._id)}>
                                <FiTrash2 size ={20}/>
                            </button>
                        </div>
                    </div>
                    <div className="p-5 font-medium">
                        <div className = "text-xs opacity-50">
                            ACCOUNT NUMBER
                        </div>
                        <div className="font-bold">
                            {data.accountNumber}
                        </div>
                    </div>
                    <div className="border-t border-gray-200 p-5 py-3 text-xs">
                        <span className="opacity-50">Holder : </span>
                        <span className="font-medium">{data.accountName}</span>
                    </div>
                
                </div>
            ))
        }
        </div>
    );
}
export default BankInfoList;