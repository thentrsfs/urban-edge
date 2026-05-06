'use client';

import {create} from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type CartItem  = {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartState {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
    clearCart: () => void;
}

export const useCart = create<CartState>()(
    persist(
        (set, get) => ({
            cart: [],

            addToCart: (item) => {
                const cart = get().cart;
                const existing = cart.find((p) => p.id === item.id);

                if(existing) {
                    set({
                        cart: cart.map((p) => p.id === item.id ? {...p, quantity: p.quantity + 1} : p)
                    })
                } else {
                    set({ cart: [...cart, {...item, quantity: 1}]})
                }
            },

            removeFromCart: (id) => {
                set({
                    cart: get().cart.filter((item) => item.id !== id)
                })
            },

            updateQuantity: (id, quantity) => {
                set({
                    cart: get().cart.map((item) => item.id === id ? {...item, quantity} : item)
                })
            },

            clearCart: () => {
                set({ cart: [] })
            }
        }),
        {
            name: 'cart-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
)