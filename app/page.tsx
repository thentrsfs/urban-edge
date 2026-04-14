import Hero from "./sections/Hero";
import Nav from "./components/Nav";
import FeaturedProducts from "./sections/FeaturedProducts";

export default function Home() {
  return (
    <div className="flex flex-col bg-bg text-text-primary relative">
      <div  className="absolute inset-0 pointer-events-none animated-bg"/>
      <Nav/>
      <Hero/>
      <FeaturedProducts/>
    </div>    
  );
}
