'use client';

import { useCart } from '@/app/store/cart';
import { toast } from 'sonner';

type Props = {
	product: {
		id: number;
		name: string;
		price: number;
		image: string;
	};
};

const AddToCartBtn = ({ product }: Props) => {
	const { addToCart } = useCart((state) => state);

	const handleAddToCart = () => {
		addToCart({
			...product,
			quantity: 1,
		});
		toast.success(`${product.name} added to cart!`);
	};
	return (
		<button
			onClick={handleAddToCart}
			className='border border-white px-7 py-3 w-fit text-sm tracking-widest uppercase backdrop-blur-lg lg:mt-10 mt-2 text-white hover:bg-white hover:text-bg font-medium transition cursor-pointer'>
			Add to cart
		</button>
	);
};

export default AddToCartBtn;
