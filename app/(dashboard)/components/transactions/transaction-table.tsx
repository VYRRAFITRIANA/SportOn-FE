import PriceFormatted from "@/app/utils/PriceFormatted";
import { FiEye } from "react-icons/fi";

const transactionData = [
    {
        date: "23/02/2026 19:32",
        customer: "John Doe",
        contact: "08231223123",
        total: 150000,
        status: "pending",
    },
    {
        date: "01/03/2026 17:32",
        customer: "Delon Marx",
        contact: "08231223123",
        total: 450000,
        status: "paid",
    },{
        date: "01/03/2026 17:32",
        customer: " Vyrra Fitriana",
        contact: "08231223123",
        total: 450000,
        status: "rejected",
    },

];


type TTransactionsTableProps ={
    onViewDetails : () =>void;
}

const TransactionsTable = ({onViewDetails} : TTransactionsTableProps) => {
    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case "pending":
                return "bg-yellow-100 text-yellow-700 border-yellow-300";
            case "rejected":
                return "bg-red-100 text-red-700 border-red-300";
            case "paid":
                return "bg-green-100 text-green-700 border-green-300";
            default:
                return "bg-gray-500";
            
        }
    };

    return (
        <div className="bg-white rounded-xl border border-gray-200">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className="px-6 py-4 font-semibold">Date</th>
                        <th className="px-6 py-4 font-semibold">Customer</th>
                        <th className="px-6 py-4 font-semibold">Contact</th>
                        <th className="px-6 py-4 font-semibold">Total</th>
                        <th className="px-6 py-4 font-semibold">Status</th>
                        <th className="px-6 py-4 font-semibold">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {transactionData.map((data, index) => (
                        <tr
                            key={index}
                            className="border-b border-gray-200 last:border-0 "
                        >
                            <td className="px-6 py-4 font-medium">{data.date}</td>

                            <td className="px-6 py-4 font-medium"> {data.customer} </td>

                            <td className="px-6 py-4 font-medium"> {data.contact} </td>

                            <td className="px-6 py-4 font-medium"> {PriceFormatted(data.total)} </td>
                            
                            <td className="px-6 py-4 font-medium">
                                <div className={`text-center px-2 py-2 rounded-full border ${getStatusColor(data.status)}`}>
                                    {data.status}
                                </div>
                                
                            </td>

                            <td className="px-6 py-7.5 flex items-center gap-3 text-gray-600">
                                <button
                                    onClick={onViewDetails}
                                    className="items-center flex gap-2 cursor-pointer hover:bg-gray-100 w-fit p-2 rounded-md"
                                    title="View Transaction"
                                >
                                    <FiEye size={18} /> View Details
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionsTable;