'use client'
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { Group } from "three";

import Hero from "./sections/Hero";
import Nav from "./components/Nav";
import FeaturedProducts from "./sections/FeaturedProducts";
import SplashScreen from "./components/SplashScreen";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Home() {
  const hoodieRef = useRef<Group | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const featuredRef = useRef<HTMLDivElement | null>(null);

  const [splashScreen, setSplashScreen] = useState(true);
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


useEffect(() => {
  const timer = setTimeout(() => {
    setSplashScreen(false);
  }, 1500); // 1.5s is perfect

  return () => clearTimeout(timer);
}, []);

  
useGSAP(() => {
  if(splashScreen) return;

  gsap.from(".hero-text", {
    opacity: 0,
    y: -60,
    ease: "power3.out",
    duration: 1.5
  })
} , [splashScreen])

// disable scroll on splash screen
useEffect(() => {
  if (splashScreen) {
    document.body.style.overflow = "hidden";
  } else {
      document.body.style.overflow = "auto";
      ScrollTrigger.refresh();
  }
}, [splashScreen]);
  

  return (
    <div className="relative">
{splashScreen && (
  <SplashScreen/>
)}
      <video autoPlay muted loop playsInline className="fixed inset-0 w-full h-full blur-sm scale-110 object-cover -z-10">
        <source src="/videos/video-6.mp4" type="video/mp4" />
      </video>

      <div className="fixed inset-0 bg-bg/60 -z-10" />
    <div className={`${splashScreen ? "opacity-0" : "opacity-100"} transition-opacity duration-700 flex flex-col text-text-primary relative`}>
      <Nav/>
      <Hero heroRef={heroRef} hoodieRef={hoodieRef} onModelReady={() => setIsReady(true)} />
      <FeaturedProducts featuredRef={featuredRef}/>
    </div>    
    </div>
  );
}
