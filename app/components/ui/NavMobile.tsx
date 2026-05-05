'use client';

import { X } from 'lucide-react';
import Link from 'next/link';

import { useUI } from '@/app/store/ui';
import path from 'path';

const NavMobile = () => {
	const isNavOpen = useUI((state) => state.isNavOpen);
	const setIsNavOpen = useUI((state) => state.setIsNavOpen);
	const menuPath = useUI((state) => state.menuPath);

	const closeMenu = () => {
		setTimeout(() => setIsNavOpen(false), 300);
	};

	return (
		<nav
			className={`fixed inset-0 bg-bg text-white flex flex-col justify-center items-center transition ${isNavOpen ? 'opacity-100 z-12' : 'opacity-0'}`}>
			<ul className='flex flex-col gap-15 tracking-widest items-center uppercase text-white/80'>
				{menuPath === '/' ? (
					<>
						<li className='cursor-pointer relative group hover:text-white transition-all duration-300'>
							<Link
								href='/shop'
								onClick={closeMenu}>
								Shop
							</Link>{' '}
							<span className='absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full' />
						</li>
						<li className='cursor-pointer relative group hover:text-white transition-all duration-300'>
							<Link
								href='#latest-drops'
								onClick={closeMenu}>
								Latest Drops
							</Link>{' '}
							<span className='absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full' />
						</li>
						<li className='cursor-pointer relative group hover:text-white transition-all duration-300'>
							<Link
								href='#lookbook'
								onClick={closeMenu}>
								Lookbook
							</Link>{' '}
							<span className='absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full' />
						</li>
					</>
				) : menuPath === '/shop' ? (
					<li className='cursor-pointer relative group hover:text-white transition-all duration-300'>
						<Link
							href='/'
							onClick={closeMenu}>
							Home
						</Link>{' '}
						<span className='absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full' />
					</li>
				) : (
					<>
						<li className='cursor-pointer relative group hover:text-white transition-all duration-300'>
							<Link
								href='/'
								onClick={closeMenu}>
								Home
							</Link>{' '}
							<span className='absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full' />
						</li>
						<li className='cursor-pointer relative group hover:text-white transition-all duration-300'>
							<Link
								href='/shop'
								onClick={closeMenu}>
								Shop
							</Link>{' '}
							<span className='absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full' />
						</li>
					</>
				)}
				{menuPath !== '/cart' && (
					<li className='cursor-pointer relative group hover:text-white transition-all duration-300'>
						<Link
							href='/cart'
							onClick={closeMenu}>
							Cart
						</Link>{' '}
						<span className='absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0' />
					</li>
				)}
			</ul>
			<X
				onClick={() => setIsNavOpen(false)}
				className='absolute top-8 right-8'
			/>
		</nav>
	);
};

export default NavMobile;
