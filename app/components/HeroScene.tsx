'use client';
import { Canvas } from "@react-three/fiber";
import {Environment } from "@react-three/drei";
import HoodieModel from "./HoodieModel";

const HeroScene = () => {
  return (
    <Canvas camera={{ position: [1.5, 0, 8], fov: 45 }} className="w-full h-full">

<ambientLight intensity={0.2} />

<directionalLight
  position={[3, 3, 5]}
  intensity={1.2}
/>

<directionalLight
  position={[-4, 2, -5]}
  intensity={1.5}
/>

<directionalLight
  position={[0, -3, 2]}
  intensity={0.3}
/>
        <Environment preset="city" />

        <HoodieModel />
    </Canvas>
  )
}

export default HeroScene