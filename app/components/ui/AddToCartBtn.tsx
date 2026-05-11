'use client';

import { useCart } from '@/app/store/cart';
import { toast } from 'sonner';
import { useState } from 'react';
import SizeSelector from './SizeSelector';

type Product = {
	id: number;
	name: string;
	slug: string;
	description: string;
	image: string;
	price: number;
};

const AddToCartBtn = ({ product }: { product: Product }) => {
	const { addToCart } = useCart((state) => state);
	const [selectedSize, setSelectedSize] = useState<string | null>(null);

	const handleAddToCart = () => {
		if (!selectedSize) {
			toast.error('Please select a size.');
			return;
		}
		addToCart({
			...product,
			size: selectedSize,
			quantity: 1,
		});

		setSelectedSize(null);

		toast.success(`${product.name} added to cart!`);
	};
	return (
		<div className='flex flex-col gap-6 lg:mt-10 mt-2 relative'>
			<SizeSelector
				selectedSize={selectedSize}
				onSelect={setSelectedSize}
			/>
			<button
				onClick={handleAddToCart}
				className='border border-white px-7 py-3 w-fit text-sm tracking-widest uppercase backdrop-blur-lg  text-white hover:bg-white hover:text-bg font-medium transition cursor-pointer'>
				Add to cart
			</button>
		</div>
	);
};

export default AddToCartBtn;
