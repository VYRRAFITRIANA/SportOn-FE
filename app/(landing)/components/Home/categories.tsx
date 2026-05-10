import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const categoriesList = [
  { name: "Running", imageUrl: "category-running.svg" },
  { name: "Tenis", imageUrl: "category-tenis.svg" },
  { name: "Basketball", imageUrl: "category-basketball.svg" },
  { name: "Football", imageUrl: "category-football.svg" },
  { name: "Badminton", imageUrl: "category-badminton.svg" },
  { name: "Swimming", imageUrl: "category-swimming.svg" },
];

const Categories = () => {
  return (
    <section id="categories" className="container mx-auto py-20 px-10">
      <div className="flex justify-between items-center">
        <h2 className="text-[24px] font-bold">
          Browse By Categories
        </h2>

        <Link
          href="#"
          className="flex items-center gap-2 text-primary font-medium"
        >
          See All Categories
          <FaArrowRight size={18} />
        </Link>
      </div>

      <div className="grid grid-cols-6 gap-12 mt-10">
        {categoriesList.map((category, index) => (
          <div
            key={index}
            className="rounded-lg bg-gradient-to-r from-[#F1F1F1] to-[#F7F7F7] w-full aspect-square flex flex-col items-center justify-center gap-4"
          >
            <Image
              src={`/images/categories/${category.imageUrl}`}
              alt={category.name}
              width={85}
              height={85}
            />
            <div className="text-primary font-medium text-xl">
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;