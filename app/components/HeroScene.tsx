'use client';
import { Canvas } from "@react-three/fiber";
import {Environment } from "@react-three/drei";
import HoodieModel from "./HoodieModel";

const HeroScene = () => {
  return (
    <Canvas camera={{ position: [2, 10, 35], fov: 10 }} className="w-full h-full">
        <ambientLight intensity={0.5} />
        <directionalLight 
  position={[5, 5, 5]} 
  intensity={1} 
/>
        <Environment preset="city" />

        <HoodieModel />
    </Canvas>
  )
}

export default HeroScene