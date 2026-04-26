'use client';

import { X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useUI } from '../../context/UIProvider';
const NavMobile = () => {
	const pathname = usePathname();
	const { isNavOpen, setIsNavOpen } = useUI();
	return (
		<nav
			className={`fixed inset-0 bg-bg text-white flex flex-col justify-center items-center transition-all duration-300 ${isNavOpen ? 'opacity-100 z-99' : 'opacity-0'}`}>
			<ul className='flex flex-col gap-15 tracking-widest items-center uppercase text-white/80'>
				{pathname === '/' ? (
					<>
						<li className='cursor-pointer relative group hover:text-white transition-all duration-300'>
							<Link
								href='/shop'
								onClick={() => setIsNavOpen(false)}>
								Shop
							</Link>{' '}
							<span className='absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full' />
						</li>
						<li className='cursor-pointer relative group hover:text-white transition-all duration-300'>
							<Link
								href='#latest-drops'
								onClick={() => setIsNavOpen(false)}>
								Latest Drops
							</Link>{' '}
							<span className='absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full' />
						</li>
						<li className='cursor-pointer relative group hover:text-white transition-all duration-300'>
							<Link
								href='#lookbook'
								onClick={() => setIsNavOpen(false)}>
								Lookbook
							</Link>{' '}
							<span className='absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full' />
						</li>
					</>
				) : (
					<li className='cursor-pointer relative group hover:text-white transition-all duration-300'>
						<Link
							href='/'
							onClick={() => setIsNavOpen(false)}>
							Home
						</Link>{' '}
						<span className='absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full' />
					</li>
				)}
				<li className='cursor-pointer relative group hover:text-white transition-all duration-300'>
					<Link
						href='/cart'
						onClick={() => setIsNavOpen(false)}>
						Cart
					</Link>{' '}
					<span className='absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0' />
				</li>
			</ul>
			<X
				onClick={() => setIsNavOpen(false)}
				className='absolute top-8 right-8'
			/>
		</nav>
	);
};

export default NavMobile;
