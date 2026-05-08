import { products, latestProducts } from '@/app/data/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';

import AddToCartBtn from '@/app/components/ui/AddToCartBtn';

const ProductPage = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}) => {
	const { slug } = await params;
	const allProducts = [...products, ...latestProducts];
	const product = allProducts.find((p) => p.slug === slug);
	const relatedProducts = products
		.filter((p) => product && p.id !== product.id)
		.slice(0, 3);

	if (!product) {
		notFound();
	}

	return (
		<div className='min-h-screen flex flex-col items-center justify-center font-bold text-white lg:p-30 px-6 py-30'>
			<section className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center lg:w-7xl w-full'>
				<div className='lg:w-full lg:h-[75vh] h-[50vh] relative overflow-hidden'>
					<Image
						src={product.image}
						alt={product.name}
						fill
						sizes='(max-width: 768px) 90vw, 50vw'
						className='object-cover hover:scale-105 transition-all duration-500'
						loading='eager'
					/>
				</div>
				<div>
					<h1 className='lg:text-7xl text-5xl uppercase font-heading tracking-wide'>
						{product.name}
					</h1>
					<p className='mt-4 text-muted/80 tracking-wider uppercase'>
						{product.description}
					</p>
					<p className='mt-10 text-white/90 text-lg'>{product.price} Kč</p>

					<AddToCartBtn product={product} />
				</div>
			</section>
			<section className='my-40 border-t border-muted/50 pt-16 w-full'>
				<h2 className='text-3xl uppercase font-heading tracking-wide mb-10 text-center'>
					You may also like
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-10 lg:w-7xl mx-auto'>
					{relatedProducts.map((p) => (
						<Link
							href={`/shop/${p.slug}`}
							key={p.id}>
							<div className='relative group h-100 overflow-hidden rounded after:absolute after:inset-0 after:bg-black/10'>
								<Image
									src={p.image}
									alt={p.name}
									fill
									sizes='(max-width: 768px) 90vw, 33vw'
									className='object-cover group-hover:scale-105 transition-all duration-500'
								/>
								<div className='lg:hidden absolute inset-0 bg-linear-to-t from-black/60 to transparent  ' />
								<div className='absolute inset-0 bg-transparent group-hover:bg-black/30 group-hover:backdrop-blur-[2px] transition-all duration-500'>
									<p className='text-center absolute left-1/2 lg:top-1/2 max-sm:bottom-10 -translate-x-1/2 lg:-translate-y-1/2 lg:opacity-0 group-hover:opacity-100 transition-all duration-500 text-white uppercase tracking-widest font-semibold'>
										View Product <MoveRight className='inline-block' />
									</p>
								</div>
							</div>
							<div className='mt-4 text-center'>
								<h3 className='uppercase font-heading text-2xl'>{p.name}</h3>

								<p className='text-white/60 mt-1'>{p.price} Kč</p>
							</div>
						</Link>
					))}
				</div>
			</section>
		</div>
	);
};

export default ProductPage;
