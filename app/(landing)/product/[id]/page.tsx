import Image from "next/image";
import ProductAction from "../../components/ProductDetails/ProductAction";
import PriceFormatted from "@/app/utils/PriceFormatted";
const productDetail = () => {
    return (
        <main className="container px-10 mx-auto py-24 flex gap-12 overflow-hidden">
             <div className="bg-primary-light aspect-square min-w-120 flex justify-center items-center ">
                 <Image src="/images/products/product-3.png" alt="Product Image" 
                    width={200} 
                    height={200} 
                    className="object-contain aspect-square w-full"
                />
            </div>
            <div className="w-full py-7">
                <h1 className="font-bold text-5xl mb-6">SportON HyperSoccer v2</h1>
                <div className="bg-primary-light rounded-full w-fit text-primary px-6 py-2 mb-5 ">
                    Football
                </div>
                <p className="leading-loose">
                    The SportsOn HyperSoccer v2 is engineered for the player who demands 
                    precision, power, and unrivaled speed on the pitch. Featuring a 
                    striking, two-toned black and white design with deep crimson accents, these cleats 
                    don't just perform—they make a statement. Experience the future of football footwear with v2's enhanced fit and cutting-edge traction.
                </p>
                <div className =" text-primary text-[32px] font-semibold mb-12">
                    {PriceFormatted(458000)}
                </div>
                    <ProductAction />
                    

            </div> 

        </main>
    );
}

export default productDetail;