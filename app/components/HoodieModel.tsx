'use client'
import { useGLTF } from "@react-three/drei"
import { useRef, useEffect, useState, useLayoutEffect } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { Group } from "three"
import useIsMobile from "../hooks/useIsMobile"

gsap.registerPlugin(useGSAP);

const HoodieModel = ({modelRef, onModelReady} : {modelRef: React.RefObject<Group | null> ; onModelReady: () => void}) => {

    const isMobile = useIsMobile();
    const groupRef = useRef<Group>(null);

    const {scene} = useGLTF('/models/hoodie.glb')

    useGSAP(() => {
        const el = groupRef.current;
        if(!el) return;
        const tl = gsap.timeline();

        tl.to(el.rotation, {
      y: Math.PI * 2,
      duration: 15,
      ease: "none",
      repeat: -1,
    }, 1 )

    } )

   useLayoutEffect(() => {
    if(!groupRef.current) return;

    requestAnimationFrame(() => {
      if(modelRef) modelRef.current = groupRef.current;
      if(onModelReady) onModelReady();
    })
   }, )

  return (
    <group ref={(node) => {
      groupRef.current = node;
      if(modelRef && node) modelRef.current = node;
    }} position={isMobile ? [0, -6.5, 0] : [3.5, -4, 0]} scale={8}>
    <primitive object={scene}
   style={{filter: "drop-shadow(0px 30px 60px rgba(0,0,0,0.6))"}} />
  </group>
  )
}

export default HoodieModel