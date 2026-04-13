import Hero from "./sections/Hero";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <div className="flex flex-col bg-bg text-text-primary">
      <Nav/>
      <Hero/>
    </div>    
  );
}
