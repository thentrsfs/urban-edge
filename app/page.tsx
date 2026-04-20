'use client'
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { Group } from "three";

import Hero from "./sections/Hero";
import Nav from "./components/Nav";
import LatestDrops from "./sections/LatestDrops";
import SplashScreen from "./components/SplashScreen";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Home() {
  const hoodieRef = useRef<Group | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const featuredRef = useRef<HTMLDivElement | null>(null);

  const [splashScreen, setSplashScreen] = useState(true);
  const [isReady, setIsReady] = useState(false);

// Scroll animation
useGSAP(() => {
  if (!isReady || splashScreen ) return;

  const hoodie = hoodieRef.current;
  const hero = heroRef.current;
  if (!hoodie || !hero) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: hero,
      start: "top top",
      end: "+=150%",
      scrub: 1.5,
      pin: true,
    }
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
    ease: "power2.inOut"
  }, 0.1);

  tl.to(hoodie.scale, {
    x: 10,
    y: 10,
    z: 10,
    ease: "power3.out",
  }, 0.1);
  tl.from('.product-info', {
    opacity: 0,
    y: 80,
    ease: "power3.out",
    duration: 1,
  } , 0.4)

}, [isReady , splashScreen]);

// Splash Screen 
useGSAP(() => {
  if(!splashScreen) return;

  const tl = gsap.timeline();

  tl.to('.splash-logo', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
    delay: 0.2
  })

  tl.to('.splash-logo', {
    opacity: 0,
    y: -40,
    duration: 0.6,
    ease: "power3.in",
    onComplete: () => setSplashScreen(false)
  }, '+=0.4')

  tl.to('.splash', {
    opacity: 0,
    duration: 1,
    ease: "power4.inOut",
  }, '-=0.4')
}, [splashScreen])

// Prevent scroll while splash screen is active
useEffect(() => {
  if (!splashScreen) return;

  const preventScroll = (e: Event) => {
    e.preventDefault();
  };

  const preventKeys = (e: KeyboardEvent) => {
    const keys = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Space"];
    if (keys.includes(e.code)) {
      e.preventDefault();
    }
  };

  window.addEventListener("wheel", preventScroll, { passive: false });
  window.addEventListener("touchmove", preventScroll, { passive: false });
  window.addEventListener("keydown", preventKeys);

  return () => {
    window.removeEventListener("wheel", preventScroll);
    window.removeEventListener("touchmove", preventScroll);
    window.removeEventListener("keydown", preventKeys);
  };
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
      <LatestDrops featuredRef={featuredRef}/>
    </div>    
    </div>
  );
}
