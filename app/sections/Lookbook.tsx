'use client'

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"
import Image from "next/image"

import { products } from "../data/products"

gsap.registerPlugin(ScrollTrigger, useGSAP)


const Lookbook = () => {

    const scrollContainer = useRef<HTMLDivElement>(null);
    const scrollSection = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const el = scrollContainer.current;
        const section = scrollSection.current;
        if(!el || !section) return;

        const cards = gsap.utils.toArray('.lookbook-card');

        const intro = gsap.to(cards, {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power3.out',
            paused: true
        })

        ScrollTrigger.create({
            trigger: section,
            start: 'top top+=200',
            onEnter: () => intro.play(),
        })

        const scrollAmount = el.offsetWidth - window.innerWidth;

        gsap.to(el, {
            x: -scrollAmount,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: () => `+=${scrollAmount}`,
                pinSpacing: true,
                scrub: true,
                pin: true,
                invalidateOnRefresh: true
            },
        })

    })

  return (
    <section ref={scrollSection} className="h-screen relative overflow-hidden">
        <div ref={scrollContainer} className="relative flex gap-8 h-full w-fit lg:px-30">
            {products.map((product) => (
                 <div
        key={product.id}
        className="w-max h-full flex items-center justify-center lookbook-card opacity-0 translate-y-10"
      >
        <Image
          src={product.image}
          alt={product.name}
          width={900}
          height={900}
          className="lg:w-100 lg:h-140 object-cover"
        />
      </div>
            ))}
        </div>
    </section>
  )
}

export default Lookbook