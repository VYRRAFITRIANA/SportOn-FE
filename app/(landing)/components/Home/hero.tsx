import Button from "../UI/button";
import { FiFastForward } from "react-icons/fi";
import Image from "next/image";

const Hero = () => {
  return (
    <section
     className="container py-10 mx-auto min-h-screen flex items-center relative 
     " id="hero"  
    >
     
      <div className="relative self-center">
        <Image src="/images/img-basketball-transparent.svg" alt="Hero Image" width={600} height={550}
     className=" grayscale absolute -left-0 -top-15 " />

        <div className="relative px-30 py-15w-full">
          <div className="text-primary italic bg-primary/20 px-4 py-[5px] w-max rounded-xl">
            friday sale, 50%
          </div>

          <h1 className="font-extrabold text-[80px] italic bg-gradient-to-b leading-tight from-black to-[#979797] bg-clip-text text-transparent">
            WEAR YOUR <br />
            TOP-QUALITY <br />
            SPORTSWEAR
          </h1>

          <p className="w-1/2 mt-10 leading-loose">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do. Premium fabrics. Unmatched comfort.
            Limitless motion.
          </p>

          <div className="flex gap-5 mt-14">
            <Button>
              Explore More <FiFastForward />
            </Button>

            <Button variant="ghost">
              Watch Video {" "}
              <Image
                src="/images/icon-play-video.svg"
                alt="Play Video"
                width={29}
                height={29}
              />
            </Button>
          </div>
        </div>
        <Image src="/images/img-hero.png" alt="Hero Image" width={700} height={950}
        className="absolute -right-0 top-1/2 -translate-y-1/2" />

      </div>
      <Image src="/images/img-ornament-hero.svg" alt="Shape Hero" width={400} height={420}
      className="absolute -right-[200px] top-1/2 -translate-y-1/2 
      " />
    </section>
    
  );
};

export default Hero;