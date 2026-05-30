import Hero from "./components/Home/hero";
import Categories from "./components/Home/categories";
import Products from "./components/Home/products";
import {getAllCategories} from "../services/category-service";
import {getAllProducts} from "../services/product-services";

export default async function Home() {
 const [categories,products] = await Promise.all([
    getAllCategories(),
    getAllProducts()
  ] );

  return (
    <main className="overflow-hidden pt-24">
      <Hero />
      <Categories categories={categories} />
      <Products products={products} />
    </main>
  );
}