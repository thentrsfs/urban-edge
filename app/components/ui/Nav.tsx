'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart } from 'lucide-react';

import { useUI } from '@/app/store/ui';
import { useCart } from '@/app/store/cart';

const Nav = () => {
	const pathname = usePathname();
	const openMenu = useUI((state) => state.openMenu);
	const cart = useCart((state) => state.cart);
	const isNavVisible = useUI((state) => state.isNavVisible);
	const isScrolled = useUI((state) => state.isScrolled);

	const totalItems = cart.length;

	const handleScrollToSection = ({
		e,
		id,
	}: {
		e: React.MouseEvent<HTMLAnchorElement>;
		id: string;
	}) => {
		e.preventDefault();
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<nav
			className={`fixed top-0 w-full flex justify-between items-center lg:px-30 p-6 lg:py-8 z-12 text-white transition-all duration-300 ${
				isNavVisible ? 'translate-y-0' : '-translate-y-full'
			} ${
				isScrolled ? 'bg-bg/50 backdrop-blur-lg shadow-lg' : 'bg-transparent'
			}`}>
			<button
				className='cursor-pointer'
				onClick={() => window.scrollTo(0, 0)}>
				<h1 className='lg:text-5xl text-3xl font-bold font-heading'>
					UrbanEdge
				</h1>
			</button>
			<button
				onClick={() => openMenu(pathname)}
				className='lg:hidden text-lg font-medium'>
				Menu
			</button>
			<ul className='lg:flex lg:gap-15 tracking-widest text-sm items-center hidden uppercase text-white/80'>
				{pathname === '/' ? (
					<div className='flex lg:gap-15'>
						<li className='cursor-pointer relative group hover:text-white transition-all duration-300'>
							<Link href='/shop'>Shop</Link>{' '}
							<span className='absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full' />
						</li>
						<li className='cursor-pointer relative group hover:text-white transition-all duration-300'>
							<Link
								href='#latest-drops'
								onClick={(e) =>
									handleScrollToSection({ e, id: 'latest-drops' })
								}>
								Latest Drops
							</Link>{' '}
							<span className='absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full' />
						</li>
						<li className='cursor-pointer relative group hover:text-white transition-all duration-300'>
							<Link
								href='#lookbook'
								onClick={(e) => handleScrollToSection({ e, id: 'lookbook' })}>
								Lookbook
							</Link>{' '}
							<span className='absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full' />
						</li>
					</div>
				) : pathname === '/shop' ? (
					<li className='cursor-pointer relative group hover:text-white transition-all duration-300'>
						<Link href='/'>Home</Link>{' '}
						<span className='absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full' />
					</li>
				) : (
					<div className='flex gap-15'>
						<li className='cursor-pointer relative group hover:text-white transition-all duration-300'>
							<Link href='/'>Home</Link>{' '}
							<span className='absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full' />
						</li>
						<li className='cursor-pointer relative group hover:text-white transition-all duration-300'>
							<Link href='/shop'>Shop</Link>{' '}
							<span className='absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full' />
						</li>
					</div>
				)}
				{pathname !== '/cart' && (
					<li className='cursor-pointer relative'>
						<Link href='/cart'>
							<ShoppingCart className='w-6 h-6' />
							{totalItems > 0 && (
								<span className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white text-black text-xs font-bold flex items-center justify-center'>
									{totalItems}
								</span>
							)}
						</Link>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Nav;
