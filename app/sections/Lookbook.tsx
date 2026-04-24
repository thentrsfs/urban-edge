'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
import Image from 'next/image';

import { products } from '../data/products';
import { MoveRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Lookbook = () => {
	const scrollContainer = useRef<HTMLDivElement>(null);
	const scrollSection = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const el = scrollContainer.current;
		const section = scrollSection.current;
		if (!el || !section) return;

		const cards = gsap.utils.toArray('.lookbook-card');

		const intro = gsap.to(cards, {
			opacity: 1,
			y: 0,
			stagger: 0.2,
			duration: 0.8,
			ease: 'power3.out',
			paused: true,
		});

		const title = gsap.to('.lookbook-title', {
			opacity: 1,
			y: 0,
			duration: 0.8,
			ease: 'power3.out',
			paused: true,
		});

		ScrollTrigger.create({
			trigger: section,
			start: 'top top+=500',
			onEnter: () => {
				intro.play();
				title.play();
			},
		});

		const scrollAmount = el.offsetWidth - window.innerWidth;

		gsap.to(el, {
			x: -scrollAmount,
			ease: 'none',
			scrollTrigger: {
				trigger: section,
				start: 'top top',
				end: () => `+=${scrollAmount}`,
				pinSpacing: true,
				scrub: true,
				pin: true,
				invalidateOnRefresh: true,
			},
		});

		gsap.to('.moving-hint', {
			opacity: 0,
			scrollTrigger: {
				trigger: section,
				start: 'top top',
				end: '+=1000',
				scrub: 1,
			},
		});
	});

	return (
		<section
			ref={scrollSection}
			id='lookbook'
			className='h-screen relative overflow-hidden'>
			<h2 className='lg:text-7xl text-[40px] font-bold font-heading tracking-wide featured-title absolute lg:left-30 lg:top-6 left-6 top-4 lookbook-title opacity-0 translate-y-10'>
				Lookbook
			</h2>
			<div
				ref={scrollContainer}
				className='relative flex gap-8 h-full w-fit lg:px-30 px-6'>
				{products.map((product) => (
					<div
						key={product.id}
						className='w-max h-full flex items-center justify-center lookbook-card opacity-0 translate-y-10 relative'>
						<div className='flex flex-col gap-6'>
							<div className='relative lg:w-100 w-80 h-100 lg:h-140'>
								<div className='absolute inset-0 bg-bg/10 z-10' />
								<Image
									src={product.image}
									alt={product.name}
									fill
									sizes='(max-width: 768px) 85vw, 20vw'
									className=' object-cover'
								/>
							</div>
							<div className='text-center'>
								<h2 className='lg:text-3xl text-2xl font-semibold tracking-wider font-heading'>
									{product.name}
								</h2>
								<p className='text-muted uppercase lg:text-base text-sm'>
									{product.description}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className='absolute bottom-10 right-6 lg:right-30 text-xl font-heading flex tracking-widest text-muted uppercase items-center gap-2 moving-hint'>
				<span>Keep moving</span> <MoveRight size={20} />
			</div>
		</section>
	);
};

export default Lookbook;
