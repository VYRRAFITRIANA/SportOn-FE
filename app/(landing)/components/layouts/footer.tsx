
import Image from "next/image"
import Link  from "next/link";

const footer = () => {
    return (
        <section className="bg-dark-alternate text-white px-10" id="footer">
            <div className="flex justify-between container mx-auto py-14 pb-24">
                <div className="w-105">
                    <Image src="/images/logo-white (1).svg"  
                     alt="logo"
                     width={185} 
                     height={44}/>
                     
                    <p className="mt-4">
                        Engineered for endurance and designed for speed. Experience gear that moves as fast as you do
                    </p>
                </div>
                <div className="w-105 grid grid-cols-2">
                    <div className="flex gap-7 flex-col">
                        <Link href="#">Home</Link>
                        <Link href="#">Categories</Link>
                        <Link href="#">Products</Link>
                        <Link href="#">About Us</Link>
                    </div>
                    <div className="flex gap-7 flex-col">
                        <Link href="#">Instagram</Link>
                        <Link href="#">Facebook</Link>
                        <Link href="#">TikTok</Link>
                        <Link href="#">YouTube</Link>
                    </div>
                </div>
             </div>
             <div className="border-t border-t-white/15">
        <div className="container mx-auto py-6.5 flex justify-between">
          <div>SportsOn © 2025 All Rights Reserverd.</div>

          <div className="grid grid-cols-2 w-105">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms Conditions</Link>
          </div>
        </div>
      </div>


    
        </section>
    );
}

export default footer;