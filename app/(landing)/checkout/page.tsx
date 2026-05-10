

import CheckoutForm from "../components/checkout/OrderInformation"
import CartItems from "../components/checkout/cartItems"

const CheckOut = () => {
    return (
        <main className="bg-gray-100 min-h-[80vh] pb-20 ">
            <div className="max-w-5xl mx-auto py-20">
                <h1 className=" text-3xl font-bold text-center">Checkout</h1>
            </div>
            <div className=" grid grid-cols-2 gap-14 px-30">
                    <CheckoutForm />
                    <CartItems />
            
            </div>

            
        </main>
    );
}

export default CheckOut;