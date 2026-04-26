'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { useUI } from '@/app/context/UIProvider';

gsap.registerPlugin(useGSAP);
const SplashScreen = () => {
	const ref = useRef<HTMLDivElement>(null);
	const { splashScreen, setSplashScreen } = useUI();

	// Splash Screen
	useGSAP(
		() => {
			if (!splashScreen) return;

			const tl = gsap.timeline();

			tl.to('.splash-logo', {
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: 'power3.out',
				delay: 0.2,
			});

			tl.to(
				'.splash-logo',
				{
					opacity: 0,
					y: -40,
					duration: 0.6,
					ease: 'power3.in',
					onComplete: () => setSplashScreen(false),
				},
				'+=0.4',
			);

			tl.to(
				'.splash',
				{
					opacity: 0,
					duration: 1,
					ease: 'power4.inOut',
				},
				'-=0.4',
			);
		},
		{ scope: ref },
	);
	return (
		<div
			ref={ref}
			className='splash fixed inset-0 bg-bg flex items-center justify-center z-50'>
			<h1 className='splash-logo opacity-0 translate-y-10 text-white lg:text-7xl text-5xl font-heading'>
				URBANEDGE
			</h1>
		</div>
	);
};

export default SplashScreen;
