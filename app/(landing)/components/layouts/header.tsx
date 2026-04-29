import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between gap-10 container mx-auto py-7">
        <Image 
          src="/images/logo (1).svg" 
          alt="logo"
          width={100}
          height={40}
        />

        <nav className="flex gap-8 font-medium">
          <Link href="#" className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-1/2 after:h-[2px] after:bg-primary">Home</Link>
          <Link href="/category">Category</Link> 
          <Link href="/products">Explore Products</Link>    
        </nav>

        <div className="flex gap-6 items-center"> 
          <FiSearch size={24} className="cursor-pointer" />

          <div className="relative">
            <FiShoppingBag size={24} className="cursor-pointer" />
            <div className="bg-primary rounded-full w-4 h-4 absolute -top-1 -right-1 text-[10px] text-white flex items-center justify-center">
              3
            </div>
          </div>

        </div>
      
      </div>
    </header>
  );
};

export default Header;