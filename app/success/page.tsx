'use client';

import Link from 'next/dist/client/link';
import { useCart } from '../store/cart';
import { useEffect } from 'react';

const SuccessPage = () => {
	const clearCart = useCart((state) => state.clearCart);
	useEffect(() => {
		clearCart();
	}, []);
	return (
		<div className='min-h-screen flex items-center justify-center relative flex-col text-center gap-6 px-6'>
			<h1 className='text-4xl font-bold text-white'>
				Thank you for your purchase!
			</h1>

			<Link
				href='/shop'
				className='border border-white px-7 py-3 w-fit text-sm tracking-widest uppercase backdrop-blur-lg lg:mt-6 mt-2 text-white hover:bg-white hover:text-bg font-medium transition cursor-pointer'>
				Return to Shop
			</Link>
		</div>
	);
};

export default SuccessPage;
