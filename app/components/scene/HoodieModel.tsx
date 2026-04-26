'use client';
import { useGLTF } from '@react-three/drei';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Group } from 'three';

import useIsMobile from '@/app/hooks/useIsMobile';

gsap.registerPlugin(useGSAP);

const HoodieModel = ({
	modelRef,
	onModelReady,
	showHoodie,
}: {
	modelRef: React.RefObject<Group | null>;
	onModelReady: () => void;
	showHoodie: boolean;
}) => {
	const isMobile = useIsMobile();
	const groupRef = useRef<Group>(null);

	const { scene } = useGLTF('/models/hoodie.glb');

	useGSAP(() => {
		const el = groupRef.current;
		if (!el) return;
		const tl = gsap.timeline();

		tl.to(
			el.rotation,
			{
				y: Math.PI * 2,
				duration: 15,
				ease: 'none',
				repeat: -1,
			},
			1,
		);
	});

	useLayoutEffect(() => {
		if (!groupRef.current) return;

		requestAnimationFrame(() => {
			if (modelRef) modelRef.current = groupRef.current;
			if (onModelReady) onModelReady();
		});
	});

	return (
		<group
			ref={(node) => {
				groupRef.current = node;
				if (modelRef && node) modelRef.current = node;
			}}
			visible={showHoodie}
			position={isMobile ? [0, -4.6, 0] : [3.5, -4, 0]}
			scale={isMobile ? 6 : 8}>
			<primitive
				object={scene}
				style={{ filter: 'drop-shadow(0px 30px 60px rgba(0,0,0,0.6))' }}
			/>
		</group>
	);
};

export default HoodieModel;
