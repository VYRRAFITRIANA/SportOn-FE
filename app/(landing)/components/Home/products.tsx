
import Link from "next/link";
import Image from "next/image";
import {FiPlus} from "react-icons/fi";
import Button from "../UI/button";


const productsList = [

    {
        Name:"SportOn Hyperfast Shoes",
        Category:"Running",
        Price: 329000,
        ImageUrl : "product-3.png"
    },{
        Name:"SportOn Rockets Tennis",
        Category:"Tennis",
        Price: 999000,
        ImageUrl : "product-2.png"
    },{
        Name:"SportOn SlowLivin",
        Category:"Running",
        Price: 199000,
        ImageUrl : "product-1.png"
    },{
        Name:"SportOn HyperSoccer v2",
        Category:"Football",
        Price: 299000,
        ImageUrl : "product-4.png"
    },{
       Name:"SportOn HyperSoccer v2",
        Category:"Football",
        Price: 299000,
        ImageUrl : "product-4.png"

    },{
        Name:"SportOn SlowLivin",
        Category:"Running",
        Price: 199000,
        ImageUrl : "product-5.png"

    },{
        Name:"SportOn Hyperfast Shoes",
        Category:"Running",
        Price: 329000,
        ImageUrl : "product-8.png"
    },{
        Name:"SportOn Rockets Tennis",
        Category:"Tennis",
        Price: 999000,
        ImageUrl : "product-7.png"
    }


];

const products = () => {
  return (
    <section className="container mx-auto mt-32 mb-27" id="products">
        <h2 className="font-bold italic text-4xl text-center mb-11">
            <span className="text-primary">OUR</span>
            <span className="text-dark"> PRODUCTS</span>   
        </h2>
        <div className="grid grid-cols-4 gap-5 ">
            {productsList.map((product,index) => (
                <Link href="#" key={index} 
                className="p-1.5 bg-white hover:drop-shadow-xl duration-300">  
                
                <div className="bg-primary-light aspect-square w-full flex justify-center items-center relative">
                     
                     <Image src={`/images/products/${product.ImageUrl}`} 
                        alt={product.Name}
                        width={300} height={300} 
                        className="aspect-square object-contain"/>

                     <Button className="w-10 h-10 p-2! absolute right-3 top-3 ">
                        <FiPlus size={24} />
                    </Button>
                </div>
                <h3 className="font-medium text-lg mb-1.5 mt-4">{product.Name}</h3>
                <div className="flex justify-between mb-8">
                    <div className="text-gray-500">{product.Category}</div>
                    <div className="font-medium text-primary">
                    {Intl.NumberFormat("id-ID", { style: "currency",
                    currency: "IDR",maximumSignificantDigits: 3,
                    }).format(product.Price)}</div>
                </div>
          </Link>
        ))}
      </div>
    </section>
  );
};


export default products;
