import Categories from "./components/Categories";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default async function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="flex justify-center my-10">
        <Categories />
      </div>
    </div>
  );
}
