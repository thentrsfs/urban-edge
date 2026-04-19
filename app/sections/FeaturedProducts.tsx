'use client'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const products = [
    {
        id: 1,
        name: "Hoodie 1",
        image: "/images/hoodie-2.jpg",
        price: 100
    },
    {
        id: 2,
        name: "T-Shirt",
        image: "/images/shirt.jpg",
        price: 100
    },
    {
        id: 3,
        name: "Hoodie 2",
        image: "/images/hoodie-1.jpg",
        price: 100
    }
]

const FeaturedProducts = ({featuredRef} : {featuredRef: React.RefObject<HTMLDivElement  | null>}) => {
  
  useGSAP(() => {
    const el = featuredRef.current;
    if (!el) return;

    // set initial state (important)
    gsap.set(".featured-title", { opacity: 0, y: 80 });
    gsap.set(".featured-card", { opacity: 0, y: 120 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 60%",
        end: "top 10%",
      },
    });

    tl.to(".featured-title", {
      opacity: 1,
      y: 0,
      ease: "power3.out",
    });

    tl.to(".featured-card", {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      ease: "power3.out",
    }, "-=0.2");

  }, { scope: featuredRef });

  return (
    <section ref={featuredRef} className="min-h-dvh lg:px-30 lg:py-10 px-6 mt-[150vh]">
        <h1 className="lg:text-7xl font-bold font-heading tracking-wide featured-title">Featured Collection</h1>

        <div className="grid lg:grid-cols-3 grid-cols-2 gap-6 mt-10">
            {products.map((product) => (
                <div key={product.id} className="flex flex-col gap-2 featured-card">
                    <div className="relative h-160 overflow-hidden group">
                    <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-all duration-300 z-10" />
                 <Image src={product.image} width={500} height={500} alt="Product" className="w-full   h-full object-cover group-hover:scale-100 scale-105 transition-transform duration-300" />
                 </div>
                 <p className="text-sm tracking-widest text-muted">{product.name}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default FeaturedProducts