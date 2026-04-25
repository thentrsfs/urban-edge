'use client';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import HoodieModel from '@/app/components/scene/HoodieModel';
import { Group } from 'three';

const HeroScene = ({
	hoodieRef,
	onModelReady,
}: {
	hoodieRef: React.RefObject<Group | null>;
	onModelReady: () => void;
}) => {
	return (
		<Canvas
			camera={{ position: [1.5, 0, 8], fov: 45 }}
			className='w-full h-full'>
			<directionalLight
				position={[5, 5, 5]}
				intensity={1.3}
			/>
			<Environment preset='city' />

			<HoodieModel
				modelRef={hoodieRef}
				onModelReady={onModelReady}
			/>
		</Canvas>
	);
};

export default HeroScene;
