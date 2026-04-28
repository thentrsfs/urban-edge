'use client';

import { useCart } from '@/app/context/CartContext';
import Image from 'next/image';

const CartPage = () => {
	const { cart, removeFromCart, updateQuantity } = useCart();

	const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

	return (
		<div className='p-30 text-white'>
			{cart.map((item) => (
				<div
					key={item.id}
					className='flex gap-4 mb-4'>
					<Image
						src={item.image}
						alt={item.name}
						width={80}
						height={80}
					/>

					<div className='flex flex-col gap-2'>
						<p>{item.name}</p>
						<p>${item.price}</p>

						<input
							type='number'
							value={item.quantity}
							onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
						/>

						<button
							className='z-50 bg-white cursor-pointer text-bg'
							onClick={() => removeFromCart(item.id)}>
							Remove
						</button>
					</div>
				</div>
			))}

			<h2>Total: ${total}</h2>

			<button>Checkout</button>
		</div>
	);
};

export default CartPage;
