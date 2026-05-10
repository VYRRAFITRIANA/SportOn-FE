

import CardWithHeader from "../UI/card-with-header";
import {FiCreditCard} from "react-icons/fi";

const paymentList = [
    {
        BankName: "BCA",
        AccountNumber: 1234567890,
        AccountHolder: "PT SportOn Indonesia"
    },
    {
        BankName: "BNI",
        AccountNumber: 9876543210,
        AccountHolder: "PT SportOn Indonesia"
    },
    {
        BankName: "BRI",
        AccountNumber: 1122334455,
        AccountHolder: "PT SportOn Indonesia"
    }
];
const PaymentOptions = () => {
    return (
        <CardWithHeader title="Payment Options">
          {
            paymentList.map((payment, index) => (
                
                <div key={index} className="flex gap-5 p-5 border-b border-gray-100">
                    <div className="bg-blue-100 p-4 text-blue-500 h-fit self-center">
                        <FiCreditCard size={24}  />
                    </div>
                    <div className="self-center">
                        <div className="font-bold">{payment.BankName}</div>
                        <div className="text-sm">{payment.AccountNumber}</div>
                        <div className="text-sm opacity-70">{payment.AccountHolder}</div>
                    </div>
                    <div className="h-fit ml-auto self-center bg-blue-50 text-gray-700 text-xs px-2 py-1"> Bank Transfer</div>
                </div>
            ))
        }
        </CardWithHeader>
    );
}

export default PaymentOptions;