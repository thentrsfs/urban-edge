'use client';

import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

import { useCart } from '../store/cart';

gsap.registerPlugin(ScrollTrigger, useGSAP);
const CartPage = () => {
	const ref = useRef<HTMLDivElement>(null);
	const cart = useCart((state) => state.cart);
	const updateQuantity = useCart((state) => state.updateQuantity);
	const removeFromCart = useCart((state) => state.removeFromCart);

	const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

	useGSAP(() => {
		const el = ref.current;
		if (!el) return;

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				start: 'top 80%',
			},
		});

		tl.to('.cart-title', {
			opacity: 1,
			y: 0,
			duration: 1.2,
			ease: 'power3.out',
		});

		tl.to(
			'.cart-divider',
			{
				width: '100%',
				duration: 1.2,
				ease: 'power3.out',
			},
			'-=0.6',
		);

		tl.to(
			'.cart-preview',
			{
				opacity: 1,
				y: 0,
				duration: 1.2,
				ease: 'power3.out',
			},
			'-=1',
		);

		tl.to(
			'.cart-divider-2',
			{
				width: '100%',
				duration: 1.2,
				ease: 'power3.out',
			},
			'-=0.6',
		);
		tl.to(
			'.total-section',
			{
				opacity: 1,
				y: 0,
				duration: 1.2,
				ease: 'power3.out',
			},
			'-=0.6',
		);
	});

	return (
		<div
			ref={ref}
			className='lg:px-30 px-6 lg:py-35 py-25 text-white relative'>
			<h2 className='lg:text-7xl text-[40px] font-bold font-heading tracking-wide featured-title cart-title opacity-0 translate-y-10'>
				Your Cart
			</h2>
			<div className='w-0 h-px bg-muted/50 mt-6 cart-divider' />
			{cart.length === 0 ? (
				<div className='flex flex-col gap-4 items-center justify-center lg:py-50 py-25 opacity-0 translate-y-10 cart-preview'>
					<h2 className='lg:text-4xl text-[40px] font-semibold '>
						Your cart is empty
					</h2>
				</div>
			) : (
				<div className='grid grid-cols-2 lg:py-8 opacity-0 translate-y-10 cart-preview'>
					<div className='flex flex-col gap-6'>
						{cart.map((item) => (
							<div
								key={item.id}
								className='flex gap-6'>
								<div className='w-24 h-24 lg:w-36 lg:h-36 relative'>
									<Image
										src={item.image}
										alt={item.name}
										fill
										className='object-cover rounded'
										sizes='(max-width: 768px) 80vw, 8vw'
									/>
								</div>
								<div className='flex flex-col gap-2.5 items-center '>
									<h3 className='lg:text-2xl text-lg font-heading tracking-wide'>
										{item.name}
									</h3>
									<div className='flex items-center gap-4'>
										<button
											onClick={() => updateQuantity(item.id, item.quantity - 1)}
											className='bg-white cursor-pointer text-bg py-1 px-3 rounded-full hover:bg-white/80 disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted'
											disabled={item.quantity === 1}>
											-
										</button>
										<span className='font-semibold w-5 text-center'>
											{item.quantity}
										</span>
										<button
											onClick={() => updateQuantity(item.id, item.quantity + 1)}
											className='bg-white cursor-pointer text-bg py-1 px-3 rounded-full hover:bg-white/80'>
											+
										</button>
									</div>
									<p className='text-lg font-semibold'>
										${item.price.toFixed(2)}
									</p>
									<button
										onClick={() => removeFromCart(item.id)}
										className='text-red-500 hover:underline cursor-pointer'>
										Remove
									</button>
								</div>
							</div>
						))}
					</div>

					<div></div>
				</div>
			)}
			<div className='w-0 h-px bg-muted/50 cart-divider-2' />
			<div className='flex justify-end mt-6 gap-10 items-center total-section opacity-0 translate-y-10'>
				<h2 className='text-2xl font-bold'>Total: ${total.toFixed(2)}</h2>
				<button className='bg-white cursor-pointer text-gray-800 py-2 px-4 rounded hover:bg-white/80 transition'>
					Checkout
				</button>
			</div>
		</div>
	);
};

export default CartPage;
