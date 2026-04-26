'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MoveRight, Plus } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

import { products } from '../data/products';
import { useUI } from '../context/UIProvider';

import SplashScreen from '../components/ui/SplashScreen';

gsap.registerPlugin(ScrollTrigger, useGSAP);
const Shop = () => {
	const sectionRef = useRef<HTMLDivElement>(null);

	const { splashScreen } = useUI();

	useGSAP(
		() => {
			const el = sectionRef.current;
			if (!el) return;

			const tl = gsap.timeline({});

			tl.to('.shop-title', {
				opacity: 1,
				y: 0,
				duration: 1.2,
				ease: 'power3.out',
				delay: 0.2,
			});

			tl.to(
				'.shop-divider',
				{
					width: '100%',
					duration: 1.2,
					ease: 'power3.out',
				},
				'-=0.6',
			);

			tl.to(
				'.featured-piece',
				{
					opacity: 1,
					y: 0,
					duration: 1.2,
					ease: 'power3.out',
				},
				'-=1',
			);
		},
		{ scope: sectionRef },
	);

	useGSAP(
		() => {
			const categories = gsap.utils.toArray(
				'.category-section',
			) as HTMLDivElement[];

			categories.forEach((section) => {
				const title = section.querySelector('.category-title');
				const cards = section.querySelectorAll('.product-card');

				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: section,
						start: 'top 70%',
					},
				});

				tl.to(title, {
					opacity: 1,
					y: 0,
					duration: 0.6,
					ease: 'power3.out',
				});

				tl.to(
					cards,
					{
						opacity: 1,
						y: 0,
						stagger: 0.1,
						duration: 0.6,
						ease: 'power3.out',
					},
					'-=0.3',
				);
			});
		},
		{ scope: sectionRef },
	);
	const groupedProducts = products.reduce(
		(acc, product) => {
			if (!acc[product.category]) {
				acc[product.category] = [];
			}

			acc[product.category].push(product);
			return acc;
		},
		{} as Record<string, typeof products>,
	);

	return (
		<div
			ref={sectionRef}
			className='relative lg:px-30 px-6 lg:py-35 py-25 pb-80'>
			{splashScreen && <SplashScreen />}
			<div className='pb-6 text-white flex flex-col gap-2 shop-title w-full opacity-0 translate-y-10'>
				<h1 className='lg:text-7xl text-[40px] font-bold font-heading tracking-wide '>
					SHOP
				</h1>
				<p className='text-sm tracking-widest text-muted'>
					— 12 PIECES / 3 COLLECTIONS
				</p>
				<div className='w-0 h-px bg-muted/50 mt-6 shop-divider' />
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-2 items-center max-sm:gap-6 text-white pt-6 opacity-0 translate-y-10 featured-piece'>
				<div className='flex flex-col max-w-md gap-4 max-sm:order-1'>
					<span className='text-muted/80 text-xs tracking-[0.3em] uppercase'>
						Featured Piece
					</span>
					<h2 className='font-bold lg:text-8xl tracking-wide text-4xl font-heading'>
						{products[0].name}
					</h2>
					<p className='lg:text-lg text-base text-muted/90 mb-4'>
						{products[0].description}
					</p>
					<p className='text-lg text-white/90 font-medium tracking-wide mb-4'>
						${products[0].price}
					</p>
					<p className='text-xs tracking-widest text-muted'>
						LIMITED DROP · 2026
					</p>
					<Link
						className='group'
						href={`/shop/${products[0].id}`}>
						<button className='border border-white px-7 py-3 w-fit text-sm tracking-[0.2em] mt-2 text-white hover:bg-white hover:text-bg font-medium transition cursor-pointer'>
							VIEW PRODUCT
						</button>
					</Link>
				</div>
				<div className='relative h-100 lg:h-150 w-full group overflow-hidden cursor-pointer hover:rotate-2 transition-all duration-600'>
					<div className='absolute inset-0 bg-black/40 z-10 group-hover:opacity-100 opacity-0 transition-all duration-300 flex justify-center items-center'>
						<Link href={`/shop`}>
							<button className='border border-white px-7 py-3 w-fit text-sm tracking-widest lg:mt-6 mt-4 text-white hover:bg-white hover:text-bg font-medium transition cursor-pointer -rotate-2'>
								SHOP NOW
							</button>
						</Link>
					</div>
					<Image
						src={products[0].image}
						alt={products[0].name}
						fill
						sizes='(max-width: 768px) 90vw, 45vw'
						className='object-cover group-hover:scale-100 scale-105 transition-all duration-600 group-hover:blur-xs '
						priority={true}
					/>
					<div className='absolute top-0 left-0 w-full h-full bg-black/10' />
				</div>
			</div>

			{Object.entries(groupedProducts).map(([category, items]) => (
				<section
					key={category}
					className='lg:mt-25 mt-15 category-section'>
					<h2 className='font-bold lg:text-6xl tracking-wide text-4xl leading-16 font-heading mb-6 text-white category-title opacity-0 translate-y-20'>
						{category}
					</h2>

					<div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
						{items.map((product) => (
							<div
								key={product.id}
								className='relative group overflow-hidden product-card opacity-0 translate-y-20'>
								<div className='relative h-100 lg:h-150 w-full'>
									<Image
										src={product.image}
										alt={product.name}
										fill
										sizes='(max-width: 768px) 90vw, 15vw'
										className='object-cover'
										loading='eager'
									/>
								</div>
								<div className='absolute inset-0 bg-linear-to-t from-bg via-bg/20 to-transparent opacity-80' />
								<div className='absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300' />
								<div className='absolute flex flex-col gap-2 bottom-0 left-0 p-6 translate-y-20 group-hover:translate-y-0 transition-all duration-300'>
									<h3 className='text-2xl text-white font-heading'>
										{product.name}
									</h3>
									<div className='opacity-0 group-hover:opacity-100 transition-all duration-300'>
										<p className='text-white/70 text-sm'>
											{product.description}
										</p>
										<p className='text-white text-sm mt-1'>${product.price}</p>

										<button
											type='button'
											className='flex items-center gap-2 relative tracking-widest text-white cursor-pointer mt-4 hover:tracking-[0.2em] transition-all duration-300'>
											<MoveRight size={16} />
											<span>VIEW</span>
										</button>
									</div>
								</div>
								<button className='absolute right-6 bottom-6 text-white translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer hover:scale-110'>
									<Plus />
								</button>
							</div>
						))}
					</div>
				</section>
			))}
		</div>
	);
};

export default Shop;
