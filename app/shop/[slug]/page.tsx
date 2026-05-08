import { products, latestProducts } from '@/app/data/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';

const ProductPage = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}) => {
	const { slug } = await params;
	const allProducts = [...products, ...latestProducts];
	const product = allProducts.find((p) => p.slug === slug);

	if (!product) {
		notFound();
	}

	return (
		<div className='min-h-screen flex flex-col items-center justify-center font-bold text-white lg:py-30 py-6'>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center lg:w-7xl'>
				<div className='lg:w-full lg:h-[75vh] relative overflow-hidden'>
					<Image
						src={product.image}
						alt={product.name}
						fill
						sizes='(max-width: 768px) 90vw, 50vw'
						className='object-cover hover:scale-105 transition-all duration-500'
					/>
				</div>
				<div>
					<h1 className='text-7xl uppercase font-heading tracking-wide'>
						{product.name}
					</h1>
					<p className='mt-4 text-muted/80 tracking-wider uppercase'>
						{product.description}
					</p>
					<p className='mt-10 text-white/90 text-lg'>{product.price} Kč</p>

					<button className='border border-white px-7 py-3 w-fit text-sm tracking-widest uppercase backdrop-blur-lg lg:mt-10 mt-2 text-white hover:bg-white hover:text-bg font-medium transition cursor-pointer'>
						Add to cart
					</button>
				</div>
			</div>
			<div className='mt-20 text-center'>
				<h2>You may also like</h2>
			</div>
		</div>
	);
};

export default ProductPage;
