// "use client";

import { getTransactionById } from "@/app/services/transaction-services";
import OrderConfirmed from "../../components/order-status/order-confirm";
import OrderSummited from "../../components/order-status/order-summited";
import { TPageProps } from "../../product/[id]/page";
import OrderRejected from "../../components/order-status/order-rejected"

const OrderStatus = async ({ params }: TPageProps) => {

    const { id } = await params;

    const transaction = await getTransactionById(id);

    console.log("transaction", transaction);

    return (
        <main className="bg-gray-100 min-h-[80vh] pt-10">

            <div className="max-w-5xl mx-auto py-15">
                <h1 className="text-4xl font-bold text-center">
                    Order Status
                </h1>
            </div>

            <div className="pb-20">
               
    {transaction.status === "paid" && <OrderConfirmed />}
    {transaction.status === "pending" && <OrderSummited />}
    {transaction.status === "rejected" && <OrderRejected />}
  
</div>
            
            

        </main>
    );
}

export default OrderStatus;