'use client';

import {create} from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type CartItem  = {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
    size: string;
}

interface CartState {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number, size: string) => void;
    updateQuantity: (id: number, size: string, quantity: number) => void;
    clearCart: () => void;
}

export const useCart = create<CartState>()(
    persist(
        (set, get) => ({
            cart: [],

            addToCart: (item) => {
                const cart = get().cart;
                const existing = cart.find((p) => p.id === item.id && p.size === item.size);

                if(existing) {
                    set({
                        cart: cart.map((p) => p.id === item.id && p.size === item.size ? {...p, quantity: p.quantity + 1} : p)
                    })
                } else {
                    set({ cart: [...cart, {...item, quantity: 1}]})
                }
            },

            removeFromCart: (id, size) => {
                set({
                    cart: get().cart.filter((item) => !(item.id === id && item.size === size) )
                })
            },

            updateQuantity: (id,size, quantity) => {
                set({
                    cart: get().cart.map((item) => item.id === id && item.size === size ? {...item, quantity} : item)
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