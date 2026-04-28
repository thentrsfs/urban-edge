'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type CartItem = {
	id: string;
	name: string;
	price: number;
	image: string;
	quantity: number;
};

interface CartContextType {
	cart: CartItem[];
	addToCart: (item: CartItem) => void;
	removeFromCart: (id: string) => void;
	updateQuantity: (id: string, quantity: number) => void;
	clearCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
	const ctx = useContext(CartContext);
	if (!ctx) throw new Error('useCart must be used within a CartProvider');
	return ctx;
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
	const [cart, setCart] = useState<CartItem[]>(() => {
		if (typeof window !== 'undefined') {
			const stored = localStorage.getItem('cart');
			return stored ? JSON.parse(stored) : [];
		}
		return [];
	});

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

	const removeFromCart = (id: string) => {
		setCart((prev) => prev.filter((item) => item.id !== id));
	};

	const updateQuantity = (id: string, quantity: number) => {
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
