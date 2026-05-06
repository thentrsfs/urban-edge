'use client';

import Link from 'next/link';

export default function CancelPage() {
	return (
		<div className='min-h-screen flex flex-col items-center justify-center text-center px-6 relative '>
			<h1 className='text-4xl uppercase text-red-500 font-semibold'>
				Payment Failed
			</h1>

			<p className='text-white/60 mt-4 max-w-md'>
				Your payment was not completed. You can try again or return to your
				cart.
			</p>

			<div className='flex gap-4 mt-8'>
				<Link
					href='/cart'
					className='px-6 py-3 border border-white/20 uppercase tracking-widest text-white hover:border-white transition'>
					Back to Cart
				</Link>

				<Link
					href='/shop'
					className='px-6 py-3 bg-white text-black uppercase tracking-widest hover:bg-white/80 transition'>
					Continue Shopping
				</Link>
			</div>
		</div>
	);
}
