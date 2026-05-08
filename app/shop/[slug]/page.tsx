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
		<div className='min-h-screen flex flex-col items-center justify-center text-2xl font-bold text-white'>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
				<div className='lg:w-150 lg:h-150 relative'>
					<Image
						src={product.image}
						alt={product.name}
						fill
						sizes='(max-width: 768px) 90vw, 50vw'
						className='object-cover rounded-lg'
					/>
				</div>
				<div>
					<h1 className='text-6xl uppercase font-heading tracking-wide'>
						{product.name}
					</h1>
					<p className='mt-2 text-muted'>{product.description}</p>
					<p className='mt-4 text-white/60'>{product.price} Kč</p>

					<button className='border border-white px-7 py-3 w-fit text-sm tracking-widest uppercase backdrop-blur-lg lg:mt-6 mt-2 text-white hover:bg-white hover:text-bg font-medium transition cursor-pointer'>
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
