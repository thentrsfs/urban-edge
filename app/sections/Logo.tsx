'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);
const Logo = () => {
	const sectionRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const el = sectionRef.current;
		if (!el) return;

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				start: 'top top',
				scrub: 1,
				pin: true,
				pinSpacing: true,
			},
		});
		tl.fromTo(
			'.logo-title',
			{ opacity: 0, filter: 'blur(20px)', y: 20 },
			{
				opacity: 1,
				filter: 'blur(0px)',
				y: 0,
				duration: 1.2,
				ease: 'power3.out',
			},
		);

		tl.to('.logo-title', {
			scale: 1.05,
			ease: 'power3.out',
		});
		tl.fromTo(
			'.logo-text',
			{ opacity: 0 },
			{ opacity: 1, duration: 1.2, ease: 'power3.out' },
		);
	});
	return (
		<div
			ref={sectionRef}
			className='h-dvh flex flex-col items-center justify-center px-6 text-center'>
			<div className='flex flex-col items-center'>
				<h1
					onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
					className='lg:text-9xl text-7xl font-bold font-heading cursor-pointer select-none logo-title'>
					URBANEDGE
				</h1>
				<p className='text-muted/80 text-sm tracking-widest mt-2 logo-text'>
					BUILT FOR THE UNSEEN
				</p>
			</div>
		</div>
	);
};

export default Logo;
