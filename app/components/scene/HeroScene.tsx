'use client';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import HoodieModel from '@/app/components/scene/HoodieModel';
import { Group } from 'three';

const HeroScene = ({
	hoodieRef,
	onModelReady,
	showHoodie,
}: {
	hoodieRef: React.RefObject<Group | null>;
	onModelReady: () => void;
	showHoodie: boolean;
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
				showHoodie={showHoodie}
			/>
		</Canvas>
	);
};

export default HeroScene;
