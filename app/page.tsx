'use client'
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { Group } from "three";

import Hero from "./sections/Hero";
import Nav from "./components/Nav";
import FeaturedProducts from "./sections/FeaturedProducts";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hoodieRef = useRef<Group | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const featuredRef = useRef<HTMLDivElement | null>(null);

  const [isReady, setIsReady] = useState(false);
  
useGSAP(() => {
  if (!isReady ) return;

  const hoodie = hoodieRef.current;
  const hero = heroRef.current;

  if (!hoodie || !hero) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: hero,
      start: "top top",
      end: "+=120%",
      scrub: 1,
      pin: true,
    },
  });

  tl.to(".hero-text", {
    opacity: 0,
    y: -80,
    ease: "power3.out",
  });

  tl.to(hoodie.position, {
    x: 0.5,     
    y: -5.5, 
    z: 2,    
    ease: "power3.out"
  }, 0.1);

  tl.to(hoodie.scale, {
    x: 10,
    y: 10,
    z: 10,
    ease: "power3.out",
  }, 0.1);

}, [isReady]);


  return (
    <div ref={containerRef} className="flex flex-col bg-bg text-text-primary relative">
      <div className="absolute inset-0 pointer-events-none animated-bg"/>
      <Nav/>
      <Hero heroRef={heroRef} hoodieRef={hoodieRef} onModelReady={() => setIsReady(true)} />
      <FeaturedProducts featuredRef={featuredRef}/>
    </div>    
  );
}
