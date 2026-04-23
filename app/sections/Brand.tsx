'use client'

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const Brand = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const el = sectionRef.current;
        if(!el) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: "top top",
                end: "+=120%",
                scrub: 1,
                pin: true,
            }
        })

        tl.fromTo(".brand-title",
    { opacity: 0, filter: 'blur(20px)' ,y: 20 },
    { opacity: 1, filter: 'blur(0px)' , y: 0, duration: 1.2, ease: "power3.out" }
  );
      
    }, {scope: sectionRef});

  return (
    <section ref={sectionRef} className="h-dvh flex flex-col items-center justify-center mb-[150vh]">
        <h1 className="text-8xl brand-title font-bold font-heading tracking-wide">DESIGNED FOR THE UNSEEN</h1>
    </section>
  )
}

export default Brand