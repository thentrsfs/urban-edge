'use client';
import { Group } from 'three';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

import HeroScene from '../scene/HeroScene';

gsap.registerPlugin(ScrollTrigger, useGSAP);

type HeroProps = {
	hoodieRef: React.RefObject<Group | null>;
	heroRef: React.RefObject<HTMLDivElement | null>;
	onModelReady: () => void;
};

const Hero = ({ heroRef, hoodieRef, onModelReady }: HeroProps) => {
	useGSAP(() => {
		const el = heroRef.current;
		if (!el) return;

		gsap.to('.scroll-line', {
			y: 10,
			repeat: -1,
			yoyo: true,
			duration: 1,
			ease: 'sine.inOut',
		});

		gsap.to('.scroll-hint', {
			opacity: 0,
			scrollTrigger: {
				trigger: el,
				start: 'top top',
				end: '+=100',
				scrub: 1,
			},
		});
	});

	return (
		<section
			ref={heroRef}
			className='min-h-dvh relative lg:px-30 px-6 py-10 lg:py-10 flex flex-col z-10'>
			<div className='absolute hero-text lg:top-1/2 lg:left-30 lg:-translate-y-1/2 top-35 flex flex-col lg:gap-4 gap-3 z-11 '>
				<p className='text-sm tracking-widest text-muted'>NEW DROP 2026</p>
				<h1 className='lg:text-8xl text-[40px] font-bold font-heading tracking-wide'>
					New Collection 2026
				</h1>
				<p className='lg:text-2xl text-muted'>Minimal. Timeless. UrbanEdge.</p>
				<button className='border border-white px-7 py-3 w-fit text-sm tracking-widest lg:mt-6 mt-2 text-white hover:bg-white hover:text-bg font-medium transition cursor-pointer'>
					SHOP NOW
				</button>
			</div>
			<HeroScene
				hoodieRef={hoodieRef}
				onModelReady={onModelReady}
			/>
			<div className='absolute lg:top-1/2 lg:left-30 max-sm:bottom-20 lg:-translate-y-1/2 z-10 product-info'>
				<h4
					className='font-bold mb-2 text-4xl lg:text-7xl
font-heading
tracking-wide
text-white'>
					Essential Hoodie
				</h4>
				<p
					className='lg:text-lg
text-secondary/90
font-medium
tracking-wide'>
					Crafted for everyday movement.
				</p>
				<p
					className='lg:text-sm text-xs
text-muted/90
tracking-wider
uppercase'>
					Premium cotton. Minimal design.
				</p>
			</div>
			<div className='absolute bottom-8 left-1/2 -translate-x-1/2 text-lg scroll-hint flex flex-col items-center text-muted'>
				<span className='font-heading tracking-widest'>SCROLL</span>
				<div className='w-0.5 h-6 bg-muted mt-0.5 animate-pulse scroll-line' />
			</div>
		</section>
	);
};

export default Hero;
