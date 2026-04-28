'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type CartItem = {
	id: number;
	name: string;
	price: number;
	image: string;
	quantity: number;
};

interface CartContextType {
	cart: CartItem[];
	addToCart: (item: CartItem) => void;
	removeFromCart: (id: number) => void;
	updateQuantity: (id: number, quantity: number) => void;
	clearCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
	const ctx = useContext(CartContext);
	if (!ctx) throw new Error('useCart must be used within a CartProvider');
	return ctx;
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
	const [cart, setCart] = useState<CartItem[]>([]);

	useEffect(() => {
		const stored = localStorage.getItem('cart');
		if (stored) {
			setCart(JSON.parse(stored));
		}
	}, []);

	// Save to localStorage
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	const addToCart = (item: CartItem) => {
		setCart((prev) => {
			const existing = prev.find((p) => p.id === item.id);
			if (existing) {
				return prev.map((p) =>
					p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p,
				);
			}
			return [...prev, { ...item, quantity: 1 }];
		});
	};

	const removeFromCart = (id: number) => {
		setCart((prev) => prev.filter((item) => item.id !== id));
	};

	const updateQuantity = (id: number, quantity: number) => {
		setCart((prev) =>
			prev.map((item) => (item.id === id ? { ...item, quantity } : item)),
		);
	};

	const clearCart = () => {
		setCart([]);
	};

	return (
		<CartContext.Provider
			value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
			{children}
		</CartContext.Provider>
	);
};
