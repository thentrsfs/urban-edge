'use client'
import { useGLTF } from "@react-three/drei"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { Group } from "three"
import useIsMobile from "../hooks/useIsMobile"

gsap.registerPlugin(useGSAP);

const HoodieModel = () => {

    const isMobile = useIsMobile();

    const groupRef = useRef<Group>(null);

    const {scene} = useGLTF('/models/hoodie.glb')

    useGSAP(() => {
        const el = groupRef.current;
        if(!el) return;
        const tl = gsap.timeline();

        tl.to(el.scale, {
            x: 12,
            y: 12,
            z: 12,
            duration: 2,
            ease: "power2.inOut",
        })

        tl.to(el.rotation, {
      y: Math.PI * 2,
      duration: 15,
      ease: "none",
      repeat: -1,
    }, 1 )

    } )

  return (
    <group ref={groupRef} position={isMobile ? [0, -6.5, 0] : [3.5, -6.5, 0]} scale={0}>
    <primitive object={scene}
   style={{filter: "drop-shadow(0px 30px 60px rgba(0,0,0,0.6))"}} />
  </group>
  )
}

export default HoodieModel