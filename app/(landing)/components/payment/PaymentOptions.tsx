import CardWithHeader from "../UI/card-with-header";
import { FiCreditCard } from "react-icons/fi";

import { Bank } from "@/app/types";

type TBankProps = {
  bank?: Bank[];
};

const PaymentOptions = ({ bank = [] }: TBankProps) => {
      console.log("BANK DATA:", bank);

  return (
    <CardWithHeader title="Payment Options">
        
      
      {bank.map((payment) => (
        <div
          key={payment._id}
          className="flex gap-5 p-5 border-b border-gray-100 last:border-b-0"
        >
          
          {/* Icon */}
          <div className="bg-blue-100 p-4 text-blue-500 h-fit self-center rounded-lg">
            <FiCreditCard size={24} />
          </div>

          {/* Info */}
          <div className="self-center">
            <div className="font-bold">
              {payment.bankName}
            </div>

            <div className="text-sm">
              {payment.accountNumber}
            </div>

            <div className="text-sm opacity-70">
              {payment.accountName}
            </div>
          </div>

          {/* Badge */}
          <div className="h-fit ml-auto self-center bg-blue-50 text-gray-700 text-xs px-2 py-1 rounded-md">
            Bank Transfer
          </div>
        </div>
      ))}
    </CardWithHeader>
  );
};

export default PaymentOptions;