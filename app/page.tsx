'use client';
import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { Group } from 'three';

import Hero from './components/sections/Hero';
import LatestDrops from './components/sections/LatestDrops';
import SplashScreen from './components/ui/SplashScreen';
import Lookbook from './components/sections/Lookbook';
import CTA from './components/sections/CTA';
import Brand from './components/sections/Brand';
import Logo from './components/sections/Logo';

import useIsMobile from './hooks/useIsMobile';
import { useUI } from './context/UIProvider';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Home() {
	const hoodieRef = useRef<Group | null>(null);
	const heroRef = useRef<HTMLDivElement | null>(null);
	const featuredRef = useRef<HTMLDivElement | null>(null);

	const [isReady, setIsReady] = useState(false);

	const isMobile = useIsMobile();
	const { splashScreen } = useUI();

	// Scroll animation
	useGSAP(() => {
		if (!isReady || splashScreen) return;

		const hoodie = hoodieRef.current;
		const hero = heroRef.current;
		if (!hoodie || !hero) return;

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: hero,
				start: 'top top',
				end: '+=150%',
				scrub: 1.5,
				pin: true,
			},
		});

		tl.to('.hero-text', {
			opacity: 0,
			y: -80,
			ease: 'power3.out',
		});

		tl.to(
			hoodie.position,
			{
				x: 0.5,
				y: isMobile ? -3.4 : -5.5,
				z: 2,
				ease: 'power2.inOut',
			},
			0.1,
		);

		tl.to(
			hoodie.scale,
			{
				x: isMobile ? 7 : 10,
				y: isMobile ? 7 : 10,
				z: isMobile ? 7 : 10,
				ease: 'power3.out',
			},
			0.1,
		);
		tl.from(
			'.product-info',
			{
				opacity: 0,
				y: 80,
				ease: 'power3.out',
				duration: 1,
			},
			0.4,
		);
	}, [isReady, splashScreen]);

	return (
		<div className='relative'>
			{splashScreen && <SplashScreen />}
			<div
				className={`${splashScreen ? 'opacity-0' : 'opacity-100'} transition-opacity duration-700 flex flex-col text-text-primary relative`}>
				<Hero
					heroRef={heroRef}
					hoodieRef={hoodieRef}
					onModelReady={() => setIsReady(true)}
				/>
				<LatestDrops featuredRef={featuredRef} />
				<Brand />
				<Lookbook />
				<CTA />
				<Logo />
			</div>
		</div>
	);
}
