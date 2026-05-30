import Image from "next/image";
import ProductAction from "../../components/ProductDetails/ProductAction";
import PriceFormatted from "@/app/utils/PriceFormatted";
import {getProductById} from "@/app/services/product-services"
import { getImageUrl } from "@/app/lib/api";

type TPageProps = {
    params: Promise<{id : string}>;
};

const productDetail = async ({params}:TPageProps) => {
    const {id} = await params;

    const product = await getProductById(id);

    console.log ("produk stock", product.stock);

    return ( 
        <main className="container px-10 mx-auto py-24 flex gap-12 overflow-hidden">
             <div className="bg-primary-light aspect-square min-w-120 flex justify-center items-center ">
                 <Image src={getImageUrl(product.imageUrl)} alt="{product.name}" 
                    width={200} 
                    height={200} 
                    className="object-contain aspect-square w-full"
                />
            </div>
            <div className="w-full py-7">
                <h1 className="font-bold text-5xl mb-6">{product.name}</h1>
                <div className="bg-primary-light rounded-full w-fit text-primary px-6 py-2 mb-5 ">
                    {product.category.name}
                </div>
                <p className="leading-loose">
                    {product.description}
                </p>
                <div className =" text-primary text-[32px] font-semibold mb-12">
                    {PriceFormatted(product.price)}
                </div>
                    <ProductAction stock={product.stock}
  product={product}
/>
                    

            </div> 

        </main>
    );
}

export default productDetail;