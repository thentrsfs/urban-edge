'use client';

import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

import { useCart } from '../store/cart';
import { useUI } from '../store/ui';

import SplashScreen from '../components/ui/SplashScreen';

gsap.registerPlugin(ScrollTrigger, useGSAP);
const CartPage = () => {
	const ref = useRef<HTMLDivElement>(null);
	const cart = useCart((state) => state.cart);
	const splashScreen = useUI((state) => state.splashScreen);
	const updateQuantity = useCart((state) => state.updateQuantity);
	const removeFromCart = useCart((state) => state.removeFromCart);

	const subtotal = cart.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0,
	);

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
			{splashScreen && <SplashScreen />}
			<div className='lg:max-w-6xl mx-auto'>
				<h2 className='lg:text-7xl text-[40px] font-bold font-heading tracking-wide featured-title cart-title opacity-0 translate-y-10'>
					Your Cart
				</h2>
				<div className='bg-white/5 px-6 rounded-sm backdrop-blur-xl mt-6 border border-white/15 shadow-[0_10px_40px_rgba(0,0,0,0.4)]'>
					{cart.length === 0 ? (
						<div className='flex flex-col gap-4 items-center justify-center lg:py-50 py-25 opacity-0 translate-y-10 cart-preview'>
							<h2 className='lg:text-4xl text-[40px] font-semibold '>
								Your cart is empty
							</h2>
						</div>
					) : (
						<div className='grid lg:grid-cols-2 lg:py-8 py-6 opacity-0 translate-y-10 cart-preview '>
							<div className='flex flex-col gap-4  divide-y divide-muted/50'>
								{cart.map((item) => (
									<div
										key={item.id}
										className='flex lg:gap-6 max-sm:justify-between items-center pb-5'>
										<div className='w-46 h-46 lg:w-40 lg:h-40 relative'>
											<Image
												src={item.image}
												alt={item.name}
												fill
												className='object-cover rounded'
												sizes='(max-width: 768px) 80vw, 8vw'
											/>
										</div>
										<div className='flex flex-col gap-2.5 items-center '>
											<h3 className='lg:text-2xl text-xl font-heading tracking-wide'>
												{item.name}
											</h3>
											<div className='flex items-center gap-2'>
												<button
													onClick={() =>
														updateQuantity(item.id, item.quantity - 1)
													}
													className='border border-white/20 cursor-pointer text-white w-8 h-8 rounded-full hover:border-white transition  disabled:cursor-not-allowed font-semibold '
													disabled={item.quantity === 1}>
													-
												</button>
												<span className='font-semibold w-5 text-center'>
													{item.quantity}
												</span>
												<button
													onClick={() =>
														updateQuantity(item.id, item.quantity + 1)
													}
													className='border border-white/20 cursor-pointer text-white w-8 h-8 rounded-full hover:border-white transition'>
													+
												</button>
											</div>
											<p className='text-lg font-semibold'>
												${item.price.toFixed(2)}
											</p>
											<button
												onClick={() => removeFromCart(item.id)}
												className='text-muted hover:text-white transition text-xs tracking-widest uppercase cursor-pointer'>
												Remove
											</button>
										</div>
									</div>
								))}
							</div>

							<div className='border border-white/15 p-6 rounded-sm flex flex-col gap-6 ml-auto self-end'>
								<h2 className='text-2xl font-bold tracking-wide'>
									Order Summary
								</h2>
								<div className='w-full h-px bg-muted/50' />
								<p className='tracking-wider'>
									Subtotal:{' '}
									<span className='font-semibold tracking-wide'>
										${subtotal.toFixed(2)}
									</span>
								</p>
								<p className='tracking-wider'>
									Shipping:{' '}
									<span className='font-semibold tracking-wide'>$14.99</span>
								</p>
								<div className='w-full h-px bg-muted/50' />
								<p className='text-2xl font-semibold tracking-wider'>
									Total:{' '}
									<span className='font-bold tracking-wide'>
										${subtotal.toFixed(2)}
									</span>
								</p>
								<button className='bg-white cursor-pointer text-bg text-lg font-medium py-2 px-4 lg:px-16 lg:py-2 rounded hover:bg-white/90 transition uppercase tracking-widest '>
									Checkout
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default CartPage;
