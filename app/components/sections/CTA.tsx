'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import Link from 'next/link';

import { MoveDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);
const CTA = () => {
	const sectionRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const el = sectionRef.current;
		if (!el) return;

		const mm = gsap.matchMedia();

		mm.add('(min-width: 768px)', () => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: el,
					start: 'top top',
					end: '+=150%',
					scrub: 1,
					pin: true,
				},
			});

			tl.to('.enter-hint', {
				opacity: 0,
				duration: 0.6,
				ease: 'power3.out',
			});

			tl.fromTo(
				'.cta-text',
				{ opacity: 0, filter: 'blur(20px)', y: 20 },
				{
					opacity: 1,
					filter: 'blur(0px)',
					y: 0,
					duration: 1.2,
					ease: 'power3.out',
				},
			);

			tl.to('.cta-text', {
				opacity: 1,
				filter: 'blur(0px)',
				y: 0,
				duration: 2,
				ease: 'power3.out',
			});
			tl.to('.cta-text', {
				opacity: 0,
				filter: 'blur(20px)',
				y: -20,
				duration: 2,
				ease: 'power3.out',
			});
		});

		mm.add('(max-width: 767px)', () => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: el,
					start: 'top top',
					end: '+=300%',
					scrub: true,
					pin: true,
				},
			});

			tl.to('.enter-hint', {
				opacity: 0,
				duration: 0.6,
				ease: 'power3.out',
			});
			tl.fromTo(
				'.cta-text',
				{ opacity: 0, filter: 'blur(20px)', y: 20 },
				{
					opacity: 1,
					filter: 'blur(0px)',
					y: 0,
					duration: 1.2,
					ease: 'power3.out',
				},
			);

			tl.to('.cta-text', {
				opacity: 1,
				filter: 'blur(0px)',
				y: 0,
				duration: 2,
				ease: 'power3.out',
			});
			tl.to('.cta-text', {
				opacity: 0,
				filter: 'blur(20px)',
				y: -20,
				duration: 2,
				ease: 'power3.out',
			});
		});
	});
	return (
		<section
			ref={sectionRef}
			className='h-dvh flex flex-col items-center justify-center lg:mb-80 mb-[160vh] px-6 text-center relative z-15'>
			<div className='absolute top-10 left-1/2 -translate-x-1/2 text-lg font-heading tracking-widest text-muted items-center flex flex-col enter-hint'>
				<span>ENTER THE CORE</span> <MoveDown size={20} />
			</div>
			<div className='flex flex-col items-center justify-center cta-text'>
				<h2 className='lg:text-8xl text-6xl font-bold font-heading tracking-wide mb-6'>
					READY TO ENTER?
				</h2>
				<Link href='/shop'>
					<button
						type='button'
						className='group cta-btn relative px-8 py-3 tracking-[0.2em] text-white cursor-pointer'>
						SHOP COLLECTION
						<span className='absolute left-0 bottom-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full' />
					</button>
				</Link>
				<p className='text-xs text-muted/80 tracking-widest mt-4'>
					LIMITED DROP • 2026
				</p>
			</div>
		</section>
	);
};

export default CTA;
