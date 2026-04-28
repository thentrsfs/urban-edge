'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useUI } from '../../context/UIProvider';

const Nav = () => {
	const pathname = usePathname();
	const { openMenu } = useUI();

	return (
		<nav className='absolute top-0 w-full flex justify-between items-center lg:px-30 p-6 lg:py-8 z-11 text-white'>
			<Link href='/'>
				<h1 className='lg:text-5xl text-3xl font-bold font-heading'>
					UrbanEdge
				</h1>
			</Link>
			<button
				onClick={openMenu}
				className='lg:hidden text-lg font-medium'>
				Menu
			</button>
			<ul className='lg:flex lg:gap-15 tracking-widest text-sm items-center hidden uppercase text-white/80'>
				{pathname !== '/' ? (
					<li className='cursor-pointer relative group hover:text-white transition-all duration-300'>
						<Link href='/'>Home</Link>{' '}
						<span className='absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full' />
					</li>
				) : (
					<div className='flex lg:gap-15'>
						<li className='cursor-pointer relative group hover:text-white transition-all duration-300'>
							<Link href='/shop'>Shop</Link>{' '}
							<span className='absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full' />
						</li>
						<li className='cursor-pointer relative group hover:text-white transition-all duration-300'>
							<Link href='/#latest-drops'>Latest Drops</Link>{' '}
							<span className='absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full' />
						</li>
						<li className='cursor-pointer relative group hover:text-white transition-all duration-300'>
							<Link href='#lookbook'>Lookbook</Link>{' '}
							<span className='absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full' />
						</li>
					</div>
				)}

				<li className='cursor-pointer relative group hover:text-white transition-all duration-300'>
					<Link href='/cart'>Cart</Link>{' '}
					<span className='absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0' />
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
