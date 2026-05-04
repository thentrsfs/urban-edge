'use client';

import Image from 'next/image';

import { useCart } from '../store/cart';

const CartPage = () => {
	const cart = useCart((state) => state.cart);
	const updateQuantity = useCart((state) => state.updateQuantity);
	const removeFromCart = useCart((state) => state.removeFromCart);

	const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

	return (
		<div className='p-30 text-white'>
			{cart.length === 0 ? (
				<h2>Your cart is empty</h2>
			) : (
				cart.map((item) => (
					<div
						key={item.id}
						className='flex gap-4 mb-4'>
						<div className='relative w-24 h-24'>
							<Image
								src={item.image}
								alt={item.name}
								fill
								className='object-contain'
								loading='eager'
								sizes='(max-width: 768px) 80vw, 5vw'
							/>
						</div>
						<div className='flex flex-col gap-2'>
							<p>{item.name}</p>
							<p>${item.price}</p>

							<input
								type='number'
								value={item.quantity}
								onChange={(e) =>
									updateQuantity(item.id, Number(e.target.value))
								}
							/>

							<button
								className='z-50 bg-white cursor-pointer text-bg'
								onClick={() => removeFromCart(item.id)}>
								Remove
							</button>
						</div>
					</div>
				))
			)}
			<h2>Total: ${total}</h2>

			<button>Checkout</button>
		</div>
	);
};

export default CartPage;
