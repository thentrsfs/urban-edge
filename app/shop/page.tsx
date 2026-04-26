'use client';

import Image from 'next/image';
import Link from 'next/link';

import { products } from '../data/products';

const Shop = () => {
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
		<div className='relative lg:px-30 px-6'>
			<div className='lg:pt-35 lg:pb-8 text-white flex flex-col gap-2 w-full border-b border-muted/50 '>
				<h1 className='lg:text-7xl text-[40px] font-bold font-heading tracking-wide'>
					SHOP
				</h1>
				<p className='text-sm tracking-widest text-muted'>
					— 12 PIECES / 3 COLLECTIONS
				</p>
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-2 items-center text-white pt-8'>
				<div className='flex flex-col max-w-md gap-4'>
					<span className='text-muted/80 text-xs tracking-[0.3em] uppercase'>
						Featured Piece
					</span>
					<h2 className='font-bold lg:text-6xl tracking-wide text-4xl leading-16'>
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
						className='object-cover group-hover:scale-100 scale-105 transition-all duration-600 group-hover:blur-xs '
						priority={true}
					/>
					<div className='absolute top-0 left-0 w-full h-full bg-black/10' />
				</div>
			</div>

			{Object.entries(groupedProducts).map(([category, items]) => (
				<section key={category}>
					<h2>{category}</h2>

					<div className='grid grid-cols-2 lg:grid-cols-3 gap-6'>
						{items.map((product) => (
							<div key={product.id}>
								<div className='relative h-100 lg:h-150 w-full'>
									<Image
										src={product.image}
										alt={product.name}
										fill
										className='object-cover'
									/>
								</div>
								<h3>{product.name}</h3>
								<p>{product.description}</p>
								<p>${product.price}</p>
							</div>
						))}
					</div>
				</section>
			))}
		</div>
	);
};

export default Shop;
