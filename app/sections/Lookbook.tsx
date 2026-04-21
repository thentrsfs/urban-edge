'use client'

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const products = [
    {
        id: 1,
        name: "REVIVAL CORE",
        description: 'CORE OF THE NIGHT' ,
        image: "/images/clothes/hoodie-1.jpg",
        price: 100,
        category: "CORE COLLECTION"
    },
    {
        id: 2,
        name: "REVIVAL CORE",
        description: 'CORE OF THE NIGHT' ,
        image: "/images/clothes/jacket-1.jpg",
        price: 100,
        category: "CORE COLLECTION"
    },
    {
        id: 3,
        name: "REVIVAL CORE",
        description: 'CORE OF THE NIGHT' ,
        image: "/images/clothes/hoodie-2.jpg",
        price: 100,
        category: "CORE COLLECTION"
    },
    {
        id: 4,
        name: "REVIVAL CORE",
        description: 'CORE OF THE NIGHT' ,
        image: "/images/clothes/pants-1.jpg",
        price: 100,
        category: "CORE COLLECTION"
    },
    {
        id: 5,
        name: "REVIVAL CORE",
        description: 'CORE OF THE NIGHT' ,
        image: "/images/clothes/hoodie-3.jpg",
        price: 100,
        category: "NEON STATE"
    },
    
    {
        id: 6,
        name: "REVIVAL CORE",
        description: 'CORE OF THE NIGHT' ,
        image: "/images/clothes/jacket-2.jpg",
        price: 100,
        category: "NEON STATE"
    },
    {
        id: 7,
        name: "REVIVAL CORE",
        description: 'CORE OF THE NIGHT' ,
        image: "/images/clothes/t-shirt-1.jpg",
        price: 100,
        category: "NEON STATE"
    },
    {
        id: 8,
        name: "REVIVAL CORE",
        description: 'CORE OF THE NIGHT' ,
        image: "/images/clothes/hoodie-4.jpg",
        price: 100,
        category: "NEON STATE"
    },
    {
        id: 9,
        name: "REVIVAL CORE",
        description: 'CORE OF THE NIGHT' ,
        image: "/images/clothes/hoodie-5.jpg",
        price: 100,
        category: "VOID SERIES"
    },
    {
        id: 10,
        name: "REVIVAL CORE",
        description: 'CORE OF THE NIGHT' ,
        image: "/images/clothes/jacket-3.jpg",
        price: 100,
        category: "VOID SERIES"
    },
    {
        id: 11,
        name: "REVIVAL CORE",
        description: 'CORE OF THE NIGHT' ,
        image: "/images/clothes/t-shirt-2.jpg",
        price: 100,
        category: "VOID SERIES"
    },
    {
        id: 12,
        name: "REVIVAL CORE",
        description: 'CORE OF THE NIGHT' ,
        image: "/images/clothes/t-shirt-3.jpg",
        price: 100,
        category: "VOID SERIES"
    },


]

const Lookbook = () => {

    const scrollContainer = useRef<HTMLDivElement>(null);
    const scrollSection = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const el = scrollContainer.current;
        const section = scrollSection.current;
        if(!el || !section) return;

         const scrollAmount = el.offsetWidth - window.innerWidth;

        gsap.to(el, {
            x: -scrollAmount,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: '+=100%',
                markers: true,
                pinSpacing: true,
                scrub: true,
                pin: true,
                invalidateOnRefresh: true
            },
        })
    })

  return (
    <section ref={scrollSection} className="h-screen relative overflow-hidden mb-30">
        <div ref={scrollContainer} className="relative flex h-full w-fit">
            {products.map((product) => (
                 <div
        key={product.id}
        className="w-max h-full flex items-center justify-center"
      >
        <Image
          src={product.image}
          alt={product.name}
          width={900}
          height={900}
          className="w-[60%] h-[60%] object-cover"
        />
      </div>
            ))}
        </div>
    </section>
  )
}

export default Lookbook