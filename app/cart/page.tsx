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

	const shipping = 80;

	const total = subtotal + shipping;

	const handleCheckout = async () => {
		const res = await fetch('/api/checkout', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ cart }),
		});

		const data = await res.json();

		window.location.href = data.url;
	};

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
			'.cart-preview',
			{
				opacity: 1,
				y: 0,
				duration: 1.2,
				ease: 'power3.out',
			},
			'-=1',
		);
	});

	return (
		<div
			ref={ref}
			className='lg:px-30 px-6 lg:py-35 pt-25 pb-60 text-white relative'>
			{splashScreen && <SplashScreen />}
			<div className='lg:max-w-6xl mx-auto'>
				<h2 className='lg:text-7xl text-[40px] font-bold font-heading tracking-wide featured-title cart-title opacity-0 translate-y-10'>
					Your Cart
				</h2>
				<div className='bg-white/5 px-6 rounded-sm backdrop-blur-xl mt-6 border border-white/15 shadow-[0_10px_40px_rgba(0,0,0,0.4)]'>
					{cart.length === 0 ? (
						<div className='flex flex-col gap-4 items-center justify-center lg:py-50 py-25 opacity-0 translate-y-10 cart-preview'>
							<h2 className='lg:text-4xl text-2xl font-semibold '>
								Your cart is empty
							</h2>
						</div>
					) : (
						<div className='grid lg:grid-cols-2 lg:py-8 py-6 opacity-0 translate-y-10 cart-preview '>
							<div className='flex flex-col gap-4 divide-y divide-muted/50'>
								{cart.map((item) => (
									<div
										key={`${item.id}-${item.size}`}
										className='flex lg:gap-6 max-sm:justify-between items-center pb-5'>
										<div className='w-40 h-40 relative'>
											<Image
												src={item.image}
												alt={item.name}
												fill
												className='object-cover rounded'
												sizes='(max-width: 768px) 80vw, 8vw'
												loading='eager'
											/>
										</div>
										<div className='flex flex-col gap-2.5 items-center '>
											<h3 className='lg:text-2xl text-xl font-heading tracking-wide'>
												{item.name}
											</h3>
											<div className='flex items-center gap-2'>
												<button
													onClick={() =>
														updateQuantity(
															item.id,
															item.size,
															item.quantity - 1,
														)
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
														updateQuantity(
															item.id,
															item.size,
															item.quantity + 1,
														)
													}
													className='border border-white/20 cursor-pointer text-white w-8 h-8 rounded-full hover:border-white transition'>
													+
												</button>
											</div>
											<p className='lg:text-lg font-semibold'>
												{item.price} CZK
											</p>
											<p className='text-sm text-muted'>Size: {item.size}</p>
											<button
												onClick={() => removeFromCart(item.id, item.size)}
												className='text-white/80 hover:text-white transition text-xs tracking-widest uppercase cursor-pointer'>
												Remove
											</button>
										</div>
									</div>
								))}
							</div>

							<div className='border border-white/15 p-6 rounded-sm flex flex-col lg:gap-6 gap-4 lg:ml-auto self-end'>
								<h2 className='lg:text-2xl text-lg font-bold tracking-wide'>
									Order Summary
								</h2>
								<div className='w-full h-px bg-muted/50' />
								<p className='tracking-wider'>
									Subtotal:{' '}
									<span className='font-semibold tracking-wide'>
										{subtotal} CZK
									</span>
								</p>
								<p className='tracking-wider'>
									Shipping:{' '}
									<span className='font-semibold tracking-wide'>
										{shipping} CZK
									</span>
								</p>
								<div className='w-full h-px bg-muted/50' />
								<p className='lg:text-2xl font-semibold tracking-wider'>
									Total:{' '}
									<span className='font-bold tracking-wide'>{total} CZK</span>
								</p>
								<button
									onClick={handleCheckout}
									className='bg-white cursor-pointer text-bg text-lg font-medium py-2 px-4 lg:px-16 lg:py-2 rounded hover:bg-white/90 transition uppercase tracking-widest '>
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
