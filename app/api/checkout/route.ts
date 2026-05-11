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

        shipping_options: [
            {
                shipping_rate_data: {
                    type: 'fixed_amount',
                    fixed_amount: {
                        amount: 9900,
                        currency: 'czk',
                    },
                    display_name: 'Standard Shipping',
                    delivery_estimate: {
                        minimum: {
                            unit: 'business_day',
                            value: 2,
                        },
                        maximum: {
                            unit: 'business_day',
                            value: 5,
                        },
                    },
                }
            }
        ],

        success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
    })

    return new Response(JSON.stringify({ url: session.url }));
}