import Hero from "./components/Home/hero";
import Categories from "./components/Home/categories";
import Products from "./components/Home/products";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <Products />
    </main>
  );
}