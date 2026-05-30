import PaymentsOptions from "../components/payment/PaymentOptions";
import PaymentSteps from "../components/payment/PaymentSteps";

import { getAllBanks } from "@/app/services/bank-services";

const Payment = async () => {
  const banks = await getAllBanks();

  return (
    <main className="bg-gray-100 min-h-[80vh] pb-20">
      
      <div className="max-w-5xl mx-auto py-20">
        <h1 className="text-3xl font-bold text-center">
          Payment
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-14 px-30">
        
        <PaymentsOptions bank={banks} />

        <PaymentSteps />
      </div>
    </main>
  );
};

export default Payment;