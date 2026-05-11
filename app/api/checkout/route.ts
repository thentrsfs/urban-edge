import Stripe from "stripe";

import { CartItem } from "@/app/store/cart";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
    const { cart } = await req.json();
    
    const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        line_items: cart.map((item : CartItem) => ({
            price_data: {
                currency: 'czk',
                product_data: {
                    name: `${item.name} (${item.size})`,
                },
                unit_amount: item.price * 100,
            },
            quantity: item.quantity,
        })),

        success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
    })

    return new Response(JSON.stringify({ url: session.url }));
}