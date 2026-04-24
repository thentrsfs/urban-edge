'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';

import { latestProducts } from '../data/products';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const LatestDrops = ({
	featuredRef,
}: {
	featuredRef: React.RefObject<HTMLDivElement | null>;
}) => {
	useGSAP(
		() => {
			const el = featuredRef.current;
			if (!el) return;

			const mm = gsap.matchMedia();

			mm.add('(min-width: 768px)', () => {
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: el,
						start: 'top 70%',
					},
				});

				tl.to('.featured-title', {
					opacity: 1,
					y: 0,
					ease: 'power3.out',
				});

				tl.to('.featured-card', {
					opacity: 1,
					y: 0,
					stagger: 0.15,
					ease: 'power3.out',
					duration: 0.8,
				});
			});

			mm.add('(max-width: 767px)', () => {
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: el,
						start: 'top 60%',
						toggleActions: 'play none none none',
					},
				});

				tl.to('.featured-title', {
					opacity: 1,
					y: 0,
					ease: 'power3.out',
				});

				tl.to(
					'.featured-card',
					{
						opacity: 1,
						y: 0,
						stagger: 0.2,
						ease: 'power3.out',
					},
					'-=0.2',
				);
			});
		},
		{ scope: featuredRef },
	);

	return (
		<section
			ref={featuredRef}
			id='latest-drops'
			className='lg:min-h-dvh lg:px-30 lg:py-10 px-6 lg:mt-[150vh] mt-[160vh]  mb-15 overflow-x-auto snap-x snap-mandatory no-scrollbar z-11'>
			<h1 className='lg:text-7xl text-[40px] font-bold font-heading tracking-wide opacity-0 translate-y-20 featured-title max-sm:absolute'>
				Latest Drops
			</h1>
			<div className='lg:grid lg:grid-cols-3 lg:gap-8 gap-4 flex max-sm:w-max lg:mt-10 mt-30'>
				{latestProducts.map((product) => (
					<div
						key={product.id}
						className='flex flex-col gap-6 featured-card opacity-0 translate-y-30 group snap-center'>
						<div className='relative lg:h-160 h-100 overflow-hidden group-hover:rotate-2 transition-all duration-300'>
							<div className='absolute inset-0 bg-black/15 z-10' />
							<div className='absolute inset-0 bg-black/40 z-10 group-hover:opacity-100 opacity-0 transition-all duration-300 flex justify-center items-center'>
								<button className='border border-white px-7 py-3 w-fit text-sm tracking-widest lg:mt-6 mt-4 text-white hover:bg-white hover:text-bg font-medium transition cursor-pointer -rotate-2'>
									SHOP NOW
								</button>
							</div>
							<div className='relative lg:w-full lg:h-full w-75 h-100'>
								<Image
									src={product.image}
									fill
									sizes='(max-width: 768px) 80vw, 25vw'
									alt='Product'
									className=' object-cover group-hover:scale-100 scale-105 transition-transform duration-300 group-hover:blur-xs'
								/>
							</div>
						</div>
						<div className='text-center'>
							<p className='tracking-wider text-white lg:text-3xl text-2xl font-semibold font-heading'>
								{product.name}
							</p>
							<p className='tracking-widest uppercase text-sm text-muted/80 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300'>
								{product.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default LatestDrops;
