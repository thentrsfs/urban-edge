import { useGLTF } from "@react-three/drei"

const HoodieModel = () => {
    const {scene} = useGLTF('/models/hoodie.glb')

  return (
    <primitive object={scene} scale={12}
  position={[3.5, -6.5, 0]} style={{filter: "drop-shadow(0px 30px 60px rgba(0,0,0,0.6))"}} />
  )
}

export default HoodieModel