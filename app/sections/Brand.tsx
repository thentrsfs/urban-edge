'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
import { MoveDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Brand = () => {
	const sectionRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const el = sectionRef.current;
			if (!el) return;

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: el,
					start: 'top top',
					end: '+=220%',
					scrub: 1,
					pin: true,
				},
			});

			tl.to('.continue-hint', {
				opacity: 0,
				duration: 0.6,
				ease: 'power3.out',
			});

			tl.fromTo(
				'.brand-title',
				{ opacity: 0, filter: 'blur(20px)', y: 20 },
				{
					opacity: 1,
					filter: 'blur(0px)',
					y: 0,
					duration: 1.2,
					ease: 'power3.out',
				},
			);
			tl.to(
				'.go-hint',
				{
					opacity: 1,
					duration: 0.6,
					ease: 'power3.out',
				},
				'+=0.6',
			);

			tl.to('.brand-title', {
				opacity: 1,
				filter: 'blur(0px)',
				y: 0,
				duration: 2,
				ease: 'power3.out',
			});
			tl.to('.go-hint', {
				opacity: 0,
				duration: 0.8,
				ease: 'power3.out',
			});

			tl.to('.brand-title', {
				opacity: 0,
				filter: 'blur(20px)',
				y: -20,
				duration: 2,
				ease: 'power3.out',
			});
		},
		{ scope: sectionRef },
	);

	return (
		<section
			ref={sectionRef}
			className='h-dvh flex flex-col items-center justify-center mb-[180vh] relative'>
			<div className='absolute top-10 left-1/2 -translate-x-1/2 text-lg font-heading tracking-widest text-muted uppercase items-center flex flex-col continue-hint'>
				<span>Continue</span> <MoveDown size={20} />
			</div>
			<h1 className='lg:text-8xl text-6xl brand-title font-bold font-heading tracking-wide px-6 text-center'>
				DESIGNED FOR THE UNSEEN
			</h1>
			<div className='absolute bottom-10 left-1/2 -translate-x-1/2 text-lg font-heading tracking-widest text-muted uppercase items-center flex flex-col go-hint opacity-0'>
				<span>Go Further</span> <MoveDown size={20} />
			</div>
		</section>
	);
};

export default Brand;
